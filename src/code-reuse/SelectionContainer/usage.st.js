 import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectionContainer from '.';

function SelectionItem({ children, selected, onClick }) {
   return (
      <div
         onClick={onClick}
         style={{
            display: 'inline-block',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: selected
               ? 'grey' : 'lightGrey',
         }}>{children}</div>
   )
}

function usage() {

   const items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
   ]

   return (
      <div>
         <SelectionContainer>{
            ({ selectedKey, getItemProps }) => (
               items.map((item, index) => {
                  return <SelectionItem
                     {...getItemProps(index)}
                     selected={selectedKey === index}>{item}</SelectionItem>
               })
            )}</SelectionContainer>
      </div>
   )
}

storiesOf('SelectionContainer', module)
   .add('without props', usage);
