import CarouselSlider from "./Components/CarouselSlider"
import { NavbarSimple } from "./Components/NavbarSimple"
import { MasonryGridGallery } from "./Components/MasonryGridGallery"
import Hero from "./Components/Hero"
import { DefaultTimeline } from "./Components/DefaultTimeline"
import { SimpleFooter } from "./Components/Footer"




function App() {


  return (
    <>
    <div className="">
    <NavbarSimple/>
    <Hero/>
    <MasonryGridGallery />
    <DefaultTimeline/>
    <CarouselSlider/>
    <SimpleFooter/>
    </div>
    </>
  )
}

export default App
