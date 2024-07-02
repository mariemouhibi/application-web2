import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepreselectonneeComponent } from './listepreselectonnee.component';

describe('ListepreselectonneeComponent', () => {
  let component: ListepreselectonneeComponent;
  let fixture: ComponentFixture<ListepreselectonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepreselectonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepreselectonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
