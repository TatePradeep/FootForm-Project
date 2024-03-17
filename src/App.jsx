import { Canvas, useFrame } from '@react-three/fiber'
import Model from './components/Model/Model.jsx'
import { Scroll, ScrollControls, useScroll, Html } from '@react-three/drei'
import { getProject, val } from '@theatre/core'
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'
import Navbar from './components/Navbar/Navbar.jsx'
import Luxury from './UI/Luxury/Luxury.jsx'
import Quality from './UI/Quality/Quality.jsx'
import Style from './UI/Style/Style.jsx'
import Product from './components/Product/Product.jsx'
import Footer from './components/Footer/Footer.jsx'
import FootFormAni from './FootFormAni.json'
import ShoeAnimation from './UI/ShoeAnimation.jsx'

function App() {
  const sheet = getProject('product Animation', { state: FootFormAni }).sheet('Scene');

  return (
    <>
      <main className="container px-4 z-20 absolute">
        <Navbar />
      </main>
      <div className='h-full relative'>
        <Canvas shadows gl={{ physicallyCorrectiLights: true, preserveDrawingBuffer: true }}>
          <ScrollControls pages={5}>
            <SheetProvider sheet={sheet} className="">
              <Scene />
            </SheetProvider>
            <Scroll html>
              <ShoeAnimation />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
      <div className='flex justify-center items-center h-screen'>
          <Product />
      </div>
      {/* <Customer/> */}
      <Footer />
    </>
  )
}

export default App

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    sheet.sequence.position = scroll.offset * sequenceLength
  })
  return <>
    <PerspectiveCamera theatreKey='Camera' makeDefault position={[1, 1, 1]} fov={90} near={0.1} far={70} />
    <color attach='background' args={['#fff']} />
    <ambientLight intensity={2} />
    <directionalLight position={[1, 1, 1]} intensity={3} />
    <pointLight intensity={4} position={[2, 1, 1]} distance={40} />
    <spotLight intensity={4} position={[-3, -3, -1]} distance={100} />
    <spotLight intensity={4} position={[-3.7, -3, 1]} distance={100} />
    <Model />
  </>
}