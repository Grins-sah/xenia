function App(){
  return <div className='h-screen w-screen bg-Map bg-fix bg-no-repeat bg-cover bg-fixed	flex flex-col  justify-center	'>
    <div className=" text-5xl color-[#352316] italic flex justify-center mt-10 ">
      <div className='backdrop-blur	 w-fit  rounded-lg opacity-100'>Schedule</div>
    </div>
        <div className="  h-full w-full flex  justify-center items-center justify-around">
          <div className="backdrop-blur	rounded-lg h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded border-[#352316] border-4 text-3xl flex  justify-center items-center justify-around ">
                        Day 1
          </div>
          <div className=" backdrop-blur	 h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded border-[#352316] border-4 flex  justify-center items-center justify-around text-3xl">
                        Day2
          </div>
          <div className="backdrop-blur	 h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded border-[#352316] border-4 flex  justify-center items-center justify-around text-3xl">
                <div className="text-3xl color-blue opacity-[.99] bold">
                Day 3         

                </div>
          </div>
        </div>
      
  </div>
}
export default App;
