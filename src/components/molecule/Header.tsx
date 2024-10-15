import React from "react";
import Media from "../atom/media/Media";
import appLogo from "../../assets/appLogo.jpg";
import Typography from "../atom/typography/Typography";

const Header: React.FC = () => {
  return (
    <>
      <header className=" bg-primary  flex items-center justify-between p-2">
        <Media
          src={appLogo}
          alt="appLogo"
          mediaType="img"
          containerClasses="flex items-center"
          mediaClasses="h-20"
        />

        <Typography
          tag="h1"
          text={`"No pain, no gain."`}
          classes="text-sm font-bold sm:animate-zoom-in-out sm:text-2xl"
        />

        <Typography
          tag="a"
          text="ViewWorkouts"
          classes="text-2xl font-bold cursor-pointer hover:scale-110 transform transition duration-300 "
          href="/workouts"
          onClick={() => alert("Create a Workout Plan First")}
        />
      </header>
      <hr className=" bg-secondary" />
    </>
  );
};

export default Header;
