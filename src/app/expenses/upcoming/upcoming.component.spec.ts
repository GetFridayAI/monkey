import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingExpensesComponent } from './upcoming.component';

describe('UpcomingExpensesComponent', () => {
  let component: UpcomingExpensesComponent;
  let fixture: ComponentFixture<UpcomingExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
