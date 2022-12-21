import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdminComponent } from './liste-admin.component';

describe('ListeAdminComponent', () => {
  let component: ListeAdminComponent;
  let fixture: ComponentFixture<ListeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
