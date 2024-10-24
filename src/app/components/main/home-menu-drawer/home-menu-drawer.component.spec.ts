import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuDrawerComponent } from './home-menu-drawer.component';

describe('HomeMenuDrawerComponent', () => {
  let component: HomeMenuDrawerComponent;
  let fixture: ComponentFixture<HomeMenuDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMenuDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
