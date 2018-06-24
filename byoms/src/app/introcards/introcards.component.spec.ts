import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrocardsComponent } from './introcards.component';

describe('IntrocardsComponent', () => {
  let component: IntrocardsComponent;
  let fixture: ComponentFixture<IntrocardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrocardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
