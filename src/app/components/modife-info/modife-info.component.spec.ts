import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifeInfoComponent } from './modife-info.component';

describe('ModifeInfoComponent', () => {
  let component: ModifeInfoComponent;
  let fixture: ComponentFixture<ModifeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
