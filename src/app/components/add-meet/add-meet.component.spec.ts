import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetComponent } from './add-meet.component';

describe('AddMeetComponent', () => {
  let component: AddMeetComponent;
  let fixture: ComponentFixture<AddMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
