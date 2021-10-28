import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Flex } from 'rebass';
import { useStateMachine } from 'little-state-machine';

import { updateNameAction } from './store';

const GreetName = ({ dispatch, stateName = 'name', ...rest }) => {
  const { state, actions } = useStateMachine({ updateNameAction });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formPayload) => {
    actions.updateNameAction({ name: formPayload.first, ...formPayload });
  };

  /**
   * handleChange
   *
   */
  const handleChange = (event) => {
    dispatch({ [stateName]: event.target.value });
  };

  console.log('GreetName render');

  return (
    <Flex flexDirection="column" width="200px" {...rest}>
      <input onChange={handleChange} />
      <br />
      <input {...register('first', { required: true })} />
      <br />
      <input {...register('last', { required: true })} />
      <br />
      <button onClick={handleSubmit(onSubmit)}>onSubmit</button>
    </Flex>
  );
};

export default memo(GreetName);
