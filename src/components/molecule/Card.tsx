import React, { useContext } from "react";
import Media from "../atom/media/Media";
import Typography from "../atom/typography/Typography";
import Button from "../atom/button/Button";
import { UserContext } from "../../context";
import { muscleGroups } from "../../context";
import Popup from "../molecule/Popup";

interface CardProps {
  id: number;
  name: string;
  description: string;
  muscleGroup: muscleGroups;
  gifUrl: string;
}

const Card: React.FC<CardProps> = ({
  name,
  id,
  description,
  muscleGroup,
  gifUrl,
}) => {
  const { openPopup, popupContent } = useContext(UserContext);

  const handleButtonClick = () => {
    openPopup({ name, description, muscleGroup, gifUrl });
  };

  return (
    <div
      className="bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
      key={id}
    >
      <Media
        mediaType="img"
        src={gifUrl}
        alt={name}
        containerClasses="bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
        mediaClasses="w-full  object-cover transform transition duration-300 hover:scale-105"
      />

      <div className=" flex p-4 justify-between items-center bg-gray-600 shadow-lg  ">
        <Typography tag="h1" text={name} classes="text-lg font-semibold mb-2" />
        <Typography
          tag="h1"
          text={`For Your ${muscleGroup}`}
          classes="text-lg font-semibold mb-2"
        />
      </div>
      <div className=" text-center font-medium bg-gray-500 hover:bg-gray-600 transform transition duration-300">
        <Button type="button" classes=" p-2 " onClick={handleButtonClick}>
          Know More
        </Button>
      </div>

      {popupContent && <Popup />}
    </div>
  );
};

export default Card;
