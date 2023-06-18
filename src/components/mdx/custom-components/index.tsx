import { H1, H2, H3 } from './Heading'
import { Hr } from './Hr'
import { Pre } from './Pre'

import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  hr: Hr,
  pre: Pre,
}

export default components
