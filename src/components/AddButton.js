import React, { useState } from 'react'
import Textarea from "react-textarea-autosize"
import Icon from "@material-ui/core/Icon"
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import { connect } from "react-redux"
import { addList, addCard } from "../actions"

const AddButton = props => {
  // const [state, setState] = useState({
  //   formOpen: false
  // })
  
  const [formOpen, setFormOpen] = useState(false)
  const [formText, setFormText] = useState('')

  const openForm = () => {
    setFormOpen(true)
    // setState({
    //   ...state,
    //   formOpen: true
    // })
  }

  const closeForm = (e) => {
    setFormOpen(false)
    // setState({
    //   ...state,
    //   formOpen: false
    // })
  }

  const handleInputChange = e => {
    setFormText({text: e.target.value})
    // setState({
    //   ...state,
    //   text: e.target.value
    // })
  }

  const handleAddList = () => {
    const { dispatch } = props
    const { text } = formText

    if (text) {
      setFormText('')
      // setState({
      //   ...state,
      //   text:""
      // })
      dispatch(addList(text))
    }
    return
  }

  const handleAddCard = () => {
    const { dispatch, listID } = props
    const { text } = formText

    if (text) {
      setFormText('')
      // setState({
      //   ...state,
      //   text:""
      // })
      dispatch(addCard(listID, text))
    }
    return

  }

  const renderAddButton = () => {
    const { list } = props
    const buttonText = list ? "add list" : "add card"
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? "white" : "inherit"
    const buttonTextBackground = list ? "rgba(0,0,0,.2)" : "inherit"

    return (
      <div
        onClick={openForm}
        style={{
          ...styles.addButtonStyle,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          background: buttonTextBackground
        }}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  const renderForm = () => {
    const { list } = props
    const placeholder = list ? "list title..." : "card text..."
    const buttonTitle = list ? "Add List" : "Add Card"

    return <div>
      <Card
        style={{
          overflow: "visible",
          fontFamily: "Roboto, sans-serif",
          wrap: "hard",
          minHeight: 80,
          minWidth: 232,
          padding: 4
        }}
      >
        <Textarea
          placeholder={placeholder}
          autoFocus
          onBlur={closeForm}
          value={formText.text}
          onChange={handleInputChange}
          style={{
            overflow: "hidden",
            resize: "none",
            width: "100%",
            outline: "none",
            border: "none"
          }}
        />
      </Card>
      <div style={styles.formButtonGroup}>
        <Button
          onMouseDown={ list ? handleAddList : handleAddCard}
          variant="contained"
          style={{ color: "white", backgroundColor: "#C7B097" }}
        >
          {buttonTitle}
        </Button>
        <Icon onClick={closeForm} style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
      </div>
    </div>
  }


  return formOpen === true ? renderForm() : renderAddButton()

  
}

const styles = {
  addButtonStyle: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: 36,
    minWidth: 240
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
}

export default connect()(AddButton)
