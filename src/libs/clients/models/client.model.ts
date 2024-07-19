import { createEntityAdapter } from '@ngrx/entity';

export type Client = {
  id: number;
  enabled?: boolean;
  clientId: string;
  protocolType: ProtocolType;
  clientSecrets?: ClientSecret[];
  requireClientSecret?: boolean;
  clientName?: string;
  description?: string;
  clientUri?: string;
  logoUri?: string;
  requireConsent?: boolean;
  allowRememberConsent?: boolean;
  alwaysIncludeUserClaimsInIdToken?: boolean;
  allowedGrantTypes?: GrantType[];
  requirePkce?: boolean;
  allowPlainTextPkce?: boolean;
  allowAccessTokensViaBrowser?: boolean;
  redirectUris?: RedirectUri[];
  postLogoutRedirectUris?: PostLogoutRedirectUri[];
  frontChannelLogoutUri?: string;
  frontChannelLogoutSessionRequired?: boolean;
  backChannelLogoutUri?: string;
  backChannelLogoutSessionRequired?: boolean;
  allowOfflineAccess?: boolean;
  allowedScopes?: ClientScope[];
  identityTokenLifetime?: number;
  accessTokenLifetime?: number;
  authorizationCodeLifetime?: number;
  consentLifetime?: number;
  absoluteRefreshTokenLifetime?: number;
  slidingRefreshTokenLifetime?: number;
  refreshTokenUsage?: number;
  updateAccessTokenClaimsOnRefresh?: boolean;
  refreshTokenExpiration?: number;
  accessTokenType?: number;
  enableLocalLogin?: boolean;
  identityProviderRestrictions?: IdentityProviderRestriction[];
  includeJwtId?: boolean;
  claims?: Claim[];
  alwaysSendClientClaims?: boolean;
  clientClaimsPrefix?: string;
  pairWiseSubjectSalt?: string;
  allowedCorsOrigins?: CorsOrigin[];
  properties?: Property[];
};

export type ProtocolType = 'oidc' | 'wsfed' | 'saml2p';

export type ClientApiResponse = {
  totalCount: number;
  clients: Client[];
};

export type ClientSecret = {
  id: number;
  description?: string;
  value: string;
  expiration?: Date;
  type: string;
};

export type GrantType = {
  id: number;
  grantType: string;
};

export type RedirectUri = {
  id: number;
  redirectUri: string;
};

export type PostLogoutRedirectUri = {
  id: number;
  postLogoutRedirectUri: string;
};

export type Property = {
  id: number;
  key: string;
  value: string;
};

export type CorsOrigin = {
  id: number;
  origin: string;
};

export type Claim = {
  id: number;
  type: string;
  value: string;
};

export type IdentityProviderRestriction = {
  id: number;
  provider: string;
};

export type ClientScope = {
  id: number;
  scope: string;
};

export const clientsAdapter = createEntityAdapter<Client>();
