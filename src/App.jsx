function App() {

  return (
    <>
      <div className="flex flex-col items-center
                      bg-[url('/background.jpg')] h-[1000px]">
        <img src="/logo.png" alt="" />
        <section className="flex w-full">
          <img src="/workingCat.png" alt="" />
          <div className=" w-full flex items-center justify-center">
            <div className="windows-95 w-fit h-fit">
              <div className="windows-95-title flex min-w-20">
              <h1 className="">Working Cat</h1>
              </div>
              <h2 className="mt-2">0x2cF14b7d4a77646F7Bb91EAe0f7C2d295c769fd3</h2>
              <div className="windows-95-button mt-2">COPY!</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
