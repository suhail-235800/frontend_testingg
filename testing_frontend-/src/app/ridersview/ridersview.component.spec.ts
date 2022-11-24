import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersviewComponent } from './ridersview.component';

describe('RidersviewComponent', () => {
  let component: RidersviewComponent;
  let fixture: ComponentFixture<RidersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidersviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RidersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
