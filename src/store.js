export const updateNameAction = (state, payload) => ({
  ...state,
  ...payload,
  name: state.name,
});
