import useSmartViewModel from './view.model';
import { GymModel } from '../../commom/models/gym.model';
import { Apresentation, CardList, Footer, Form, Legend } from '../../commom/components';

export default function SmartView() {
  const {gyms, getGyms, reset, setGyms, setIncludeClosed, setTime, time} = useSmartViewModel();
  return (
    <div>
      <Apresentation></Apresentation>
      <Form getGyms={getGyms} gyms={gyms} reset={reset} setGyms={setGyms} setIncludeClosed={setIncludeClosed} setTime={setTime} time={time}/>
      <Legend/>
      <CardList gyms={gyms}/>
      <Footer/>
    </div>
  )
}
