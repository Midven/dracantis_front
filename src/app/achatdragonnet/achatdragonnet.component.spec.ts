import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatdragonnetComponent } from './achatdragonnet.component';

describe('AchatdragonnetComponent', () => {
  let component: AchatdragonnetComponent;
  let fixture: ComponentFixture<AchatdragonnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatdragonnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatdragonnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
