import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmateListComponent } from './classmate-list.component';

describe('ClassmateListComponent', () => {
  let component: ClassmateListComponent;
  let fixture: ComponentFixture<ClassmateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassmateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
