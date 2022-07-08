import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecComponent } from './spec.component';

describe('SpecComponent', () => {
  let component: SpecComponent;
  let fixture: ComponentFixture<SpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
