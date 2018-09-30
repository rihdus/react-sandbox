import React from 'react';
import { storiesOf } from '@storybook/react';
import TreeContainer from '.';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore((state = {
   formFields: {
      'input1': {
         value: null
      },
      'input2': {
         value: null
      }
   }
}, action) => {
   const {type, ...payload} = action;
   switch (type) {
      case 'SUBMIT':
         return {...state}
      case 'INPUT_CHANGE':
         return {
            ...state,
            formFields: {
               ...state.formFields,
               [payload.name]: {
                  ...state.formFields[payload.name],
                  value: payload.value
               }
            }
         }
      default:
         return state;
   }
})

storiesOf('Tree', module)
   .add('Sample', () => {
      return <Provider store={store}>
         <TreeContainer/>
      </Provider>
   });
