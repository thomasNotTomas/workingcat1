import Windows95 from "./components/Windows95"


function App() {

  return (
    <>
      <div className="flex flex-col items-center
                      bg-[url('/background.jpg')] h-[1000px]">
        <img src="/logo.png" alt="" />
        <section className="flex w-full">
          <img src="/workingCat.png" alt="" />
          <div className=" w-full flex items-center justify-center">
            <Windows95 title={'BUY WORKING CAT!!'} subtitle={'0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3'}></Windows95>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
