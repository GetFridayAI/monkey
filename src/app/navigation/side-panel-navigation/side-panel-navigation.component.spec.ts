import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelNavigationComponent } from './side-panel-navigation.component';

describe('SidePanelNavigationComponent', () => {
  let component: SidePanelNavigationComponent;
  let fixture: ComponentFixture<SidePanelNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePanelNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
