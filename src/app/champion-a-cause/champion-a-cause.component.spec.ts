import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionACauseComponent } from './champion-a-cause.component';

describe('ChampionACauseComponent', () => {
  let component: ChampionACauseComponent;
  let fixture: ComponentFixture<ChampionACauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionACauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionACauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
