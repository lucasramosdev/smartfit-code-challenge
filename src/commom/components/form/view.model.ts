const useFormViewModel = () => {
  const changeSelection = (changeQuery: ChangeQueryModel, element: HTMLInputElement) => {
    console.log(element.checked)
    let newTime = changeQuery.time;

    if(!element.checked && changeQuery.time.includes(element.value)){
      let index = newTime.indexOf(element.value);
      newTime.splice(index, 1);
      changeQuery.setTime(newTime);
    }
    if(element.checked && !changeQuery.time.includes(element.value)){
      newTime.push(element.value)
      changeQuery.setTime(newTime);
    }
  
  }
  
  const includeClosed = (changeQuery: ChangeQueryModel, element: HTMLInputElement) => {
    changeQuery.setIncludeClosed(element.checked);
  }

  const resetForm = (changeQuery: ChangeQueryModel, form: HTMLFormElement | null) => {
    if(form){
      changeQuery.setTime([]);
      changeQuery.setIncludeClosed(false);
      form.reset();
    }
  }
  return {
    changeSelection,
    includeClosed,
    resetForm

  }
};

export default useFormViewModel;
