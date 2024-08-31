import { type ClientsFacade, type Client } from '@/libs';

type BooleanProperties<T> = {
  [K in keyof T]: Extract<T[K], boolean> extends never ? never : K;
}[keyof T];

type ClientCapabilities = Exclude<
  BooleanProperties<Client>,
  undefined | 'enabled'
>;

const capabilitiesLabels: Record<ClientCapabilities, string> = {
  requireClientSecret: 'Require secret',
  requireConsent: 'Require consent',
  allowRememberConsent: 'Allow remember consent',
  alwaysIncludeUserClaimsInIdToken: 'Always include user claims in idToken',
  requirePkce: 'Require Pkce',
  allowPlainTextPkce: 'Allow Plain Text Pkce',
  allowAccessTokensViaBrowser: 'Allow AccessTokens Via Browser',
  frontChannelLogoutSessionRequired: 'Front Channel Logout Session Required',
  backChannelLogoutSessionRequired: 'Back Channel Logout Session Required',
  allowOfflineAccess: 'Allow Offline Access',
  updateAccessTokenClaimsOnRefresh: 'Update AccessToken Claims On Refresh',
  enableLocalLogin: 'Enable Local Login',
  includeJwtId: 'Include Jwt Id',
  alwaysSendClientClaims: 'Always Send Client Claims',
};
function extractSelectedCapabilities(obj: Client): string[] {
  return Object.keys(obj)
    .filter((key) => obj[key as ClientCapabilities] === true)
    .map((key) => capabilitiesLabels[key as ClientCapabilities]);
}

export const createClientDetailsViewModel = ({
  clientsFacade,
  clientId,
}: {
  clientsFacade: ClientsFacade;
  clientId: string;
}) => {
  let client = clientsFacade.currentClient;
  let selectedClient: Client = {
    id: 0,
    clientId: '',
    protocolType: 'oidc',
    allowedGrantTypes: [],
  };
  let capabilities: string[] = [];
  clientsFacade.selectClient(clientId);
  client.subscribe((client) => {
    selectedClient = client;
    capabilities = extractSelectedCapabilities(client);
  });

  return {
    selectedClient,
    capabilities,
  };
};
