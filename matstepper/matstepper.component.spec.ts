import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatstepperComponent } from './matstepper.component';

describe('MatstepperComponent', () => {
  let component: MatstepperComponent;
  let fixture: ComponentFixture<MatstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
