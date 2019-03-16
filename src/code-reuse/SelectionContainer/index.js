import { Component } from 'react'

export default class SelectionContainer extends Component {
   state = {
      selectedKey: null
   }

   onItemClick = (key) => {
      this.setState({ selectedKey: key })
   }

   getItemProps = (key) => {
      return {
         key,
         onClick: () => this.onItemClick(key)
      }
   }

   render() {
      const { children } = this.props;
      const { selectedKey } = this.state
      return children({
         selectedKey,
         getItemProps: this.getItemProps
      })
   }

}