import { useState } from 'react';
import './form.css';
import hour from './icon-hour.png'
import useFormViewModel from './view.model';
import { ChangeSelectionModel } from './model';
import { SmartViewModel } from '../../../pages/smart/models';

export const Form = ({gyms, getGyms, setIncludeClosed, time, setTime, reset}: SmartViewModel) => {
  const model: ChangeSelectionModel = {time, setTime};
  const {changeSelection, includeClosed, resetForm} = useFormViewModel();
  const [form, setForm] = useState<HTMLFormElement | null>(null);

  return (
    <form className="form-group" onSubmit={e => e.preventDefault()} ref={element => setForm(element)}>
      <div className="form-icon">
        <img src={hour} alt="Icon" />
        Horário
      </div>
      <h3>Qual horário você quer treinar?</h3>
      <div className="radio-wrapper">
        <input
          type="checkbox"
          name="hour"
          value="Manhã"
          onChange={e => changeSelection(model, e.target)}
        />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 às 12h</span>
      </div>
      <div className="radio-wrapper">
        <input
          type="checkbox"
          name="hour"
          value="Tarde"
          onChange={e => changeSelection(model, e.target)}
        />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 às 18h</span>
      </div>
      <div className="radio-wrapper">
        <input
          type="checkbox"
          name="hour"
          value="Noite"
          onChange={e => changeSelection(model, e.target)}
        />
        <label htmlFor="night">Noite</label>
        <span>18:01 às 23h</span>
      </div>
      <div className="checkbox-wrapper">
        <div className="checkbox">
          <input
            type="checkbox"
            name="showClosed"
            onChange={e => includeClosed(setIncludeClosed, e.target)}
          />
          <label htmlFor="showClosed">Exibir unidades fechadas</label>
        </div>
        <span>Resultados encontrados: {gyms.length}</span>
      </div>
      <div className="btn-wrapper">
        <button className="btn btn-primary" onClick={getGyms}>
          Encontrar unidade
        </button>
        <button className="btn btn-secondary" onClick={() => resetForm(reset, form)}>
          Limpar
        </button >
      </div>
    </form>
  )
};
