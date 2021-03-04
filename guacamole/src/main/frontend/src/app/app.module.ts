import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { TooManyTerminalWindowsOverTimeGraphingOfThemComponent } from './too-many-terminal-windows-over-time-graphing-of-them/too-many-terminal-windows-over-time-graphing-of-them.component';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: any;
angular.module('index').directive('tooManyWindows', downgradeComponent({component: TooManyTerminalWindowsOverTimeGraphingOfThemComponent}));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [TooManyTerminalWindowsOverTimeGraphingOfThemComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['index'], { strictDi: true });
  }
}

