import { FormControl, Validators, type FormBuilder } from '@angular/forms';
import {
  capabilitiesLabels,
  type ClientSecret,
  type CorsOrigin,
  type PostLogoutRedirectUri,
  type RedicrectUri,
  type SecretType,
  type GrantType,
  type ClientScope,
  type ClientCapabilities,
  type Claim,
  type IdentityProviderRestriction,
  type Property,
  type GrantTypeData,
} from '../shared/types';

export class CreateClientViewModel {
  constructor(private formBuilder: FormBuilder) {}
  protocolTypeList = [
    { id: 'oidc', value: 'OpenIdConnect' },
    { id: 'saml2p', value: 'Saml2p' },
    { id: 'wsfed', value: 'WsFederation' },
  ];
  refreshTokenUsageList = [
    { id: 0, value: 'Reuse' },
    { id: 1, value: 'One time only' },
  ];
  refreshTokenExpirationList = [
    { id: 0, value: 'Sliding' },
    { id: 1, value: 'Absolute' },
  ];
  accessTokenTypeList = [
    { id: 0, value: 'Jwt' },
    { id: 1, value: 'Reference' },
  ];
  secretTypes: SecretType[] = [
    'SharedSecret',
    'X509Thumbprint',
    'X509Name',
    'X509CertificateBase64',
  ];
  grantTypesData: GrantTypeData[] = [
    { type: 'implicit', selectable: true },
    { type: 'hybrid', selectable: true },
    { type: 'authorization_code', selectable: true },
    { type: 'client_credentials', selectable: true },
    { type: 'password', selectable: true },
  ];
  capabilities = Object.entries(capabilitiesLabels);
  showUriConfig = false;
  clientFormGroup = this.formBuilder.group({
    enabled: new FormControl(true),
    clientId: new FormControl('xcvzxc', { validators: Validators.required }),
    protocolType: new FormControl('oidc', { validators: Validators.required }),
    clientName: new FormControl(''),
    description: new FormControl(''),
    clientUri: new FormControl(''),
    logoUri: new FormControl(''),
    redirectUris: new FormControl<RedicrectUri[]>([]),
    clientSecrets: new FormControl<ClientSecret[]>([]),
    allowedCorsOrigins: new FormControl<CorsOrigin[]>([]),
    postLogoutRedirectUris: new FormControl<PostLogoutRedirectUri[]>([]),
    allowedGrantTypes: new FormControl<GrantType[]>([]),
    allowedScopes: new FormControl<ClientScope[]>([]),
    claims: new FormControl<Claim[]>([]),
    properties: new FormControl<Property[]>([]),
    identityProviderRestrictions: new FormControl<
      IdentityProviderRestriction[]
    >([]),
    capabilities: new FormControl<ClientCapabilities[]>([]),
    frontChannelLogoutUri: new FormControl(''),
    backChannelLogoutUri: new FormControl(''),
    identityTokenLifetime: new FormControl(300),
    accessTokenLifetime: new FormControl(3600),
    authorizationCodeLifetime: new FormControl(300),
    consentLifetime: new FormControl(0),
    absoluteRefreshTokenLifetime: new FormControl(2592000),
    slidingRefreshTokenLifetime: new FormControl(1296000),
    refreshTokenUsage: new FormControl(1),
    refreshTokenExpiration: new FormControl(1),
    accessTokenType: new FormControl(0),
    clientClaimsPrefix: new FormControl('client_'),
    pairWiseSubjectSalt: new FormControl(''),
  });
  onsecretChanged(secrets: ClientSecret[]) {
    this.clientFormGroup.patchValue({
      clientSecrets: secrets,
    });
  }
  onGtSelectionChange(grantTypes: GrantType[]) {
    if (
      grantTypes.findIndex(
        (s) =>
          s.grantType === 'implicit' ||
          s.grantType === 'authorization_code' ||
          s.grantType === 'hybrid'
      ) > -1
    ) {
      this.showUriConfig = true;
    } else {
      this.showUriConfig = false;
    }
    this.clientFormGroup.patchValue({ allowedGrantTypes: grantTypes });
  }
  onScopeChange(scopes: ClientScope[]) {
    this.clientFormGroup.patchValue({ allowedScopes: scopes });
  }
}

export const buildCreateClientViewModel = (
  formBuilder: FormBuilder
): CreateClientViewModel => {
  return new CreateClientViewModel(formBuilder);
};
