import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelListComponent } from './rappel-list.component';

describe('RappelListComponent', () => {
  let component: RappelListComponent;
  let fixture: ComponentFixture<RappelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
