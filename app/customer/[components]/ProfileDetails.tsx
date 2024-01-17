import React from "react";
import { flexBetween } from "../../../components/helpers";

type Props = {};

const profileDetails = [
  { title: "first Name", name: "Victor" },
  { title: "Middle Name", name: "Uche" },
  { title: "Last Name", name: "Ezekiel" },
  { title: "Email", name: "victoruche3022@gmail.com" },
  { title: "Gender", name: "male" },
  { title: "Date of birth", name: "2002-09-09" },
  { title: "phone number", name: "09127362006" },
];

function ProfileDetails({}: Props) {
  return (
    <div className="shadow-[0_0_8px_rgb(212,_210,_207)] p-[3rem] hmMd:p-[1.5rem]">
      <div>
        <h1 className="text-[2rem] font-semibold">Profile Details</h1>
      </div>

      <div>
        {profileDetails.map((profileDetail, id) => {
          return (
            <div
              className="border-b border-clr9 mb-[2rem] flex items-center justify-between"
              key={id}
            >
              <div className="">
                <h5 className="text-[1.2rem] font-light mb-[0.5rem]">
                  {profileDetail.title}
                </h5>
                <h3 className="text-[1.4rem] font-semibold mb-[1.5rem] hmMd:text-[1.2rem]">
                  {profileDetail.name}
                </h3>
              </div>
              <button className="text-clr1 text-[1.5rem] hmMd:text-[1.3rem]">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileDetails;
