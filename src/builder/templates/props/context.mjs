import { config } from '../../util/config.mjs'

const { propsId } = config

export default {
  $id        : `${propsId}/context.mjs`,
  title      : 'Context',
  description: 'Context of data',
  type       : 'string',
  const      : 'https://schema.org',
  default    : 'https://schema.org'
}
