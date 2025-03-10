// import { inline } from "./inline.js"
import { inline as i } from "./inline.js"
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js"

i()
defaultInline()

group()
exportDefault()
