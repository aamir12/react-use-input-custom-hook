import React, { useState } from 'react';
import useInput from '../hooks/use-input';
import { checkIsEmpty, checkEmail } from '../syncValidation';

const BasicForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    value: firstNameValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    reset: firstNameReset,
  } = useInput(isSubmit, checkIsEmpty);

  const {
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    value: lastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    reset: lastNameReset,
  } = useInput(isSubmit, checkIsEmpty);

  const {
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: emailReset,
  } = useInput(isSubmit, checkEmail);

  const resetForm = () => {
    emailReset();
    firstNameReset();
    lastNameReset();
    setIsSubmit(false);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    if (!emailIsValid || !firstNameIsValid || !lastNameIsValid) {
      return;
    }

    console.log(firstNameValue);
    console.log(emailValue);
    console.log(lastNameValue);

    resetForm();
  };

  const firstNameInputClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={firstNameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Invalid Email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
