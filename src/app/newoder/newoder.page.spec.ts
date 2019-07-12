import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoderPage } from './newoder.page';

describe('NewoderPage', () => {
  let component: NewoderPage;
  let fixture: ComponentFixture<NewoderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
