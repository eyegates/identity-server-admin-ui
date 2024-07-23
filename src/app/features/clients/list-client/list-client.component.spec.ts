import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientComponent } from './list-client.component';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { createStore } from '@/libs';

describe('ListClientComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListClientComponent],
      providers: [provideRouter(routes), provideAnimations(), createStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
