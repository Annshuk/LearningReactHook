import React, { useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

import Greet from './Greet';
import GreetName from './GreetName';

import { updateNameAction } from './store';

import './style.css';

/**
 * App
 * use of memo and hook callbacks,
 *
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
  const handleChange = useCallback((event) => {
    actions.updateNameAction({ name: event.target.value });
  }, []);

  return (
    <FormProvider {...{ register, handleSubmit, errors, ...restProps }}>
      <Greet name={state.name} />
      <br />
      <GreetName onChange={handleChange} />
    </FormProvider>
  );
};

export default App;
