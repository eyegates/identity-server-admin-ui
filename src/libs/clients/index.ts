import { createClientEffect, loadClientsEffect } from './state/clients.effects';
import { clientsFeature } from './state/clients.state';
export { type ClientsState } from './state/clients.state';
export type * as ClientTypes from './models/client.model';
export { ClientsFacade } from './state/clients.facade';
export const clientEffects = {
  loadClients: loadClientsEffect,
  createClient: createClientEffect,
};

export const selectProjectIds = clientsFeature.selectIds;

export const selectClientEntities = clientsFeature.selectEntities;

export const selectAllClients = clientsFeature.selectAll;

export const selectCurrentClientId = clientsFeature.selectSelectedClientId;

export const selectCurrentClient = clientsFeature.selectCurrentClient;

export const selectTotalClients = clientsFeature.selectTotalClient;
