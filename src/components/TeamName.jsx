import React from "react";
import TextPressure from "./TextPressure";

const TeamName = () => {
  return (
    <div className="relative h-fit px-[3rem] py-[2rem] md:p-4">
      <TextPressure
        text="VidyaVerse"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
};

export default TeamName;
