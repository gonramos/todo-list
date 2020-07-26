import styled from "styled-components"
import Icon from "@material-ui/core/Icon";

export const ListHeaderWrapper = styled.div `
  width: 215px;
  word-wrap: break-word;
`

export const ListHeader = styled.h4 `
  font-family: Roboto, sans-serif;
  font-size: 22px;
  line-height: 28px;
  margin: 15px 0;
  font-weight: lighter;
`

export const ListContainerB = styled.div`
  background-color: #98AFC7;
  font-family: "Roboto, sans-serif";
  width: 240px;
  padding: 10px;
  margin-right: 10px;
  height: 100%;
`

export const ListContainerA = styled.div`
  display: flex;
  flex-direction: row;
`

export const AppHeader = styled.h1 `
  font-family: Roboto, sans-serif;
  font-size: 26px;
  font-weight: lighter;
  color: white;
`

export const DeleteButton = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const CardContainer = styled.div`
  margin-bottom: 6px; 
  word-wrap: break-word;
  position: relative;
  max-width: 100%;
`

export const DeleteButtonCard = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`