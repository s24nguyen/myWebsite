import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroNocComponent } from './astro-noc.component';

describe('AstroNocComponent', () => {
  let component: AstroNocComponent;
  let fixture: ComponentFixture<AstroNocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroNocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroNocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
