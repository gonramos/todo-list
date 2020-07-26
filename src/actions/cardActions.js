import { CONSTANTS } from "../actions"

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {
      text,
      listID
    }
  }
}

export const deleteCard = (index, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { index, listID }
  }
}