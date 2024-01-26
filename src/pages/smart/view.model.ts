import { useState } from "react"
import { GymModel } from "../../commom/models/gym.model"

const useSmartViewModel = () => {
  const [gyms, setGyms] = useState<GymModel[]>([]);

  return {
    gyms
  }
};

export default useSmartViewModel;
