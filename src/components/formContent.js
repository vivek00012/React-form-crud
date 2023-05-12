import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../globalContextProvider';

const Form = () => {
  const { addData, incrementSubmitCount } = useGlobalContext();
  const email = useRef();
  const userName = useRef();
  const firstName = useRef();
  const lastName = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    incrementSubmitCount();
    addData({
      email: email.current.value,
      userName: userName.current.value,
      lastName: lastName.current.value,
      firstName: firstName.current.value,
    });
    email.current.value = '';
    userName.current.value = '';
    firstName.current.value = '';
    lastName.current.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" ref={email} />
        <input type="text" ref={userName} />
        <input type="text" ref={lastName} />
        <input type="text" ref={firstName} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
