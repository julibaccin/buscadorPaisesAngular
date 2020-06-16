import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificoComponent } from './especifico.component';

describe('EspecificoComponent', () => {
  let component: EspecificoComponent;
  let fixture: ComponentFixture<EspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
