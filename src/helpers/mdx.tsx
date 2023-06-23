export const urlType = (url: string) => {
  if (['/'].includes(url[0])) {
    return 'internal'
  }

  if (['#'].includes(url[0])) {
    return 'hash'
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail'
  }

  return 'external'
}

export const formatLang = (
  lang: string,
  title?: string,
): {
  language: string
} => {
  let language = lang

  switch (lang) {
    case 'js':
    case 'javascript':
      language = 'JavaScript'
      break
    case 'ts':
    case 'typescript':
      language = 'TypeScript'
      break
    case 'jsx':
      language = 'JavaScript React'
      break
    case 'tsx':
      language = 'TypeScript React'
      break
    case 'html':
      language = 'HTML'
      break
    case 'css':
      language = 'CSS'
      break
    case 'bash':
    case 'cmd':
      language = 'Terminal'
      break
    case 'json':
      language = 'JSON'
      break
    case '':
      language = 'Plain Text'
      break
    default:
      break
  }

  switch (title) {
    case 'tailwind.config.js':
      break
    case 'package.json':
      break
    case 'npm':
      break
    case 'pnpm':
      break
    case 'yarn':
      break
    default:
      break
  }

  return { language }
}
