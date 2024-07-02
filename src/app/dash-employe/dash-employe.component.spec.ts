import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEmployeComponent } from './dash-employe.component';

describe('DashEmployeComponent', () => {
  let component: DashEmployeComponent;
  let fixture: ComponentFixture<DashEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
