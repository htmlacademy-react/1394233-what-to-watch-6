export const ActionType = {
  ALL: `movies/all`,
  COMEDIES: `movies/comedies`,
  CRIME: `movies/crime`,
  DOCUMENTARY: `movies/documentary`,
  DRAMAS: `movies/dramas`,
  HORROR: `movies/horror`,
  KIDS_FAMILY: `movies/kidsFamily`,
  ROMANCE: `movies/romance`,
  SCI_FI: `movies/sciFi`,
  THRILLERS: `movies/thrillers`,
};

export const ActionCreator = {
  changeGenres: (typeName) => ({
    type: typeName,
  }),
};
