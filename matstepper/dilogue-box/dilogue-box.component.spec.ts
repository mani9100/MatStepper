import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogueBoxComponent } from './dilogue-box.component';

describe('DilogueBoxComponent', () => {
  let component: DilogueBoxComponent;
  let fixture: ComponentFixture<DilogueBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogueBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
