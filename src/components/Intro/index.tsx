import IntroTitle from './IntroTitle'

export default function Intro() {
  return (
    <header className="background-grid background-grid--fade-out pb-20 pt-36 lg:pb-28 lg:pt-52">
      <div className="content-wrapper">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-around">
          <div className="flex flex-col content-center">
            <IntroTitle />
            <h2 className="font-bai-jamjuree text-4xl font-bold lg:text-5xl">
              Software Engineer
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-bai-jamjuree text-4xl font-bold lg:text-5xl">
              Renan Kanu
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
