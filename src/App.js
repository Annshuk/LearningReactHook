import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

import './style.css';

import { updateNameAction } from './store';

import Greet from './Greet';
import GreetName from './GreetName';
import { CheckUnchecked } from './CheckUnchecked';
import { Textarea } from './Textarea';

/**
 * App
 * use of memo and hook callbacks,
 * how you can prevent re-render
 */
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
    ...restProps
  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const { actions, state } = useStateMachine({ updateNameAction });

  /**
   * handleChange
   *
   */
  const handleChange = useCallback(({ target }) => {
    actions.updateNameAction({ name: target.value });
  }, []);

  return (
    <FormProvider {...{ register, handleSubmit, errors, ...restProps }}>
      <Greet name={state.name} />
      <br />
      <GreetName onChange={handleChange} />
      <CheckUnchecked />
      <Textarea id="textFields" maxLength={10} />
    </FormProvider>
  );
};

export default App;
