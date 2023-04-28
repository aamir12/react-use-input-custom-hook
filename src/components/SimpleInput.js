
import useInput from '../hooks/use-input';

const checkIsEmpty = (value) => {
  return  value.trim() !== ''
}

const checkEmail = (value) => {
  return  value.trim() !== '' &&  value.toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
}

const SimpleInput = (props) => {

  const {
    changeHandler:nameChangeHandler,
    blurHandler:nameBlurHandler,
    value:nameValue,
    hasError: nameHasError,
    isValid:nameIsValid,
    reset:nameReset,
    touchHandler:nameTouchHandler
  } = useInput(checkIsEmpty);

  const {
    changeHandler:emailChangeHandler,
    blurHandler:emailBlurHandler,
    value:emailValue,
    hasError: emailHasError,
    isValid:emailIsValid,
    reset:emailReset,
    touchHandler:emailTouchHandler
  } = useInput(checkEmail);

  const formIsValid = nameIsValid && emailIsValid; 

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameTouchHandler(true);
    emailTouchHandler(true);

    if (!emailIsValid || !nameIsValid) {
      return;
    }

    console.log(nameValue);
    console.log(emailValue);

    emailReset();
    nameReset();
  };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  console.log('render')  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className='error-text'>Enter Valid Email Address.</p>
        )}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;