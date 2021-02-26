export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  SHOW_MORE_FILMS: `films/showMore`
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  })
};
