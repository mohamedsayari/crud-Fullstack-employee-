import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRappelComponent } from './create-rappel.component';

describe('CreateRappelComponent', () => {
  let component: CreateRappelComponent;
  let fixture: ComponentFixture<CreateRappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
