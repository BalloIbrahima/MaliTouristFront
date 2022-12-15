import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRegionComponent } from './detail-region.component';

describe('DetailRegionComponent', () => {
  let component: DetailRegionComponent;
  let fixture: ComponentFixture<DetailRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
