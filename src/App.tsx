import { ContactShadows, Environment, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useModelPositions } from "./positionScript/modelPositions";
import BLtalkbuble from "./svgcomponents/BLtalkbuble";
import { MemoPhill } from "./gltfjsx/Phill";
import { MemoMaddy } from "./gltfjsx/Mandy";
import { Cape } from "./gltfjsx/cape";
import { Table } from "./gltfjsx/table";
import { Chair } from "./gltfjsx/chair";
import BoxBuble from "./svgcomponents/BoxBuble";
import BLThoughthbuble from "./svgcomponents/BLThoughthbuble";
import BRtalkbuble from "./svgcomponents/BRtalkbuble";
import BRThoughthbuble from "./svgcomponents/BRThoughthbuble";

function App() {
   // State to track visibility of MySVGComponent
   const [showComponent, setShowComponent] = useState(true);

   // Function to hide the component
   const handleMouseDown = () => {
     setShowComponent(false);
   };
 
   // Function to show the component
   const handleMouseUp = () => {
     setShowComponent(true);
   };
 
   // Custom class for fade effect
   const fadeClass = showComponent ? "opacity-100 transition-opacity duration-1000" : "opacity-0 transition-opacity duration-1000";
 
   const { memoizedPositionAttack } = useModelPositions();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      {/* First Canvas */}
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BoxBuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page1"} position={memoizedPositionAttack}/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Second Canvas */}
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
      {showComponent && <BoxBuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page2"} position={memoizedPositionAttack}/>
            <Cape/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Third Canvas */}
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
      {showComponent && <BoxBuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
            {showComponent && <BLThoughthbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
            {showComponent && <BoxBuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page3"} position={memoizedPositionAttack}/>
            <MemoMaddy animation={"page3"}/>
            <Table/>
            <Table/>
            <Chair/>
            <Chair/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Fourth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BRtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
            {showComponent && <BRtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page4"} position={memoizedPositionAttack}/>
            <MemoMaddy animation={"page4"}/>
            <Table/>
            <Table/>
            <Chair/>
            <Chair/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Fifth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BRtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
            {showComponent && <BRtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page5"} position={memoizedPositionAttack}/>
            <MemoMaddy animation={"page5"}/>
            <Table/>
            <Chair/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Sixth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BLtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page6"} position={memoizedPositionAttack}/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Seventh Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BLtalkbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
            {showComponent && <BRThoughthbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page5"} position={memoizedPositionAttack}/>
            <MemoMaddy animation={"page5"}/>
            <Table/>
            <Chair/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Eighth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BLThoughthbuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page8"} position={memoizedPositionAttack}/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Ninth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BLtalkbuble
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page9"} position={memoizedPositionAttack}/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
        {/* Tenth Canvas */}
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="w-[100rem] h-[45rem] p-10 mx-auto rounded overflow-hidden relative">
        {showComponent && <BoxBuble 
    className={fadeClass} 
    text="Hello !"         
    fontSize="40px" 
    width="500px" 
    height="300px" 
    positionX="500px" 
    positionY="100px" 
    scale={0.75}/>}
        <Canvas className="w-full h-full bg-red-300 rounded" shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
          <Suspense fallback={null}>
          <Environment preset="city" />
          <ContactShadows position={[0, 0, 0]} opacity={1} blur={2.5} scale={15}/>

          <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
            <ambientLight intensity={0.7} />
            <MemoPhill animation={"page10"} position={memoizedPositionAttack}/>
            <Cape/>
            </PresentationControls>
          </Suspense>
       
        </Canvas>
      </div>
    </div>
  );
}

export default App;
