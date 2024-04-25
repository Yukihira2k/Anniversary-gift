import { LongDialog } from "./Components/LongDialog";
import cardImage from "./assets/cardImage.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  
  } from "@material-tailwind/react";
   
  export function CardDefault() {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={cardImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           Read me first!
          </Typography>
          <Typography>
            I prepared a letter for you. Enjoy reading love love!!!
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <LongDialog/>
        </CardFooter>
      </Card>
    );
  }