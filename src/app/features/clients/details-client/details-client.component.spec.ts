import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClientComponent } from './details-client.component';
import { provideRouter } from '@angular/router';
import { routes } from '../clients.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { createStore } from '@/libs';

describe('DetailsClientComponent', () => {
  let component: DetailsClientComponent;
  let fixture: ComponentFixture<DetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsClientComponent],
      providers: [provideRouter(routes), provideAnimations(), createStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
