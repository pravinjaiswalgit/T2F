import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChild2Component } from './lazy-child2.component';

describe('LazyChild2Component', () => {
  let component: LazyChild2Component;
  let fixture: ComponentFixture<LazyChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
