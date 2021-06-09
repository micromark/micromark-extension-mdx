import {micromark} from 'micromark'
import {mdx} from './index.js'

const output = micromark('a <b /> c {1 + 1} d', {extensions: [mdx()]})

console.log(output)
