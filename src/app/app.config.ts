import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment';

  console.log('Enviroments', environment);

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient( withFetch() )
  ]
};
