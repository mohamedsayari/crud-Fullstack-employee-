import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelDetailleComponent } from './rappel-detaille.component';

describe('RappelDetailleComponent', () => {
  let component: RappelDetailleComponent;
  let fixture: ComponentFixture<RappelDetailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelDetailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
