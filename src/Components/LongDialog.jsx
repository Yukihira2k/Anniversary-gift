import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export function LongDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} className="bg-red-400">Letter for Love!</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>No words can explain how much I love you.</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
          Happy Anniversary, my love! It&apos;s crazy to think how quickly 
          time has passed since we embarked on this beautiful journey together.
           As I sit here reminiscing about all the incredible moments we&apos;ve 
           shared over the past year, my heart is overflowing with gratitude 
           for having you by my side.
            <br />
            <br />
            From the deep and meaningful conversations to the cozy nights in, every moment 
            spent with you has been nothing short of magical. Your laughter is
            like music to my ears, and your smile has the power to brighten even
            the gloomiest of days. But beyond the adventures and the laughter,
             it&apos&apos;s the little things—like your unwavering support and endless
            affection—that mean the most to me.
            <br /> <br />
            You have this incredible ability to make me feel understood, 
            accepted, and loved in a way that I never thought possible. 
            With you, I feel like I can truly be myself, flaws and all.
             And as we celebrate another year together, I find myself 
             falling even more deeply in love with you.
            <br /> <br />
            So here&apos;s to us, my darling, and to all the adventures that lie 
            ahead. Thank you for being my partner-in-crime, my rock, and my
             best friend. I can&apos;t wait to see what the future holds for us,
              but one thing&apos;s for sure: as long as I have you by my side, I 
              know it&apos;s going to be amazing.
            <br /> <br />
            Happy Anniversary, Love.

          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="red" onClick={handleOpen}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}