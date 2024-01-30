import './card-list.css'
import { GymModel } from "../../models/gym.model";
import { Card } from '../card/card';

interface ListProps{
    gyms: GymModel[]
}

export const CardList = ({gyms}: ListProps) => {
    return (
        <ul className="card-list">
            {gyms.map((gym: GymModel, index: number) => (
                <li key={index}>
                    <Card card={gym} />
                </li>
            ))}
        </ul>
    );
};