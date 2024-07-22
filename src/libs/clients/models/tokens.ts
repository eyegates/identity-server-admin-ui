import { InjectionToken } from '@angular/core';
import type { ClientsGateway } from './clients.gateway';

export const CLIENTSGATEWAY = new InjectionToken<ClientsGateway>(
  'ClientsGateway'
);
