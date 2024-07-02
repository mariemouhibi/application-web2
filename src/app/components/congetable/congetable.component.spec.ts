import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongetableComponent } from './congetable.component';

describe('CongetableComponent', () => {
  let component: CongetableComponent;
  let fixture: ComponentFixture<CongetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
