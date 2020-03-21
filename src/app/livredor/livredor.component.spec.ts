import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivredorComponent } from './livredor.component';

describe('LivredorComponent', () => {
  let component: LivredorComponent;
  let fixture: ComponentFixture<LivredorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivredorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
