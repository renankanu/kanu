import NextHead from 'next/head'
import { title } from 'process'

function Head() {
  const htmlTitle = 'Renan Santos - Desenvolvedor de Mobile'
  const ogImage = 'https://kanu-beta.vercel.app/assets/kanu_purple.png'
  const description =
    'Portfólio de Renan Santos com seus projetos, trabalhos e experiências. Navegue pelo site e conheça mais sobre o desenvolvedor.'

  return (
    <NextHead>
      <title>{htmlTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* seo */}
      <link rel="canonical" href="https://kanu-beta.vercel.app/" />

      {/* og image */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Image with "${title}" text.`} />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@renanknu" />
      <meta name="twitter:creator" content="@renanknu" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`Image with "${title}" text.`} />
    </NextHead>
  )
}

export default Head
