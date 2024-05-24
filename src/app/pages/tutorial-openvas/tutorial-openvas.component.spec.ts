import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialOpenvasComponent } from './tutorial-openvas.component';

describe('TutorialOpenvasComponent', () => {
  let component: TutorialOpenvasComponent;
  let fixture: ComponentFixture<TutorialOpenvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialOpenvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialOpenvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
