import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateDemandeComponent } from './uppdate-demande.component';

describe('UppdateDemandeComponent', () => {
  let component: UppdateDemandeComponent;
  let fixture: ComponentFixture<UppdateDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppdateDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppdateDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
