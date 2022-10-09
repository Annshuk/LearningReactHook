import React, { useMemo, useState } from 'react';
import { Box } from 'rebass';

const intialValue = {
  test1: true,
  test2: false,
  test3: false,
};

const CheckUnchecked = (props) => {
  const [formData, setForm] = useState(intialValue);

  const allSelected = useMemo(
    () => Object.values(formData).every(Boolean),
    [formData]
  );

  const handlChecked = ({ target }) => {
    setForm({ ...formData, [target.name]: target.checked });
  };

  const handleAllChecked = () => {
    setForm((prevState) =>
      Object.keys(prevState).reduce(
        (prev, key) => ({ ...prev, ...prev[key], [key]: !allSelected }),
        {}
      )
    );
  };

  return (
    <Box mt="1rem">
      <input type="checkbox" checked={allSelected} onClick={handleAllChecked} />{' '}
      Check/unchecked
      <Box mt="1rem">
        {Object.entries(formData).map(([key, value]) => {
          return (
            <input
              type="checkbox"
              checked={value}
              key={key}
              name={key}
              onChange={handlChecked}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export { CheckUnchecked };
