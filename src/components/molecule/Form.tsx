import React, { useContext } from "react";
import Typography from "../atom/typography/Typography";
import { UserContext } from "../../context";
import { muscleGroups } from "../../context";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const { userInfo, setUserInfo, updateMuscleGroups } = useContext(UserContext);

  const muscleGroups: muscleGroups[] = [
    "Biceps",
    "Triceps",
    "Shoulders",
    "Back",
    "Chest",
    "Abs",
    "Quads",
    "Calves",
    "Traps",
    "Neck",
    "Forearms",
  ];

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/workouts");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <Typography
          tag="h1"
          text="Create Your Workout Plan"
          classes="text-2xl font-bold mb-6 text-gray-800 text-center"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <input
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              type="text"
              required
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-300 text-primary"
            />
            <label className="absolute left-4 top-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-500">
              Your Name
            </label>
          </div>

          {/* Gym Preference */}
          <div className="flex justify-between items-center">
            <span className="text-primary font-medium">
              Workout Preference:
            </span>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gym_pref"
                  value="Gym"
                  className="form-radio text-primary"
                  onChange={() =>
                    setUserInfo({ ...userInfo, preference: "gym" })
                  }
                />
                <span className="ml-2 text-tertiary font-semibold">Gym</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gym_pref"
                  value="Home"
                  className="form-radio text-primary"
                  onChange={() =>
                    setUserInfo({ ...userInfo, preference: "home" })
                  }
                />
                <span className="ml-2 text-tertiary font-semibold">
                  Home Workouts
                </span>
              </label>
            </div>
          </div>

          {/* Muscle Groups */}
          <div>
            <span className="text-primary font-medium">
              Focus Muscle Groups:
            </span>
            <div className="grid grid-cols-2 gap-4 mt-2 text-tertiary">
              {muscleGroups.map((group) => (
                <button
                  type="button"
                  key={group}
                  className={`p-2 m-2 font-semibold ${
                    userInfo.muscleGroups.includes(group)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                  onClick={() => updateMuscleGroups(group)}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Get My Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
