import { useState } from 'react';

const useInput = (isSubmit, validate) => {
  const [enterField, setEnteredField] = useState('');
  const [enteredFieldIsTouched, setEnteredFieldIsTouched] = useState(false);

  const enteredFieldIsValid = validate(enterField);
  const fieldHasError =
    !enteredFieldIsValid && (enteredFieldIsTouched || isSubmit);

  const fieldInputChangeHandler = (event) => {
    setEnteredField(event.target.value);
  };

  const fieldInputBlurHandler = (event) => {
    setEnteredFieldIsTouched(true);
  };

  const reset = () => {
    setEnteredField('');
    setEnteredFieldIsTouched(false);
  };

  return {
    changeHandler: fieldInputChangeHandler,
    blurHandler: fieldInputBlurHandler,
    value: enterField,
    hasError: fieldHasError,
    isValid: enteredFieldIsValid,
    isTouched: enteredFieldIsTouched,
    reset,
    touchHandler: setEnteredFieldIsTouched,
  };
};

export default useInput;
