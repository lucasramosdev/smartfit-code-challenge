import useSmartViewModel from './view.model';
import { GymModel } from '../../commom/models/gym.model';
import { Apresentation, Form, Legend } from '../../commom/components';

export default function SmartView() {
  const {gyms, getGyms, setGyms, setIncludeClosed, setTime, time} = useSmartViewModel();
  return (
    <div>
      <Apresentation></Apresentation>
      <Form/>
      <Legend/>
      {
        gyms.map((gym: GymModel, index: number) => (
          
            <div key={index}>{gym.conteudo}</div>
        ))
        
      }
      <button onClick={getGyms} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
    </div>
  )
}
