import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateripageComponent } from './materipage.component';

describe('MateripageComponent', () => {
  let component: MateripageComponent;
  let fixture: ComponentFixture<MateripageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateripageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateripageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
