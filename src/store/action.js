export const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
  SET_ERROR_MESSAGE: 'ERROR::MESSAGE',
};

export const addNewFilm = (film) => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

export const setErrorMessage = (error) => ({
  type: ACTION_TYPES.SET_ERROR_MESSAGE,
  payload: error,
});
