import top1 from "../assets/MasonryGridImg/top1.jpg"
import top2 from "../assets/MasonryGridImg/top2.jpg"
import top3 from "../assets/MasonryGridImg/top3.jpg"
import top4 from "../assets/MasonryGridImg/top4.jpg"
import mid1 from "../assets/MasonryGridImg/mid1.jpg"
import mid2 from "../assets/MasonryGridImg/mid2.jpg"
import mid3 from "../assets/MasonryGridImg/mid3.jpg"
import mid4 from "../assets/MasonryGridImg/mid4.jpg"
import bot1 from "../assets/MasonryGridImg/bot1.jpg"
import bot2 from "../assets/MasonryGridImg/bot2.jpg"
import bot3 from "../assets/MasonryGridImg/bot3.jpg"
import mid5 from "../assets/MasonryGridImg/mid5.jpg"


export function MasonryGridGallery() {
    return (
     
      <div className="flex-col items-center justify-center text-center mt-10 xl:mt-[15%] border-t-2">
       <h1 className="text-5xl xl:text-7xl my-10">Memory Section</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 container  w-full h-auto m-auto mt-10 lg:w-1/2 ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-auto rounded-lg object-cover object-center"
              src={top1}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={mid1}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto] w-full rounded-lg object-cover object-center"
              src={bot1}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={top3}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={mid4}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={bot2}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={top4}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={mid3}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={bot3}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={top2}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={mid2}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={mid5}
              alt="gallery-photo"
            />
          </div>
        </div>
        </div>
      </div>
    );
  }