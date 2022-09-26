import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamingoComponent } from './flamingo.component';

describe('FlamingoComponent', () => {
  let component: FlamingoComponent;
  let fixture: ComponentFixture<FlamingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlamingoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
