import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebatreeComponent } from './pruebatree.component';

describe('PruebatreeComponent', () => {
  let component: PruebatreeComponent;
  let fixture: ComponentFixture<PruebatreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebatreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebatreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
