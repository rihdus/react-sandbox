import React from 'react';
import {storiesOf} from '@storybook/react';
import TodoApp from "./index";

class Usage extends React.Component {
  render() {
    return (<TodoApp/>);
  }
}

storiesOf('Todo', module)
  .add('App', () => <Usage/>);
