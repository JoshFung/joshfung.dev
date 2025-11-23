function Title() {
  return (
    <div className="">
      <h1 className="text-ivory font-stardom font-medium mb-2 text-4xl xs:text-8xl">Joshua Fung</h1>
      {/* <h1 className="text-ivory font-stardom font-medium text-4xl xs:text-5xl sm:text-7xl">Fung</h1> */}
      <div className="flex flex-col gap-2">
        <h2
          className="text-ivory font-jakarta font-light underline decoration-2 underline-offset-8 text-sm xs:text-3xl"
        >
          Software Engineer
        </h2>
        <div className="flex flex-row self-end gap-3">
          <h3 className="text-ivory font-jakarta font-light text-xs xs:text-base">located in</h3>
          <h2
            className="text-ivory font-jakarta font-light underline decoration-2 underline-offset-8 text-sm xs:text-3xl"
          >
            Washington, USA
          </h2>
        </div>
        <div className="flex flex-row self-end gap-3">
          <h3 className="text-ivory font-jakarta font-light text-xs xs:text-base">graduated from</h3>
          <h2
            className="text-ivory font-jakarta font-light underline decoration-2 underline-offset-8 text-sm xs:text-3xl"
          >
            University of British Columbia
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Title;
