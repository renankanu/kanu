import BaseLayout from '@/components/BaseLayout'
import Paragraph from '@/components/Paragraph'
import Item from './components/Item'
import Items from './components/Items'
import Title from './components/Title'

export default function Experience() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36">
        <div className="content-wrapper">
          <Items date="2021-08-01">
            <Item>
              <Title>Megaleios</Title>
            </Item>
            <Paragraph>
              - Desenvolvimento de aplicativos utilizando{' '}
              <strong>Flutter</strong>.
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
          </Items>
        </div>
      </div>
    </BaseLayout>
  )
}
