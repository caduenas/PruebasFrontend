import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacadenaComponent } from './listacadena.component';

describe('ListacadenaComponent', () => {
  let component: ListacadenaComponent;
  let fixture: ComponentFixture<ListacadenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListacadenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListacadenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
