import React, { useContext, useEffect } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
import Card from "../components/molecule/Card";
import Typography from "../components/atom/typography/Typography";
import Button from "../components/atom/button/Button";

const Workouts: React.FC = () => {
  const { userInfo, newWorkout } = useContext(UserContext);
  const muscleGroups = userInfo.muscleGroups;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.name) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const requiredWorkouts =
    userInfo.preference == "gym" ? data.gymWorkouts : data.homeWorkouts;
  const filteredWorkouts = requiredWorkouts.filter((workout) =>
    muscleGroups.includes(workout.muscleGroup)
  );
  const handleClick = () => {
    newWorkout();
    navigate("/");
  };

  return (
    <div className=" container mx-auto p-9">
      <div className=" flex justify-between">
        <div>
          <Typography
            tag="h1"
            text={`Alright ${userInfo.name},`}
            classes="text-3xl font-semibold mb-2 "
          />
          <Typography
            tag="h1"
            text={`  Here are your
             ${userInfo.preference}        
              Workouts`}
            classes="text-md font-semibold mb-2 animate-typing overflow-hidden whitespace-nowrap md:text-xl"
          />
        </div>
        <Button
          type="button"
          classes=" hover:bg-white px-2 transform transition duration-300 hover:text-slate-500 rounded-lg shadow-lg h-12"
          onClick={() => handleClick()}
        >
          New Workout
        </Button>
      </div>
      <h2></h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {filteredWorkouts.length === 0 ? (
          <Typography
            tag="p"
            text="No workouts available for the selected muscle groups."
            classes="text-red-500"
          />
        ) : (
          filteredWorkouts.map((workout, id) => (
            <Card
              key={id}
              id={id}
              name={workout.name}
              gifUrl={workout.gifUrl}
              description={workout.description}
              muscleGroup={workout.muscleGroup}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Workouts;
