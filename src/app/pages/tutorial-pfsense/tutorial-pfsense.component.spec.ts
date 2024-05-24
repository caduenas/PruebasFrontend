import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPfsenseComponent } from './tutorial-pfsense.component';

describe('TutorialPfsenseComponent', () => {
  let component: TutorialPfsenseComponent;
  let fixture: ComponentFixture<TutorialPfsenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialPfsenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialPfsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
