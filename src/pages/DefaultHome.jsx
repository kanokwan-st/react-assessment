import React from "react";
// import { Link } from "react-router"
import ButtonPack from "../components/ButtonPack";

export default function DefaultHome({testProp}) {
  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="font-bold text-2xl">
        Generation Thailand React - Assessment
      </h1>

      <ButtonPack />

    </div>
  );
}
