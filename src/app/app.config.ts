import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { tokenInterceptor } from './services/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
    provideHttpClient(withInterceptors([tokenInterceptor]),withFetch()),
    provideNoopAnimations(),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};
