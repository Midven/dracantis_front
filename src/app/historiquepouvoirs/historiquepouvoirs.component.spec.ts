import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquepouvoirsComponent } from './historiquepouvoirs.component';

describe('HistoriquepouvoirsComponent', () => {
  let component: HistoriquepouvoirsComponent;
  let fixture: ComponentFixture<HistoriquepouvoirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquepouvoirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquepouvoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
