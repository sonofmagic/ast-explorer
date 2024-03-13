import { type ProcessOptions, parse } from 'postcss'
import { version } from 'postcss/package.json'
import type { LanguageOption, Parser } from '../language'

// @unocss-include

const postcss: Parser<undefined, ProcessOptions> = {
  id: 'postcss',
  label: 'postcss',
  icon: 'i-vscode-icons:file-type-postcss',
  editorLanguage: 'css',
  options: {
    configurable: true,
    defaultValue: {
      // loc: false,
    },
    editorLanguage: 'css',
  },
  version,
  parse(code, options) {
    return parse(code, options)
  },
  getAstLocation(node: JsonNode) {
    if (node.type !== 'Object') return
    if (!getJsonValue(node, ['type'])) return

    const start = getJsonValue(node, ['loc', 'start', 'offset'])
    const end = getJsonValue(node, ['loc', 'end', 'offset'])
    if (typeof start !== 'number' || typeof end !== 'number') return

    return { start, end }
  },
}

export const css: LanguageOption = {
  label: 'CSS',
  icon: 'i-vscode-icons:file-type-css',
  parsers: [postcss],
}
