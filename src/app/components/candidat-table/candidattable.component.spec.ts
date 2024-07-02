import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidattableComponent } from './candidattable.component';

describe('CandidattableComponent', () => {
  let component: CandidattableComponent;
  let fixture: ComponentFixture<CandidattableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidattableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
