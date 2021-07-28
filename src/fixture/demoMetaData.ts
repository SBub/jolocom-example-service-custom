import { ClaimsMetadata } from '../credential/claimsMetadata'

export const demoMetaData: ClaimsMetadata = {
  DemoCred:  {
    type: ['VerifiableCredential', 'DemoCred'],
      name: 'Demonstration Credential',
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
  DemoIdCard:  {
    type: ['VerifiableCredential', 'DemoIdCard'],
      name: 'Demonstration ID Card Credential',
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
  DemoDriversLicense:  {
    type: ['VerifiableCredential', 'DemoDriversLicense'],
      name: "Demonstration Driver's License Credential",
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
  ProofOfIdCredentialDemo:  {
    type: ['VerifiableCredential', 'ProofOfIdCredentialDemo'],
      name: 'Demonstration Proof Of ID Credential',
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
  ProofOfDriverLicenceDemo:  {
    type: ['VerifiableCredential', 'ProofOfDriverLicenceDemo'],
      name: 'Demonstration Proof Of Driver Licence',
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
  ProofOfTicketDemo:  {
    type: ['VerifiableCredential', 'ProofOfTicketDemo'],
      name: 'Demonstration Proof Of Ticket',
      context: [
      {
        name: 'schema:name',
        description: 'schema:description',
      },
    ],
  },
}