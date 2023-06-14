import IntroImage from './IntroImage'
import IntroSocialMedia from './IntroSocialMedia'
import IntroTechStack from './IntroTechStack'
import IntroTitle from './IntroTitle'

export default function Intro() {
  return (
    <header className="background-grid background-grid--fade-out pb-20 pt-36 xl:pb-28 xl:pt-52">
      <div className="content-wrapper">
        <div className=" flex flex-col justify-center lg:flex-row lg:items-center xl:flex-row xl:items-center">
          <div className="flex flex-row justify-center lg:hidden xl:hidden">
            <IntroImage />
          </div>
          <div className="flex flex-col content-center">
            <IntroTitle />
            <IntroSocialMedia />
            <IntroTechStack />
          </div>
          <div className="flex flex-row justify-center sm:hidden md:hidden">
            <IntroImage />
          </div>
        </div>
      </div>
    </header>
  )
}
