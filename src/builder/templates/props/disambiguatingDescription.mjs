import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/disambiguatingDescription.mjs`,
  $source    : 'https://schema.org/disambiguatingDescription',
  title      : 'Description',
  description: 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString5000.mjs` } ]
}