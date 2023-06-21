import BaseLayout from '@/components/BaseLayout'
import Item from './components/Item'
import Items from './components/Items'
import Tag from './components/Tag'
import { Tags } from './components/Tags'

export default function Experience() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36 xl:pb-28 xl:pt-52">
        <div className="content-wrapper">
          <Items date="2021-08-01">
            <Item>
              <h3 className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
                Desenvolvedor Mobile
              </h3>
              <Tags>
                <Tag>dart</Tag>
                <Tag>flutter</Tag>
              </Tags>
            </Item>
          </Items>
        </div>
      </div>
    </BaseLayout>
  )
}
