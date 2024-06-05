import React from "react";
import loder from "../../../public/loder3.gif";

function Loding() {
    return (
        <div className="w-screen h-screen flex justify-center items-center rounded-lg bg-black">
            <img src={loder} alt=""  />
        </div>
    )
}

export default Loding;