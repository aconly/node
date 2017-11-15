import { ClaimType, Work } from 'Interfaces'

export const TheRaven: Work = {
  id: '10d61d594df81c8018604e2bb0cb1e798ce18675812445e0248db4819e558187',
  publicKey: '02badf4650ba545608242c2d303d587cf4f778ae3cf2b3ef99fbda37555a400fd2',
  signature: '3045022100bcc3051ac599ac074bac88e9df4cde39dd8eaf3e98dbd8f631f317392375cdd7022074818bc2d6a56a1bf619286b8639efc037177dda6b6843d1a089b8918c82a793',
  type: ClaimType.Work,
  dateCreated: new Date('2017-11-13T15:00:00.000Z'),
  attributes: {
    name: 'The Raven',
    author: 'Edgar Allan Poe',
    tags: 'poem',
    dateCreated: '',
    datePublished: '1845-01-29T03:00:00.000Z',
    content: 'Once upon a midnight dreary...'
  }
}

export const TheRavenHex = '0a2010d61d594df81c8018604e2bb0cb1e798ce18675812445e0248db4819e558187122102badf4650ba545608242c2d303d587cf4f778ae3cf2b3ef99fbda37555a400fd21a473045022100bcc3051ac599ac074bac88e9df4cde39dd8eaf3e98dbd8f631f317392375cdd7022074818bc2d6a56a1bf619286b8639efc037177dda6b6843d1a089b8918c82a7932204576f726b2880db93affb2b32110a046e616d65120954686520526176656e32190a06617574686f72120f456467617220416c6c616e20506f65320c0a04746167731204706f656d320f0a0b6461746543726561746564120032290a0d646174655075626c69736865641218313834352d30312d32395430333a30303a30302e3030305a32290a07636f6e74656e74121e4f6e63652075706f6e2061206d69646e69676874206472656172792e2e2e'

export const PrivateKey = 'KxuZJmgVAipi9hfYXHTyGYmmhkbG7fBzmkyVnj6t9j9rDR1nN1vN'
