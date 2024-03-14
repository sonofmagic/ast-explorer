import { version } from 'postcss/package.json'
import * as Postcss from 'postcss'
import type { LanguageOption, Parser } from '../language'

// @unocss-include

const postcss: Parser<typeof Postcss, Postcss.ProcessOptions> = {
  id: 'postcss',
  label: 'postcss',
  icon: 'i-vscode-icons:file-type-postcss',
  editorLanguage: 'css',
  options: {
    configurable: true,
    defaultValue: {},
    editorLanguage: 'css',
  },
  version,

  // init: () => import('https://cdn.jsdelivr.net/npm/postcss@8.4.35/+esm'),
  parse(code, options) {
    return Postcss.parse(code, options)
  },
  // getAstLocation(node) { },
}

export const css: LanguageOption = {
  label: 'CSS',
  icon: 'i-vscode-icons:file-type-css',
  parsers: [postcss],
}
