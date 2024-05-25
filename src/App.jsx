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
            <div className="w-96 windows-95">
              <p className="windows-95-title">A cute fluffy guy that’s always working. Such a workaholic, he won’t stop working! Always on his laptop, doing important biz… Work work work, he can’t think about anything else.</p>
            </div>
          </div>
          <img src="/workingCat.png" alt="" className="transform -scale-x-100" />
          </div>
        </section>
        <section className="flex flex-col xl:flex-row  w-full max-w-[1500px] h-fit p-8 justify-center space-x-8 w-full items-center space-y-8">
        <div className="hidden xl:block">
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
