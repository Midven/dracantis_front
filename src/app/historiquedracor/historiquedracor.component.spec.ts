import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedracorComponent } from './historiquedracor.component';

describe('HistoriquedracorComponent', () => {
  let component: HistoriquedracorComponent;
  let fixture: ComponentFixture<HistoriquedracorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquedracorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquedracorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
