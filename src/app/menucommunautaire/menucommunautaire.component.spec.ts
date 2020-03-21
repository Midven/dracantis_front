import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucommunautaireComponent } from './menucommunautaire.component';

describe('MenucommunautaireComponent', () => {
  let component: MenucommunautaireComponent;
  let fixture: ComponentFixture<MenucommunautaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucommunautaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucommunautaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
