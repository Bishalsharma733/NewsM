import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Subjects({ project_id, id, sname, Icon, background }) {
  const handleClick = () => {
   
  };
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div
      onClick={handleClick}
      className={` h-[15rem]   flex flex-col items-center justify-center bg-black bg-opacity-50 bg-blend-darken bg-cover bg-no-repeat gap-5 rounded-3xl border-4 border-blue-600 ${
        sname === "English" || sname === "Computer"
          ? "w-[30rem] "
          : "w-[15rem] "
      }`}
      style={style}
    >
      <img className="h-[3rem] w-[3rem]" src={Icon} alt="" />
      <h5 className="text-white font-bold text-xl font-poppins ">{sname}</h5>

      <button className="bg-blue-800 px-3 p-1 text-white rounded-lg font-normal font-poppins text-lg">
        Let's Learn
      </button>
    </div>
  );
}

export default Subjects;
