import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscoreComponent } from './listscore.component';

describe('ListscoreComponent', () => {
  let component: ListscoreComponent;
  let fixture: ComponentFixture<ListscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
