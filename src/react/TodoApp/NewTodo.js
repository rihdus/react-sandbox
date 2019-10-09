import styled, {css} from 'styled-components';
import React, {Component} from "react";

class NewTodo extends Component {
  render() {
    return <NewTodoInput edit placeholder={"What needs to be done?"} />
  }
}

export const NewTodoInput = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  width: 100%;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  
  ${p => p.edit && css`
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `};
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    opacity: 0.3;
    font-style: italic;
  }
`;

export default NewTodo
