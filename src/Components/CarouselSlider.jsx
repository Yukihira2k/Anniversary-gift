import { Carousel } from "@material-tailwind/react";
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"

const images= [
  {
    id:1,
    src:Image1,
    alt:"image 1",

  },
  {
    id:2,
    src:Image2,    alt:"image 2",

  },
  {
    id:3,
    src:Image3,   alt:"image 3",

  },
]


const CarouselSlider = () => {
  return (


    <div className="container  w-auto h-auto m-auto mt-10 lg:w-1/2 border-t-2 pt-10 mb-10">
      <div className="flex-col justify-center items-center text-center m-10">
        <h1 className="text-5xl pb-10">Where it all started</h1>
      <Carousel
      className="rounded-xl h-[500px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

      {images.map(({id,src,alt})=>{
        return <img key={id} src={src} alt={alt}   className="h-full w-full  object-cover"/>
      })}
    </Carousel>
  </div>
  </div>
  )
}

export default CarouselSlider