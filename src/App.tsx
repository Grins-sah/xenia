import { ReactElement, useRef, useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from "react-draggable";
import Cross from "./icon/cros";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
const modelAtom = atom({
  key:"modelAtom",
  default:false
})
const Popup = ()=>{
  const res = useRecoilValue(modelAtom);
  const setModel = useSetRecoilState(modelAtom);
  return res && <div className="bg-black absolute bottom-0 left-0 opacity-75 h-screen w-screen z-40">
      <div className="flex h-full w-full  justify-center items-center opacity-100 ">
          <div className="h-96 w-96 bg-white opacity-100 text-xl rounded">
            <div className="flex justify-between ">
              <div className="text-3xl bold p-3">
                Event 1
              </div>
            <button className="p-3" onClick={()=>{
              setModel(c=>!c);
            }}>
              <Cross/>
            </button>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum accusantium voluptas aliquam sint reiciendis necessitatibus dicta dolorum laborum, quod nisi quidem. Libero doloribus, vitae voluptates laudantium est eius debitis consequuntur iusto alias architecto ratione laboriosam aspernatur non pariatur magni rerum dolorum blanditiis aperiam voluptatem doloremque facilis dolore? Quo, vero.''

          </div>
      </div>
  </div>
}
const DraggableBox = ({ id }) => {
  const updateXarrow = useXarrow();
  const setModel = useSetRecoilState(modelAtom);
  return (
    <Draggable onDrag={updateXarrow}
      onStop={updateXarrow}>
      <button id={id} onClick={()=>{
        setModel(c=>!c)
      }} className="text-white border p-2 bg-gradient-to-tr from-indigo-900 to-rose-900 rounded-lg italic">
        Event
      </button>
    </Draggable>
  );
};
function App() {
  const E1ref = useRef();
  const E2ref = useRef();

  return <RecoilRoot>
  <div className=' z-0 bg-gradient-to-tr from-neutral-900 to-indigo-700  h-screen w-screen  bg-fix bg-no-repeat bg-cover bg-fixed	flex flex-col  justify-center	'>
    <Popup/>
    <Xwrapper>
    <div className=" text-5xl color-[#352316] italic flex justify-center mt-10 ">
      <div className='backdrop-blur	 w-fit  rounded-lg opacity-100 text-white'>Schedule</div>
    </div>
    <div  className="  h-full w-full flex  justify-center items-center justify-around " >
      <div id="D1" className="backdrop-blur	rounded-lg h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded  border-4 text-3xl flex flex-col  justify-center items-center justify-around m-3 ">
        <div className="text-white italic">Day 1</div>


          <DraggableBox id={'elem1'} />
          <DraggableBox id={'elem2'} />
          <DraggableBox id={'elem3'} />
          <DraggableBox id={'elem4'} />
          <Xarrow start={'elem1'} end="elem2" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'elem2'} end="elem3" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'elem3'} end="elem4" color="white" dashness headSize={5} strokeWidth={3} animateDrawing={true} curveness={0.6} />

      </div>
      <Xarrow start={'D1'} end="D2" color="white" dashness headSize={5} strokeWidth={3} animateDrawing />

      <div id="D2" className="backdrop-blur	rounded-lg h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded  border-4 text-3xl flex flex-col  justify-center items-center justify-around m-3 ">
        <div className="text-white italic">Day 2 </div>


          <DraggableBox id={'ele21'} />
          <DraggableBox id={'ele22'} />
          <DraggableBox id={'ele23'} />
          <DraggableBox id={'ele24'} />
          <Xarrow start={'ele21'} end="ele22" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'ele22'} end="ele23" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'ele23'} end="ele24" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />

      </div>
      <Xarrow start={'D2'} end="D3" color="white" dashness headSize={5} strokeWidth={3} animateDrawing />
      <div id="D3" className="backdrop-blur	rounded-lg h-[60%] w-96 bg-no-reapeat bg-cover  bg-rounded  border-4 text-3xl flex flex-col  justify-center items-center justify-around m-3 ">
        <div className="text-white italic">Day 3</div>


          <DraggableBox id={'ele31'} />
          <DraggableBox id={'ele32'} />
          <DraggableBox id={'ele33'} />
          <DraggableBox id={'ele34'} />
          <Xarrow start={'ele31'} end="ele32" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'ele32'} end="ele33" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />
          <Xarrow start={'ele33'} end="ele34" color="white" dashness headSize={5} strokeWidth={3} animateDrawing curveness={0.6} />

      </div>
    </div>
    </Xwrapper>
  </div>
  </RecoilRoot>
}
export default App;
