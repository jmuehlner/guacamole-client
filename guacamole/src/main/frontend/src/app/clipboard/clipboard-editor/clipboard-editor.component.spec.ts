import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardEditorComponent } from './clipboard-editor.component';

describe('ClipboardEditorComponent', () => {
  let component: ClipboardEditorComponent;
  let fixture: ComponentFixture<ClipboardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
