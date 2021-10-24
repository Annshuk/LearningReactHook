# react-34zpft

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-34zpft)

# How and when need to use memorized Hooks

```const App = ({ intialValue = 'Anshuk' }) => {
  const [state, setState] = useReducer(changeName, { name: intialValue });

  const { name } = state;

  /**
   * handleChange
   * using callback hook prevent to render another child componet
   */
  const handleChange = useCallback((event) => {
    setState({ name: event.target.value });
  }, []);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      <br />
      <Greet name={name} onChange={handleChange} />
      <br />
      <GreetName onChange={handleChange} />
    </div>
  );
};
