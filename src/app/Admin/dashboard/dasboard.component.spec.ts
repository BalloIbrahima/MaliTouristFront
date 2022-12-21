import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardComponent } from './dasboard.component';

describe('DasboardComponent', () => {
  let component: DasboardComponent;
  let fixture: ComponentFixture<DasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
