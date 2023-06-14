import IntroImage from './IntroImage'
import IntroTitle from './IntroTitle'

export default function Intro() {
  return (
    <header className="background-grid background-grid--fade-out pb-20 pt-36 lg:pb-28 lg:pt-52">
      <div className="content-wrapper">
        <div className=" flex flex-col justify-center lg:flex-row lg:items-center ">
          <div className="flex flex-col content-center">
            <IntroTitle />
          </div>
          <div className="flex flex-col justify-center">
            <IntroImage />
          </div>
        </div>
      </div>
    </header>
  )
}
