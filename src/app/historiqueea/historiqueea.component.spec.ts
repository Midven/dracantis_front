import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueeaComponent } from './historiqueea.component';

describe('HistoriqueeaComponent', () => {
  let component: HistoriqueeaComponent;
  let fixture: ComponentFixture<HistoriqueeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
