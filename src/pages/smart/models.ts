import React from "react";
import { GymModel } from "../../commom/models/gym.model";

export interface SmartViewModel {
  gyms: GymModel[];
  setGyms: React.Dispatch<React.SetStateAction<GymModel[]>>;
}