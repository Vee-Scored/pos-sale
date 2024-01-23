import React from "react";

import Details from "./Details";
import { Button } from "./ui/button";

const ButtonGroup = () => {
  const buttonLabels = ["List", "New", "Save", "Payment", "Print"];
  return (
    <div className="xl:flex   justify-between">
      <div className="lg:basis-1/3 w-full">
        {buttonLabels.map((label, index) => (
          <Button className={'mr-2'} key={index}>{label}</Button>
        ))}
      </div>
      <div className="lg:basis-2/3 w-full">
        <Details />
      </div>
    </div>
  );
};

export default ButtonGroup;
