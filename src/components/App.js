import React from 'react';
import List from './List'
import { connect } from "react-redux"
import AddButton from "./AddButton"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { sort } from "../actions"
import { ListContainerA, AppHeader } from "./styles"


const App = props => {

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))
  }


    const { lists } = props
    
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <AppHeader>List Creator</AppHeader>
          <Droppable droppableId="lists-wrapper" direction="horizontal" type="list">
            {provided => (
              <ListContainerA {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => (
                  <List listID={list.id} title={list.title} cards={list.cards} key={list.id} index={index}/>
                ))}
                {provided.placeholder}
                <AddButton list />
              </ListContainerA>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
