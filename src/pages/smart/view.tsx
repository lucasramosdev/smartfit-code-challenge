import React from 'react';
import useSmartViewModel from './view.model';

export default function SmartView() {

  const {gyms} = useSmartViewModel();
  console.log(gyms)

  return (
    <div>Smart</div>
  )
}
