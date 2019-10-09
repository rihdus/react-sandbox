import React, {Component} from "react";
import NewTodo from "./NewTodo";
import {
  AppContainer, 
  GlobalStyle, 
  Header, 
  Title, 
  TodoAppView
} from "./index.styles";

export default class TodoApp extends Component {
  render() {
    return <>
      <GlobalStyle/>
      <AppContainer>
        <TodoAppView>
          <Header>
            <Title>todo</Title>
            <NewTodo/>
          </Header>
  
        </TodoAppView>
      </AppContainer>
    </>
  }
}
