import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerButtonComponent } from './controller-button.component';

describe('ControllerButtonComponent', () => {
  let component: ControllerButtonComponent;
  let fixture: ComponentFixture<ControllerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
