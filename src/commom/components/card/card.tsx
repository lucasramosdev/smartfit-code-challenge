import './card.css'
import { Agendamento, GymModel } from "../../models/gym.model"
import { forbiddenFountain, forbiddenLockerroom, partialFountain, partialLockerroom, recommendedMask, recommendedTowel, requiredLockerroom, requiredMask, requiredTowel } from '../../images';
interface CardProps {
    card: GymModel;
}

export const Card = ({ card }: CardProps) => {
    return (
        <div className="card">
            <span className={card.aberto ? 'opened' : ''}>
                {card.aberto ? 'Aberto' : 'Fechado'}
            </span>
            <h3>{card.titulo}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.conteudo }}></p>
            <div className="divider"></div>
            <ul>
                {
                    card.mascara == 'required' && (
                        <img src={requiredMask} alt="Mask" />
                    )
                }
                {
                    card.mascara == 'recommended' && (
                        <img src={recommendedMask} alt="Mask" />
                    )
                }
                {
                    card.toalha == 'required' && (
                        <img src={requiredTowel} alt="Towel" />
                    )
                }
                {
                    card.toalha == 'recommended' && (
                        <img src={recommendedTowel} alt="Towel" />
                    )
                }
                {
                    card.bebedouro == 'partial' && (
                        <img src={partialFountain} alt="Fountain" />
                    )
                }
                {
                    card.bebedouro == 'not_allowed' && (
                        <img src={forbiddenFountain} alt="Fountain" />
                    )
                }
                                {
                    card.vestiario == 'closed' && (
                        <img src={forbiddenLockerroom} alt="LockerRoom" />
                    )
                }
                                {
                    card.vestiario == 'allowed' && (
                        <img src={requiredLockerroom} alt="LockerRoom" />
                    )
                }
                                {
                    card.vestiario == 'partial' && (
                        <img src={partialLockerroom} alt="LockerRoom" />
                    )
                }
            </ul>
            <ul>
                {card.agendamentos.map((agendamento: Agendamento, index) => (
                    <li key={index}>
                        <b>{agendamento.dias_semana}</b> {agendamento.horario}
                    </li>
                ))}
            </ul>
        </div>
    );
}