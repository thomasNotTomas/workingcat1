import Windows95 from "./components/Windows95"
import VideoPlayer from "./components/VideoPlayer"


function App() {

  return (
    <>
      <div className="flex flex-col items-center
                      bg-[url('/background.jpg')] h-[1300px] bg-cover">
        <img src="/logo.png" alt="" />
        <section className="flex w-full max-w-[1500px]">
          <div className="flex flex-col w-full items-center justify-center lg:flex-row">
          <img src="/workingCat.png" alt="" className="hidden 2xl:block" />
          <div className=" w-full flex justify-center">
            <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
          </div>
          <img src="/workingCat.png" alt="" className="transform -scale-x-100" />
          </div>
        </section>
        <section className="flex w-full max-w-[1500px] h-fit p-8 justify-between">
        <div className="hidden 2xl:block">
        <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
        </div>
        <VideoPlayer></VideoPlayer>
        <div className="">
        <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
        </div>
        </section>
      </div>
    </>
  )
}

export default App
