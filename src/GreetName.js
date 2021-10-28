import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Flex } from 'rebass';

const GreetName = ({ actionsUpdate, ...rest }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formPayload) => {
    actionsUpdate({ ...formPayload });
  };

  /**
   * handleChange
   *
   */
  const handleChange = (event) => {
    actionsUpdate({ name: event.target.value });
  };

  console.log('GreetName render');

  return (
    <Flex flexDirection="column" width="200px" {...rest}>
      <input
        {...register('name', { required: true })}
        onChange={handleChange}
      />
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
