package org.apache.guacamole.auth.duo;

import com.duosecurity.duoweb.DuoWeb;
import java.util.Collections;
import javax.servlet.http.HttpServletRequest;
import org.apache.guacamole.GuacamoleClientException;
import org.apache.guacamole.GuacamoleException;
import org.apache.guacamole.form.Field;
import org.apache.guacamole.net.auth.AuthenticatedUser;
import org.apache.guacamole.net.auth.AuthenticationProvider;
import org.apache.guacamole.net.auth.Credentials;
import org.apache.guacamole.net.auth.UserContext;
import org.apache.guacamole.net.auth.credentials.CredentialsInfo;
import org.apache.guacamole.net.auth.credentials.GuacamoleInsufficientCredentialsException;

/**
 * DuoWeb MFA implementation. Simply prompts the user for an
 * additional word prior to allowing login.
 *
 * @author Michael Jumper
 */
public class DuoAuthenticationProvider implements AuthenticationProvider {

    private static final String DUO_PROMPT_FIELD_NAME = "duo-prompt";

    @Override
    public String getIdentifier() {
        return "duo";
    }

    @Override
    public AuthenticatedUser authenticateUser(Credentials credentials)
            throws GuacamoleException {
        return null;
    }

    @Override
    public AuthenticatedUser updateAuthenticatedUser(AuthenticatedUser authenticatedUser,
            Credentials credentials) throws GuacamoleException {
        return authenticatedUser;
    }

    @Override
    public UserContext getUserContext(AuthenticatedUser authenticatedUser)
            throws GuacamoleException {

        // Pull the original HTTP request used to authenticate
        Credentials credentials = authenticatedUser.getCredentials();
        HttpServletRequest request = credentials.getRequest();


        // Require that the duo prompt
        String duoPromptValue = request.getParameter(DUO_PROMPT_FIELD_NAME);
        if (duoPromptValue == null) {

            String sigRequest = DuoWeb.signRequest(
                    "iKey", // iKey
                    "sKey", // sKey
                    "aKey", // aKey
                    authenticatedUser.getIdentifier() // username
            );

            CredentialsInfo DUO_PROMPT_INFO =
                new CredentialsInfo(Collections.<Field>singletonList(new DuoPromptField(
                    DUO_PROMPT_FIELD_NAME,
                    "host",
                    sigRequest)
                ));

            throw new GuacamoleInsufficientCredentialsException(
                    "LOGIN.INFO_DUO_AUTH_REQUIRED",
                    DUO_PROMPT_INFO);
        }

        // Randomly fail/allow authentication if field is provided
        if (Math.random() > 0.5d)
            return null;

        // Security password was invalid
        throw new GuacamoleClientException("LOGIN.INFO_DUO_VALIDATION_CODE_INCORRECT");

    }

    @Override
    public UserContext updateUserContext(UserContext context,
            AuthenticatedUser authenticatedUser, Credentials credentials)
                throws GuacamoleException {
        return context;
    }

}
