import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooManyTerminalWindowsOverTimeGraphingOfThemComponent } from './too-many-terminal-windows-over-time-graphing-of-them.component';

describe('TooManyTerminalWindowsOverTimeGraphingOfThemComponent', () => {
  let component: TooManyTerminalWindowsOverTimeGraphingOfThemComponent;
  let fixture: ComponentFixture<TooManyTerminalWindowsOverTimeGraphingOfThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooManyTerminalWindowsOverTimeGraphingOfThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooManyTerminalWindowsOverTimeGraphingOfThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
