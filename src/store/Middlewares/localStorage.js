export const localStorage = (store) => async (next) => (action) => {
  const response = next(action);
  console.log(response);
  return response;
};
