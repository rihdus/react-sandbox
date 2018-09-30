import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Renderer } from 'react-json-renderer'

const components = {
   Text: ({children}) => <span className='text'>{children}</span>,
   View: ({children}) => <div className='view'>{children}</div>,
}

const jsonComponentTree = {
   type: 'View',
   props: {
      children: [
         {
            type: 'Text',
            props: {
               key: 'text',
               value: 'hello',
               children: ['Text children...'],
            },
         },
         {
            type: 'Input',
            props: {
               key: 'input-1',
               id: 'input-1',
               name: 'input1',
               label: 'Sample Input 1',
               value: '112'
            },
         },
         {
            type: 'Input',
            props: {
               key: 'input-2',
               id: 'input-2',
               name: 'input2',
               label: 'Sample Input 2',
               value: '112'
            },
         }


      ],
   },
}

export default class TreeContainer extends Component {
   render() {
      return <Form/>
   }
}

const formFieldComponents = {
   Input: connect(
      (state, ownProps) => {
         return {
            state: {
               value: state.formFields[ownProps.name].value
            }
         }
      },
      (dispatch) => ({
         getInputProps: () => {
            return {
               onChange: (e, name) => {
                  dispatch({
                     type: "INPUT_CHANGE",
                     value: e.target.value,
                     name
                  })
               }
            }
         }
      }))(
      (props) => {
         const {onChange} = props.getInputProps()
         const {value} = props.state
         return <label htmlFor={props.id}>
            {props.label && <div>{props.label}</div>}
            <input
               key={props.key}
               id={props.id}
               name={props.name}
               value={value || ''}
               onChange={(e) => onChange(e, props.name)}
               type="text"/>
         </label>
      })
}

const Form = connect(
   state => state,
   (dispatch => {
      return {
         onSubmit: (e, {
            formFields
         }) => {
            e.preventDefault()
            console.log(formFields)
            dispatch({
               type: 'SUBMIT'
            })
         }
      }
   })
)((props) => {
   return <div>
      <form onSubmit={(e) => props.onSubmit(e, props)}>
         <Renderer components={{
            ...components,
            ...formFieldComponents
         }} json={JSON.stringify(jsonComponentTree)}/>
         <button type="submit">Save</button>
      </form>
   </div>
})

