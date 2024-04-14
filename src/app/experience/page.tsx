'use client'
import BaseLayout from '@/components/BaseLayout'
import Divider from '@/components/Divider'
import Paragraph from '@/components/Paragraph'
import { m } from 'framer-motion'
import Item from './components/Item'
import Items from './components/Items'
import Title from './components/Title'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function Experience() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36">
        <div className="content-wrapper">
          <m.p
            className="mb-16 block font-alt leading-none dark:text-primary-500 sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            Experiência
          </m.p>
          <Items date="2019-07-01">
            <Item>
              <Title>Megaleios (atual)</Title>
            </Item>
            <Paragraph>
              - Desenvolvimento de aplicativos utilizando{' '}
              <strong>Flutter</strong>.
            </Paragraph>
            <Paragraph>
              - Microfrontends utilizando <strong>Flutter</strong>, facilitando
              a manutenção e reutilização de código.
            </Paragraph>
            <Paragraph>
              - Gerenciamento de estado utilizando <strong>Bloc</strong> e{' '}
              <strong>GetX</strong>.
            </Paragraph>
            <Paragraph>
              - Manutenção de aplicativos utilizando{' '}
              <strong>React Native</strong>.
            </Paragraph>
            <Paragraph>
              - Integração com <strong>APIs</strong>. (REST)
            </Paragraph>
            <Paragraph>
              - Integração com os serviços do firebase. (Auth, Firestore,
              Storage, Analytics, Crashlytics)
            </Paragraph>
            <Paragraph>
              - Publicação de aplicativos na <strong>Play Store</strong> e{' '}
              <strong>App Store</strong>.
            </Paragraph>
            <Paragraph>- Clean Architecture, Clean Code, SOLID, TDD.</Paragraph>
            <Paragraph>
              - Versionamento de código utilizando <strong>Git</strong>.
            </Paragraph>
            <Paragraph>
              - CI/CD utilizando <strong>Bitrise</strong> e{' '}
              <strong>GitActions</strong>.
            </Paragraph>
            <Paragraph>
              - Gerenciamento de tarefas utilizando <strong>Azure</strong>.
            </Paragraph>
            <Paragraph>- Figma.</Paragraph>
          </Items>
          <Items date="2015-11">
            <Item>
              <Title>Sisterra</Title>
            </Item>
            <Paragraph>
              - Desenvolvimento de aplicativos para Android nativo (Java e
              Kotlin)
            </Paragraph>
            <Paragraph>
              - Desenvolvimento de aplicações em PHP utilizando DDD para
              back-end
            </Paragraph>
            <Paragraph>- APIs REST</Paragraph>
            <Paragraph>- CQRS pattern</Paragraph>
            <Paragraph>- Conhecimento em Docker</Paragraph>
            <Paragraph>- Publicar App nas lojas(Apple e GooglePlay)</Paragraph>
            <Paragraph>
              - Conhecimento em AWS (Lambda, SNS, SQS, SES, EC2, RDS, S3)
            </Paragraph>
            <Paragraph>- Integração com APIs REST</Paragraph>
            <Paragraph>- Usuário Linux (GNU / Linux Ubuntu)</Paragraph>
          </Items>
          <Divider />
          <m.p
            className="mb-16 mt-20 block font-alt leading-none dark:text-primary-500 sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            Formação
          </m.p>
          <Items date="2015-12-01">
            <Item>
              <Title>UNIPAR(Universidade Paranaense)</Title>
            </Item>
            <Paragraph>- Análise e Desenvolvimento de Sistemas</Paragraph>
            <Paragraph>- Workshop de Java, Android Nativo e PHP</Paragraph>
            <Paragraph>
              - TCC - Sistema de Gerenciamento de matriculas, frequência e
              promissórias para uma escola de natação. (Delphi, Firebird)
            </Paragraph>
          </Items>
          <Items date="2021-01-01">
            <Item>
              <Title>Udemy</Title>
            </Item>
            <Paragraph>- Flutter utilizando TDD</Paragraph>
            <Paragraph>- Clean Architecture</Paragraph>
            <Paragraph>- Design Patterns</Paragraph>
            <Paragraph>- SOLID</Paragraph>
          </Items>
        </div>
      </div>
    </BaseLayout>
  )
}
