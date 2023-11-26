import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyGrailLayoutComponent } from './holy-grail-layout.component';

describe('HolyGrailLayoutComponent', () => {
  let component: HolyGrailLayoutComponent;
  let fixture: ComponentFixture<HolyGrailLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolyGrailLayoutComponent]
    });
    fixture = TestBed.createComponent(HolyGrailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
