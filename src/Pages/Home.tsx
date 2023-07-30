import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Landing } from "../Components/Landing";
import { Particles } from "../Components/Particles";

interface props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const Home = ({ setOpen }: props) => {
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 9500);
  }, []);
  return (
    <>
      <Landing />
    </>
  );
};
