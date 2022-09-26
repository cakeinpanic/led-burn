import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageButtonComponent } from './stage-button.component';

describe('StageButtonComponent', () => {
  let component: StageButtonComponent;
  let fixture: ComponentFixture<StageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
