import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientComponent } from './edit-client.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('EditClientComponent', () => {
  let component: EditClientComponent;
  let fixture: ComponentFixture<EditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditClientComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(EditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
