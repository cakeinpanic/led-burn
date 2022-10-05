import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDoalogComponent } from './code-doalog.component';

describe('CodeDoalogComponent', () => {
  let component: CodeDoalogComponent;
  let fixture: ComponentFixture<CodeDoalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeDoalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeDoalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
