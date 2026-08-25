import { ApplicationConfig, enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import * as useIcons from '../use-icons';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { environment } from '../environments/environment';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

if (environment.production) {
  enableProdMode();
}

addIcons(environment.production ? useIcons : allIcons);

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withNoIncrementalHydration()),
    provideHttpClient(withXhr()),
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
