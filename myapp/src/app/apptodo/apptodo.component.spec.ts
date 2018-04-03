import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptodoComponent } from './apptodo.component';

describe('ApptodoComponent', () => {
  let component: ApptodoComponent;
  let fixture: ComponentFixture<ApptodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
