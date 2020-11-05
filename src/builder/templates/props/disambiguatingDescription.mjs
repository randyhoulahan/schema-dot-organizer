import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/disambiguatingDescription.mjs`,
  $source    : 'http://schema.org/disambiguatingDescription',
  title      : 'Description',
  description: 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
  allOf      : [ { $ref: `${typesId}/LString160.mjs` } ]
}