import { type ClientTypes } from '@/libs';
export type Client = ClientTypes.Client;
export type ClientSecret = ClientTypes.ClientSecret;
export type SecretType = ClientTypes.SecretType;
export type RedicrectUri = ClientTypes.RedirectUri;
export type CorsOrigin = ClientTypes.CorsOrigin;
export type PostLogoutRedirectUri = ClientTypes.PostLogoutRedirectUri;
export type GrantType = ClientTypes.GrantType;
export type ClientScope = ClientTypes.ClientScope;
export type Claim = ClientTypes.Claim;
export type Property = ClientTypes.Property;
export type AllowedGrantType = ClientTypes.AllowedGrantType;
export type IdentityProviderRestriction =
  ClientTypes.IdentityProviderRestriction;
type BooleanProperties<T> = {
  [K in keyof T]: Extract<T[K], boolean> extends never ? never : K;
}[keyof T];

export type ClientCapabilities = Exclude<
  BooleanProperties<Client>,
  undefined | 'enabled'
>;

export const capabilitiesLabels: Record<ClientCapabilities, string> = {
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

export type GrantTypeData = { type: AllowedGrantType; selectable: boolean };
