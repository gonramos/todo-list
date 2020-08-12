import React from 'react'
import CardItem from './CardItem.js'
import AddButton from "./AddButton"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { ListHeader, ListContainerB, DeleteButton, TitleContainer, ListHeaderWrapper } from "./styles"
import { deleteList } from "../actions"
import { connect } from "react-redux"


const List = ({ title, cards, listID, index, dispatch }) => {

  const handleDeleteList = () => {
    dispatch(deleteList(index))
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainerB {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <TitleContainer>
                  <ListHeaderWrapper>
                    <ListHeader>{title}</ListHeader>
                  </ListHeaderWrapper>
                  <DeleteButton onClick={handleDeleteList}>
                    delete
                  </DeleteButton>
                </TitleContainer>
                {cards.map((card, index) => (
                  <CardItem text={card.text} index={index} key={card.id} id={card.id} listID={listID}/>
                ))}
                {provided.placeholder}
                <AddButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainerB>
      )}
    </Draggable >

  )
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(List)