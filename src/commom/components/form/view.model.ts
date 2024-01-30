import { ChangeSelectionModel } from "./model";

const useFormViewModel = () => {
  const changeSelection = (model: ChangeSelectionModel, element: HTMLInputElement) => {
    let newTime = model.time;

    if(!element.checked && model.time.includes(element.value)){
      let index = newTime.indexOf(element.value);
      newTime.splice(index, 1);
      model.setTime(newTime);
    }
    if(element.checked && !model.time.includes(element.value)){
      newTime.push(element.value)
      model.setTime(newTime);
    }
  
  }
  
  const includeClosed = (setIncludeClosed: React.Dispatch<React.SetStateAction<boolean>>, element: HTMLInputElement) => {
    console.log(element.checked)
    setIncludeClosed(element.checked);
  }

  const resetForm = (reset: () => void, form: HTMLFormElement | null) => {
    if(form){
      reset();
      const checkboxes: NodeListOf<HTMLInputElement> = form.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
    }
  }
  return {
    changeSelection,
    includeClosed,
    resetForm

  }
};

export default useFormViewModel;
