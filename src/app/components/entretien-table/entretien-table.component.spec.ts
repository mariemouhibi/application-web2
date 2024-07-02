import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienTableComponent } from './entretien-table.component';

describe('EntretienTableComponent', () => {
  let component: EntretienTableComponent;
  let fixture: ComponentFixture<EntretienTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretienTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
