# react-34zpft

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-34zpft)

# How and when need to use memorized Hooks

```const App = ({ intialValue = 'Anshuk' }) => {
  const [state, dispatch] = useReducer(changeName, { name: intialValue });

  const { name } = state;

  /**
   * handleChange
   * using callback hook prevent to render another child componet
   */
  const handleChange = useCallback((event) => {
    dispatch({ name: event.target.value });
  }, []);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      <br />
      <Greet name={name} onChange={handleChange} />
      <br />
      <GreetName onChange={handleChange} /> // if you are passing method without usig useCallback this compponent will also re-render as React create everytime new instance of the functon, with useCallbacks, it will memorized the instanse and wont re-render it not updating
    </div>
  );
};
