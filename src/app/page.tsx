import BaseLayout from '@/components/BaseLayout'
import FeaturedCardSection from '@/components/Card/FeaturedCardSection'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <BaseLayout>
      <Intro />
      <FeaturedCardSection />
    </BaseLayout>
  )
}
