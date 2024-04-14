import IntroImage from './IntroImage'
import IntroSocialMedia from './IntroSocialMedia'
import IntroTechStack from './IntroTechStack'
import IntroTitle from './IntroTitle'

export default function Intro() {
  const css = `
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .field {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100px;
    }

    .scroll {
      width: 30px;
      height: 30px;
      border: 2px solid #FFF;
      border-radius: 50%;
      position: relative;
      animation: down 1.5s infinite;
      -webkit-animation: down 1.5s infinite;
      &::before {
        content: '';
        position: absolute;
        top: 7.5px;
        left: 9px;
        width: 9px;
        height: 9px;
        border-left: 2px solid #FFF;
        border-bottom: 2px solid #FFF;
        transform: rotate(-45deg);
      }
    }

    @keyframes down {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translateY(15px);
      }
      40% {
        transform: translate(0);
      }
    }

    @-webkit-keyframes down {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translateY(15px);
      }
      40% {
        transform: translate(0);
      }
    }
  `

  return (
    <header className="background-grid background-grid--fade-out pb-20 pt-36">
      <div className="content-wrapper">
        <div className=" flex flex-col justify-center lg:flex-row lg:items-center xl:flex-row xl:items-center">
          <div className="flex flex-row justify-center lg:hidden xl:hidden">
            <IntroImage />
          </div>
          <div className="flex flex-col content-center">
            <IntroTitle />
            <IntroSocialMedia />
            <div className="mt-10">
              <style>{css}</style>
              <div className="container">
                <div className="field">
                  <div className="scroll"></div>
                </div>
              </div>
            </div>
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
