import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusAreaComponent } from './focus-area.component';

describe('FocusAreaComponent', () => {
  let component: FocusAreaComponent;
  let fixture: ComponentFixture<FocusAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
