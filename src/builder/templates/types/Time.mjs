import { config } from '../../util/config.mjs'

const { typesId, classesId } = config

export default {
  $id        : `${typesId}/Time.mjs`,
  $source    : 'http://schema.org/Time',
  title      : 'Date',
  description: 'A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm]',
  allOf      : [
    {
      $ref: `${classesId}/DataType.mjs`
    }
  ],
  type  : 'string',
  format: 'time'
}