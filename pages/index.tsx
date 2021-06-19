import { useState } from "react";
import { services } from "../data";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 align-middle">
      <h5 className="my-3 font-medium">
        Hi visitor!, here's a little something about me. I'm currently pursuing
        B.tech from SRM IST(3rd year). Below are the list of skills that fall
        under my circle of competency.
      </h5>
      <div
        className="flex-grow p-4 px-12 mt-5 none dark:contents dark:bg-dark-100"
        style={{ marginLeft: "-2.5rem", marginRight: "-2.5rem" }}
      >
        <h6 className="my-8 text-xl font-bold tracking-wider">What I Offer</h6>
        <div className="grid gap-y-12 gap-x-12 lg:grid-cols-2 ">
          {services.map((skill) => (
            <div
              key={skill.title}
              className="flex items-center p-4 space-x-4 rounded-lg shadow-custom-light dark:shadow-custom-dark bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-700 dark:to-dark-700 lg:col-span-1"
            >
              <skill.Icon className="w-12 h-12 text-light-fg1t dark:text-light " />
              <div>
                <h4 className="font-bold">{skill.title}</h4>
                <p>{skill.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;