// Setup jss plugins.
import {create} from 'jss'
import extend from 'jss-extend'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import px from 'jss-px'
import vendorPrefixer from 'jss-vendor-prefixer'
import debug from 'jss-debug'

const jss = create()

jss.use(extend())
jss.use(nested())
jss.use(camelCase())
jss.use(px())
jss.use(vendorPrefixer())
jss.use(debug())

export default jss
