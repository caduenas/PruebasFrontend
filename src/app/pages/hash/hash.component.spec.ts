import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashComponent } from './hash.component';

describe('HashComponent', () => {
  let component: HashComponent;
  let fixture: ComponentFixture<HashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
