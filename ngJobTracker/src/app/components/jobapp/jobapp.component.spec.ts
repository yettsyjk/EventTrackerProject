import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobappComponent } from './jobapp.component';

describe('JobappComponent', () => {
  let component: JobappComponent;
  let fixture: ComponentFixture<JobappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
