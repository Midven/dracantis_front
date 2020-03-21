import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquepseudoComponent } from './historiquepseudo.component';

describe('HistoriquepseudoComponent', () => {
  let component: HistoriquepseudoComponent;
  let fixture: ComponentFixture<HistoriquepseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquepseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquepseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
