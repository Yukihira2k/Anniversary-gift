import { Carousel } from "@material-tailwind/react";


const images= [
  {
    id:1,
    src:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    alt:"image 1",

  },
  {
    id:2,
    src:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",    alt:"image 2",

  },
  {
    id:3,
    src:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",    alt:"image 3",

  },
]


const CarouselSlider = () => {
  return (


    <div className="container  w-auto h-auto m-auto mt-10 lg:w-1/2 ">
      <div className="flex justify-center items-center">
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
        return <img key={id} src={src} alt={alt}   className="h-full w-full object-cover "/>
      })}
    </Carousel>
  </div>
  </div>
  )
}

export default CarouselSlider