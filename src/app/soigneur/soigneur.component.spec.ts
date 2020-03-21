import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoigneurComponent } from './soigneur.component';

describe('SoigneurComponent', () => {
  let component: SoigneurComponent;
  let fixture: ComponentFixture<SoigneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoigneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoigneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
