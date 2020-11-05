import { config } from '../../util/config.mjs'

const { typesId, classesId } = config

export default {
  $id        : `${typesId}/Date.mjs`,
  $source    : 'http://schema.org/Date',
  title      : 'Date',
  description: 'A date value in ISO 8601 date format.',
  allOf      : [
    {
      $ref: `${classesId}/DataType.mjs`
    }
  ],
  type  : 'string',
  format: 'date'
}