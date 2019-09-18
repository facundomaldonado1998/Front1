import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMapaComponent } from './home-mapa.component';

describe('HomeMapaComponent', () => {
  let component: HomeMapaComponent;
  let fixture: ComponentFixture<HomeMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
