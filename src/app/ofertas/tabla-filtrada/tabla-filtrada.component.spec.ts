import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFiltradaComponent } from './tabla-filtrada.component';

describe('TablaFiltradaComponent', () => {
  let component: TablaFiltradaComponent;
  let fixture: ComponentFixture<TablaFiltradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaFiltradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFiltradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
