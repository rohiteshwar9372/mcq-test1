import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResutlComponent } from './resutl.component';

describe('ResutlComponent', () => {
  let component: ResutlComponent;
  let fixture: ComponentFixture<ResutlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResutlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResutlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
