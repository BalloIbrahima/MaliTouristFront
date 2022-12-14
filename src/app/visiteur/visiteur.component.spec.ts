import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurComponent } from './visiteur.component';

describe('VisiteurComponent', () => {
  let component: VisiteurComponent;
  let fixture: ComponentFixture<VisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
