import { forbiddenFountain, forbiddenLockerroom, partialFountain, partialLockerroom, recommendedMask, recommendedTowel, requiredLockerroom, requiredMask, requiredTowel } from '../../images';
import './legend.css';

export const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <h4>Máscara</h4>
        <div className="legend-images">
          <div className="legend-image">
            <img src={requiredMask} alt="Máscara Obrigatória" />
            <p>Obrigatório</p>
          </div>
          <div className="legend-image">
            <img src={recommendedMask} alt="Máscara Recomendada" />
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div className="legend-item">
        <h4>Toalha</h4>
        <div className="legend-images">
          <div className="legend-image">
            <img src={requiredTowel} alt="Toalha Obrigatória" />
            <p>Obrigatório</p>
          </div>
          <div className="legend-image">
            <img src={recommendedTowel} alt="Toalha Recomendada" />
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div className="legend-item">
        <h4>Bebedouro</h4>
        <div className="legend-images">
          <div className="legend-image">
            <img src={partialFountain} alt="Bebedouro Parcial" />
            <p>Parcial</p>
          </div>
          <div className="legend-image">
            <img src={forbiddenFountain} alt="Bebedouro Proibido" />
            <p>Proibido</p>
          </div>
        </div>
      </div>
      <div className="legend-item">
        <h4>Vestiários</h4>
        <div className="legend-images">
          <div className="legend-image">
            <img src={requiredLockerroom} alt="Vestiários Liberados" />
            <p>Liberado</p>
          </div>
          <div className="legend-image">
            <img src={partialLockerroom} alt="Vestiários Parciais" />
            <p>Parcial</p>
          </div>
          <div className="legend-image">
            <img src={forbiddenLockerroom} alt="Vestiários Fechados" />
            <p>Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

