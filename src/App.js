import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

import Greet from './Greet';
import GreetName from './GreetName';

import { updateNameAction } from './store';
import makeData from './makeData';

import { Table, Styles } from './Table';

import './style.css';

/**
 * App
 * use of memo and hook callbacks,
 *
 * how you can prevent re-render
 */

const intialValue = {
  test1: true,
  test2: false,
  test3: false,
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
    ...restProps
  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const [formData, setForm] = useState(intialValue);

  const { actions, state } = useStateMachine({ updateNameAction });

  /**
   * handleChange
   *
   */
  const handleChange = useCallback((event) => {
    actions.updateNameAction({ name: event.target.value });
  }, []);

  // const col = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Name',
  //       columns: [
  //         {
  //           Header: 'First Name',
  //           accessor: 'firstName',
  //         },
  //         {
  //           Header: 'Last Name',
  //           accessor: 'lastName',
  //         },
  //       ],
  //     },
  //     {
  //       Header: 'Info',
  //       columns: [
  //         {
  //           Header: 'Age',
  //           accessor: 'age',
  //         },
  //         {
  //           Header: 'Visits',
  //           accessor: 'visits',
  //         },
  //         {
  //           Header: 'Status',
  //           accessor: 'status',
  //         },
  //         {
  //           Header: 'Profile Progress',
  //           accessor: 'progress',
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // );
  // const data = React.useMemo(() => makeData(200), []);
  const allSelected = Object.values(formData).every(Boolean);

  console.log(formData);

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
    <FormProvider {...{ register, handleSubmit, errors, ...restProps }}>
      <Greet name={state.name} />
      <br />
      <GreetName onChange={handleChange} />
      <button onClick={handleAllChecked}>
        {!allSelected ? 'Select All' : 'unSelect All'}
      </button>

      <br />
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
    </FormProvider>
  );
};

export default App;
