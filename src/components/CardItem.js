import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Draggable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import { CardContainer, DeleteButtonCard } from "./styles"
import { deleteCard } from "../actions"


const CardItem = ({ text, id, listID, index, dispatch }) => {

  const handleDeleteCard = () => {
    //console.log(listID + " " + id)
    dispatch(deleteCard(index, listID));
  }

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <Card>
            <DeleteButtonCard fontSize="small" onMouseDown={handleDeleteCard}>
              delete
            </DeleteButtonCard>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable >
  )
}

export default connect()(CardItem)
