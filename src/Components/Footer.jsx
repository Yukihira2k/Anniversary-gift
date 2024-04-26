import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className=" text-center  gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6  md:justify-between lg:p-10 lg:mt-[10%]">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 DevelopedbyGlen
      </Typography>
    
    </footer>
  );
}