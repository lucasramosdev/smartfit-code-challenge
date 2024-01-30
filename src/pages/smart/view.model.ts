import { useState } from "react"
import { GymModel } from "../../commom/models/gym.model"
import { getGyms as GymsRepository } from "../../commom/models/repositories/gym.repository";

const useSmartViewModel = () => {
  const [gyms, setGyms] = useState<GymModel[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [includeClosed, setIncludeClosed] = useState<boolean>(false);

  const reset = () => {
    setTime([]);
    setGyms([]);
    setIncludeClosed(false);
  }

  const getGyms = async () => {
    try{
      let timetoSend = time.length == 0 ? [''] : time; 
      const response = await GymsRepository({time: timetoSend, includeClosed: includeClosed});
      setGyms(response);
    }
    catch(error){
      console.log(error);
    }
  }
  return {
    gyms,
    getGyms,
    time,
    setTime,
    setIncludeClosed,
    setGyms,
    reset
  }
};

export default useSmartViewModel;
