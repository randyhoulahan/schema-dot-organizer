import { config } from '../../util/config.mjs'

const { typesId, classesId } = config

export default {
  $id        : `${typesId}/Boolean.mjs`,
  $source    : 'http://schema.org/Boolean',
  title      : 'Boolean',
  description: 'Boolean: True or False.',
  allOf      : [
    {
      $ref: `${classesId}/DataType.mjs`
    }
  ],
  type: 'boolean'
}