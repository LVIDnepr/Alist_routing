import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigastionComponent } from './navigastion.component';

describe('NavigastionComponent', () => {
  let component: NavigastionComponent;
  let fixture: ComponentFixture<NavigastionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigastionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigastionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
