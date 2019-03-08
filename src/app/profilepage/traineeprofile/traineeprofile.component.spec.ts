import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeprofileComponent } from './traineeprofile.component';

describe('TraineeprofileComponent', () => {
  let component: TraineeprofileComponent;
  let fixture: ComponentFixture<TraineeprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
