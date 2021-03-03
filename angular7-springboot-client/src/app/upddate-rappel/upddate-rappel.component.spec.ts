import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddateRappelComponent } from './upddate-rappel.component';

describe('UpddateRappelComponent', () => {
  let component: UpddateRappelComponent;
  let fixture: ComponentFixture<UpddateRappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpddateRappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddateRappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
