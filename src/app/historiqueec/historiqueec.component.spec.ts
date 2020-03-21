import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueecComponent } from './historiqueec.component';

describe('HistoriqueecComponent', () => {
  let component: HistoriqueecComponent;
  let fixture: ComponentFixture<HistoriqueecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
