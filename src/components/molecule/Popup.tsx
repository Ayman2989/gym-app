import React, { useContext } from "react";
import { UserContext } from "../../context";
import Button from "../atom/button/Button";

function Modal({}) {
  const { popupContent, closePopup } = useContext(UserContext);
  const handleClick = () => {
    closePopup();
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
        <div className="flex justify-between items-center place-content-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            {popupContent?.name}
          </h2>
          <Button
            classes=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleClick}
          >
            X
          </Button>
        </div>
        <img
          src={popupContent?.gifUrl}
          alt={popupContent?.name}
          className="mb-4"
        />
        <div className="flex-1 overflow-auto mb-4">
          <p className="text-sm line-clamp-3 text-primary font-bold">
            {popupContent?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
