const ActionType = {
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
  changeComedies: () => ({
    type: ActionType.COMEDIES
  }),
  changeCrime: () => ({
    type: ActionType.CRIME
  }),
  changeDramas: () => ({
    type: ActionType.DRAMAS
  }),
  changeDocumentary: () => ({
    type: ActionType.DOCUMENTARY
  }),
  changeHorror: () => ({
    type: ActionType.HORROR
  }),
  changeKidsFamily: () => ({
    type: ActionType.KIDS_FAMILY
  }),
  changeRomance: () => ({
    type: ActionType.ROMANCE
  }),
  changeSciFi: () => ({
    type: ActionType.SCI_FI
  }),
  changeThrillers: () => ({
    type: ActionType.THRILLERS
  }),
  changeAll: () => ({
    type: ActionType.ALL
  })
};

export default {ActionType};
