import React, { useRef, useState } from 'react';
import { Flex, Text } from 'rebass';

const Textarea = ({ id, rows = 4, cols = 30, ...rest }) => {
  const [count, setCount] = useState(10);

  const handleChange = ({ target }) => {
    console.log(target.value);
    setCount(10 - target.value.length);
  };

  console.log(count);

  return (
    <Flex flexDirection="column" width={300}>
      <textarea
        id={id}
        name={id}
        rows={rows}
        cols={cols}
        {...rest}
        onChange={handleChange}
      />
      <Text>Remaining 1000 / {count}</Text>
    </Flex>
  );
};

export { Textarea };
