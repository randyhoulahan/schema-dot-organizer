import { config } from '../../util/config.mjs'

const { typesId, propsId, classesId } = config

export default {
  $id        : `${propsId}/mainEntityOfPage.mjs`,
  $source    : 'http://schema.org/mainEntityOfPage',
  title      : 'mainEntityOfPage',
  description: 'Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href="/docs/datamodel.html#mainEntityBackground">background notes</a> for details.',
  oneOf      : [ { $ref: `${typesId}/URL.mjs` }, { $ref: `${classesId }/CreativeWork.mjs` } ]
  
}
