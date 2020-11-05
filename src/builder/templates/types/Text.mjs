import { config } from '../../util/config.mjs'

const { typesId, classesId } = config

export default {
  $id        : `${typesId}/Text.mjs`,
  $source    : 'http://schema.org/Text',
  title      : 'Text',
  description: 'Data type: Text. min 1 char, max 2083',
  allOf      : [
    {
      $ref: `${classesId}/DataType.mjs`
    }
  ],
  type     : 'string',
  minLength: 1,
  maxLength: 2083
}