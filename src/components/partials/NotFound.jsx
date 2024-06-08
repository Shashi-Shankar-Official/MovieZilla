import React from "react";
import error from "../../../public/Error.gif";

function NotFound() {
    return (
        <div className="w-screen h-screen flex justify-center items-center rounded-lg bg-black">
            <img src={error} alt=""  />
        </div>
    )
}

export default NotFound;