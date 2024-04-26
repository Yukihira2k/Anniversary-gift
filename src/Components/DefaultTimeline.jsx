import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function DefaultTimeline() {
    return (
      <div className="flex items-center justify-center mt-10 border-t-2 mx-10" >
        <div className=" w-[32rem]"> 
        <h1 className="text-5xl text-center my-10">TIMELINE</h1>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                September 5,2022.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                The first time we met and in that day you we&apos;re my masungit na team leader/trainer.
                We became good coworkers afterwards since sobrang approachable mo and naenjoy ko yung time
                and yung ways mo ng pagtuturo sa mga newbies. It was a fun week for us and umabot na sa point na 
                tinatawag na kitang "Tita may" kase hate na hate mo yung tinuturing kang "mas matanda".

              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                May 1, 2023.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                This was the first time I got confused sa  kung ano yung naf-feel ko sayo. This time I wasn&apos;t sure kung ano to but it
                feels familiar. I literally have no idea kung crush crush lang ba to or love love na kita hehe. 
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                May 12 2023 - present
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                Here we are showing our love and affection every single day. Some days are rough but some days are perfectly fine.
                You never fail to amaze me on how beautiful you are as a human being. I love you to the moon and back baby, and I&apos;m so lucky
                to have you.
              </Typography>
            </TimelineBody>
            
          </TimelineItem>
          
          
        </Timeline>
      </div>

      </div>
    );
  }