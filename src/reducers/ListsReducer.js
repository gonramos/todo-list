import { CONSTANTS } from "../actions"

// quick workaround to avoid same IDs when creating new lists and cards after refreshing page
let listID = Math.floor(Math.random() * Math.floor(100000))
let cardID = Math.floor(Math.random() * Math.floor(100000))

const initialState = []

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.DELETE_LIST: {
      const index = action.payload
      const newState = state
      newState.splice(index, 1)
      return [...newState]
    }

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1
      return [...state, newList]

    case CONSTANTS.DELETE_CARD: {

      const { index, listID } = action.payload
      const newState = state
      newState.find(list => list.id === listID).cards.splice(index, 1)
      
      return [...newState]
      
    }
    
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: cardID
      }
      cardID += 1

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })

      return newState
    }

    case CONSTANTS.DRAG_HAPPENED:{

      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload

      const newState = [...state]

      if (type === "list") {
        
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)

      } else {
        if (droppableIdStart === droppableIdEnd) {

          const list = state.find(list => String(list.id) === droppableIdStart)
          const card = list.cards.splice(droppableIndexStart, 1)
          list.cards.splice(droppableIndexEnd, 0, ...card)

        }

        if (droppableIdStart !== droppableIdEnd) {

          const listStart = state.find(list => String(list.id) === droppableIdStart)
          const card = listStart.cards.splice(droppableIndexStart, 1)
          const listEnd = state.find(list => String(list.id) === droppableIdEnd)
          listEnd.cards.splice(droppableIndexEnd, 0, ...card)

        }
      }

      return newState
    }

    default:
      return state
  }
}

export default ListsReducer