import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

import '../style.css';
import { updateNameAction } from '../store';

import { CheckUnchecked } from '../CheckUnchecked';
import { Textarea } from '../Textarea';

import Greet from './Greet';
import GreetName from './GreetName';

const totalCount = 90;
/**
 * Example
 * use of memo and hook callbacks,
 * how you can prevent re-render
 */
const Example = () => {
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
      <nav>
        <Link to="/kanban">Kanban</Link>
      </nav>
      <Greet name={state.name} />
      <br />
      <GreetName onChange={handleChange} />
      <CheckUnchecked />
      <Textarea id="textFields" maxLength={totalCount} />
    </FormProvider>
  );
};

export default Example;
