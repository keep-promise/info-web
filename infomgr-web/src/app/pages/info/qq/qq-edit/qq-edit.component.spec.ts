import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqEditComponent } from './qq-edit.component';

describe('QqEditComponent', () => {
  let component: QqEditComponent;
  let fixture: ComponentFixture<QqEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
