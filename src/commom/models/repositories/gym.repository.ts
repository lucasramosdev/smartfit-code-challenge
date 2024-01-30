import { GymModel } from "../gym.model";
import client from "./client";
import qs from 'qs';

export interface GetGymDTO{
  time: string[];
  includeClosed: boolean;
}

export const getGyms = async ({time, includeClosed}: GetGymDTO): Promise<GymModel[]> => {
  const {data, request} = await client.get('/localizacoes', {params: {horarios: time, incluir_fechadas: includeClosed}, paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })})
  console.log(request, data);
  return data;
}