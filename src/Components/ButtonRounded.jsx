import { Button } from "@material-tailwind/react";
 
export function ButtonRounded() {
  return (
    <div className="flex items-center gap-4">

      <Button variant="outlined" className="rounded-full">
        Trip down memory lane.
      </Button>

    </div>
  );
}