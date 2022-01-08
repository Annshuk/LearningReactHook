export const initialState = {
  name: '',
  amout: '',
  test: '',
};

export const updateNameAction = (state, payload) => ({
  ...state,
  ...payload,
});
