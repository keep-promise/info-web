import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmateEditComponent } from './classmate-edit.component';

describe('ClassmateEditComponent', () => {
  let component: ClassmateEditComponent;
  let fixture: ComponentFixture<ClassmateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassmateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
