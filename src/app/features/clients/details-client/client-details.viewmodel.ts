import { type ClientsFacade } from '@/libs';
import {
  capabilitiesLabels,
  type Client,
  type ClientCapabilities,
} from '../shared/types';

function extractSelectedCapabilities(obj: Client): string[] {
  return Object.keys(obj)
    .filter((key) => obj[key as ClientCapabilities] === true)
    .map((key) => capabilitiesLabels[key as ClientCapabilities]);
}

export class ClientDetailsViewModel {
  selectedClient: Client = <Client>{};
  capabilities: string[] = [];

  constructor({
    clientsFacade,
    clientId,
  }: {
    clientsFacade: ClientsFacade;
    clientId: string;
  }) {
    clientsFacade.selectClient(clientId);

    clientsFacade.currentClient.subscribe((client) => {
      this.selectedClient = client;
      this.capabilities = extractSelectedCapabilities(client);
    });
  }
}

export const createClientDetailsViewModel = ({
  clientsFacade,
  clientId,
}: {
  clientsFacade: ClientsFacade;
  clientId: string;
}): ClientDetailsViewModel => {
  return new ClientDetailsViewModel({
    clientsFacade,
    clientId,
  });
};
