import React from "react";
import CopyField from "./CopyField";

export default function ContactCards() {
  return (
    <div className="space-y-6">

      <div className="bg-black/5 dark:bg-white/5 p-6 rounded-3xl">
        <p className="text-xl text-black dark:text-white pb-[10px]">Direct</p>

        <CopyField
          label="Email"
          value="daniel.iheukwumere@outlook.com"
        />
      </div>

      <div className="bg-black/5 dark:bg-white/5 p-6 rounded-3xl">
        <p className="text-xl text-black dark:text-white">
          Availability
        </p>

        <p className="text-black/60 dark:text-white/60 mt-2">
          Freelance • Contract • Collab
        </p>
      </div>

    </div>
  );
}
