import { CardDefault } from "../CardDefault"
import { ButtonRounded } from "./ButtonRounded"



const Hero = () => {
  return (
 
    <div className="container h-auto  w-auto flex m-auto lg:mt-[4%] ">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center m-auto w-auto mt-10 lg:mr-[15%]">
        <div className="flex-col justify-center items-center text-center md:m-auto text-balance lg:w-[50%]">
            <h1 className="text-2xl lg:text-5xl m-auto w-auto">Happy Anniversary </h1>
            <p className="my-5 text-justify mx-10 ">Hey love, I&apos;ve dedicated a special corner 
            of the internet just for you. Check out this website I made filled with all our 
            cherished memories, sweet messages, and adorable pictures that remind me of us. 
            It&apos;s a place where our love shines bright, and I hope it brings a smile to your face whenever 
            you visit. </p>
          <div className="mx-10">
            <ButtonRounded/>
          </div>

        </div>
        <div className="mt-10">
        <CardDefault />
        </div>
        </div>
    </div>
  
  )
}

export default Hero