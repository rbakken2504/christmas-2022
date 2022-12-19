import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawVideoComponent } from './saw-video.component';

describe('SawVideoComponent', () => {
  let component: SawVideoComponent;
  let fixture: ComponentFixture<SawVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SawVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SawVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
