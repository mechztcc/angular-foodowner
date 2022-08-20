import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateAddressComponent } from './card-create-address.component';

describe('CardCreateAddressComponent', () => {
  let component: CardCreateAddressComponent;
  let fixture: ComponentFixture<CardCreateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreateAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
