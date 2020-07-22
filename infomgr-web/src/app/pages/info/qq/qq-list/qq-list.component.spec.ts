import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqListComponent } from './qq-list.component';

describe('QqListComponent', () => {
  let component: QqListComponent;
  let fixture: ComponentFixture<QqListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
