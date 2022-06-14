import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Flex, Text } from 'rebass';

const GreetName = ({ onChange, ...rest }) => {
  const { register, handleSubmit, errors } = useFormContext();

  const onSubmit = (formPayload) => {};

  console.log('greetname', errors);

  return (
    <Flex flexDirection="column" width="200px" {...rest}>
      <Text>{errors?.name?.message}</Text>
      <input
        {...register('name', { required: 'Name is Required', onChange })}
      />
      <br />
      ...
      <Text>{errors?.first?.message}</Text>
      <input {...register('first', { required: 'First Name is Required' })} />
      <br />
      <Text>{errors?.last?.message}</Text>
      <input {...register('last', { required: 'last Name is Required' })} />
      <br />
      <button onClick={handleSubmit(onSubmit)}>onSubmit</button>
    </Flex>
  );
};

export default memo(GreetName);
