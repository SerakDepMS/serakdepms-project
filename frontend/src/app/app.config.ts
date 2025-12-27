import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withDebugTracing, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { provideHttpClient, withFetch, withInterceptors, withJsonpSupport, withXsrfConfiguration } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Router con características avanzadas
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
      ...(isDevMode() ? [withDebugTracing()] : [])
    ),
    providePrimeNG({
      theme: {
          preset: Aura
      },
      ripple: true,
      inputStyle: 'outlined',
      zIndex: {
        modal: 1100,  
        overlay: 1000,
        menu: 1000,   
        tooltip: 1100 
      }
    }),
    /** Prime Ng Servicios Útiles */
    MessageService,     
    ConfirmationService,
    DialogService,
    // Animaciones (PrimeNG las necesita)
    provideAnimations(),
    provideAnimationsAsync(),
    /** Http Client Avanzado */
    provideHttpClient(
      withFetch(),
      withInterceptors([/* tus interceptors */]),
      withJsonpSupport(),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })
    ),
    // Internationalización (i18n)
    {
      provide: 'DEFAULT_LANGUAGE',
      useValue: 'es-ES'
    },
  ]
};
