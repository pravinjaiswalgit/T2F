import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationNumberComponent } from './organisation-number.component';

describe('OrganisationNumberComponent', () => {
  let component: OrganisationNumberComponent;
  let fixture: ComponentFixture<OrganisationNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
