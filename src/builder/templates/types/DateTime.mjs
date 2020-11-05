import { config } from '../../util/config.mjs'

const { typesId, classesId } = config

export default {
  $id        : `${typesId}/DateTime.mjs`,
  $source    : 'http://schema.org/DateTime',
  title      : 'DateTime',
  description: 'A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).',
  allOf      : [
    {
      $ref: `${classesId}/DataType.mjs`
    }
  ],
  type  : 'string',
  format: 'date-time'
}