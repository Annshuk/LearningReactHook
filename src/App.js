import React, { useCallback } from 'react';
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

  const col = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  );
  const data = React.useMemo(() => makeData(200), []);

  return (
    <FormProvider {...{ register, handleSubmit, errors, ...restProps }}>
      <Greet name={state.name} />
      <br />
      <GreetName onChange={handleChange} />
      <Styles>
        <Table columns={col} data={data} />
      </Styles>
    </FormProvider>
  );
};

export default App;
