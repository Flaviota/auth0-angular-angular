import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-a1gk7szxij380stj.us.auth0.com',
      clientId: 'qOLNqIncpwlzJCkEV7BCvgEV59oV5heJ',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: '',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
    provideHttpClient()
  ],
};
