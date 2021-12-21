import React, { useRef, useState } from 'react';
import { Flex, Text } from 'rebass';

const Textarea = ({ id, rows = 4, cols = 30, maxLength, ...rest }) => {
  const [count, setCount] = useState(maxLength);

  const handleChange = ({ target }) => {
    setCount(maxLength - target.value.length);
  };

  return (
    <Flex flexDirection="column" width={300}>
      <textarea
        id={id}
        name={id}
        rows={rows}
        cols={cols}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <Text>
        Remaining {maxLength} / {count}
      </Text>
    </Flex>
  );
};

export { Textarea };
