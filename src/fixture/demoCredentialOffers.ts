import { CredentialOffer, CredentialRenderTypes } from '@jolocom/protocol-ts'

export const demoCredentialOffers: CredentialOffer[] = [
  {
    type: 'DemoCred', // NOTE: this actually doesn't necessarily need to match
    requestedInput: {}, // currently not used
    renderInfo: {
      renderAs: CredentialRenderTypes.document,
      background: {
        color: '#a599d8',
      },
    },
    credential: {
      schema: 'https://schema.org/EducationalOccupationalCredential',
    },
  },
  {
    type: 'DemoIdCard', // NOTE: this actually doesn't necessarily need to match
    requestedInput: {}, // currently not used
    renderInfo: {
      renderAs: CredentialRenderTypes.document,
      background: {
        color: '#a599d8',
      },
    },
    credential: {
      schema: 'https://schema.org/EducationalOccupationalCredential',
    },
  },
  {
    type: 'DemoDriversLicense', // NOTE: this actually doesn't necessarily need to match
    requestedInput: {}, // currently not used
    renderInfo: {
      renderAs: CredentialRenderTypes.document,
      background: {
        color: '#a599d8',
      },
    },
    credential: {
      schema: 'https://schema.org/EducationalOccupationalCredential',
    },
  },
]
