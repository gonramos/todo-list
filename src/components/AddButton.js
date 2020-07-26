import React, { Component } from 'react'
import Textarea from "react-textarea-autosize"
import Icon from "@material-ui/core/Icon"
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import { connect } from "react-redux"
import { addList, addCard } from "../actions"

class AddButton extends Component {

  state = {
    formOpen: false
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleAddList = () => {
    const { dispatch } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text:""
      })
      dispatch(addList(text))
    }
    return
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text:""
      })
      dispatch(addCard(listID, text))
    }
    return

  }

  renderAddButton = () => {
    const { list } = this.props
    const buttonText = list ? "add list" : "add card"
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? "white" : "inherit"
    const buttonTextBackground = list ? "rgba(0,0,0,.2)" : "inherit"

    return (
      <div
        onClick={this.openForm}
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

  renderForm = () => {
    const { list } = this.props
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
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
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
          onMouseDown={ list ? this.handleAddList : this.handleAddCard}
          variant="contained"
          style={{ color: "white", backgroundColor: "#C7B097" }}
        >
          {buttonTitle}
        </Button>
        <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
      </div>
    </div>
  }

  render() {
    return this.state.formOpen === true ? this.renderForm() : this.renderAddButton()

  }
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
