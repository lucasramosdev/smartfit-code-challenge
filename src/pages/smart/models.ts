import React from "react";
import { GymModel } from "../../commom/models/gym.model";

export interface SmartViewModel {
  gyms: GymModel[];
  time: string[];
  setTime: React.Dispatch<React.SetStateAction<string[]>>;
  setIncludeClosed: React.Dispatch<React.SetStateAction<boolean>>;
  setGyms: React.Dispatch<React.SetStateAction<GymModel[]>>;
  reset: () => Promise<void>;
  getGyms: () => Promise<void>;
}