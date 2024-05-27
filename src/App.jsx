import Windows95 from "./components/Windows95"
import VideoPlayer from "./components/VideoPlayer"
import Slider from "./components/Slider"


function App() {

  return (
    <>
      <div className="flex flex-col items-center
                      bg-[url('/background.jpg')] h-fit bg-cover">
        <Slider></Slider>
        <img src="/logo.png" alt="" />
        <h1 className="hidden md:block windows-95 text-2xl font-bold w-fit">CA: 0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3</h1>
        <section className="flex w-full max-w-[1500px]">
          <div className="flex flex-col w-full items-center justify-center lg:flex-row">
          <img src="/workingCat.png" alt="" className="hidden 2xl:block" />
          <div className=" w-full flex justify-center">
            <div className="w-96 windows-95">
              <p className="windows-95-title text-xl">A cute fluffy guy that’s always working. Such a workaholic, he won’t stop working! Always on his laptop, doing important biz… Work work work, he can’t think about anything else.</p>
            </div>
          </div>
          <img src="/workingCat.png" alt="" className="transform -scale-x-100" />
          </div>
        </section>
        <section className="flex flex-col xl:flex-row  w-full max-w-[1500px] h-fit p-8 justify-center space-x-8 w-full items-center space-y-8">
        <div className="">
        <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
        </div>
        <VideoPlayer></VideoPlayer>
        <div className="hidden xl:block">
        <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
        </div>
        </section>
        <Slider></Slider>
        <section className="place-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <img className="w-80 h-auto mb-4 lg:mr-4" src="/memes/apple.jpg" alt="" />
          <img className="w-80 h-auto mb-4" src="/memes/bankchina.jpg" alt="" />
          <img className="w-80 h-auto mb-4" src="/memes/beach.jpg" alt="" />
          <img className="w-80 h-auto mb-4" src="/memes/bed.jpg" alt="" />
          <img className="w-80 h-auto mb-4" src="/memes/campbell.jpg" alt="" />
        </section>
      </div>
    </>
  )
}

export default App
