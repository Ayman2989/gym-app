import React, { createContext, ReactNode, useEffect, useState } from "react";

type preferenceType = "gym" | "home";
export type muscleGroups =
  | "Biceps"
  | "Triceps"
  | "Shoulders"
  | "Back"
  | "Chest"
  | "Abs"
  | "Quads"
  | "Calves"
  | "Traps"
  | "Neck"
  | "Forearms";

interface userInfo {
  name: string;
  preference: preferenceType;
  muscleGroups: muscleGroups[];
}

interface userContextType {
  popupContent: popupContentType | null;
  setPopupContent: (content: popupContentType) => void;
  isPopupOpen: boolean;
  openPopup: (content: popupContentType) => void;
  closePopup: () => void;
  userInfo: userInfo;
  setUserInfo: (info: userInfo) => void;
  updateMuscleGroups: (group: muscleGroups) => void;
  newWorkout: () => void;
}

interface userProviderProps {
  children: ReactNode;
}

interface popupContentType {
  name: string;
  muscleGroup: muscleGroups;
  description: string;
  gifUrl: string;
}

const defaultUserContext: userContextType = {
  userInfo: {
    name: "",
    preference: "gym", // default preference
    muscleGroups: [], // default muscle groups
  },
  isPopupOpen: false,
  popupContent: null,
  setUserInfo: () => {}, // empty function as placeholder
  updateMuscleGroups: () => {}, // empty function as placeholder
  openPopup: () => {},
  closePopup: () => {},
  setPopupContent: () => {},
  newWorkout: () => {},
};

export const UserContext = createContext<userContextType>(defaultUserContext);

export const UserProvider: React.FC<userProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<userInfo>({
    name: "",
    preference: "gym",
    muscleGroups: [],
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<popupContentType | null>(
    null
  );

  const openPopup = (content: popupContentType) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  const newWorkout = () => {
    setUserInfo({
      name: "",
      preference: "gym", // default preference
      muscleGroups: [], // default muscle groups
    });
  };

  // Load the userInfo from localStorage on initial render
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Save userInfo to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const updateMuscleGroups = (group: muscleGroups) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      muscleGroups: prevUserInfo.muscleGroups.includes(group)
        ? prevUserInfo.muscleGroups.filter((g) => g !== group) //deselect
        : [...prevUserInfo.muscleGroups, group], //select
    }));
    XMLDocument;
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        updateMuscleGroups,
        openPopup,
        closePopup,
        isPopupOpen,
        popupContent,
        setPopupContent,
        newWorkout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
