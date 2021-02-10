import { config } from '../../util/config.mjs'

const { classesId } = config

export default {
  $id                 : `${classesId}/DataType.mjs`,
  $source             : 'http://schema.org/DataType',
  title               : 'DataType',
  description         : 'The basic data types such as Integers, Strings, etc.',
  additionalProperties: false
}

