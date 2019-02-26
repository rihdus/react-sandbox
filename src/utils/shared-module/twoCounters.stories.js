import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { getValue, setValue } from './index';

class Counter extends Component {

   state = {
      count: 0
   }

   onButtonClick = () => {
      this.setState({ count: this.state.count + 1 })
   }

   saveCounter = () => setValue('count', this.state.count)

   render() {
      return (<Fragment>
         <button onClick={this.onButtonClick}>Clicks - <span>{this.state.count}</span></button>
         <div>
            <button onClick={this.saveCounter}>Save to Store</button>
         </div>
      </Fragment>
      );
   }
}

class SharedCounterView extends Component {
   state = {
      value: null
   }

   getValueFromSharedStore = () => {
      const value = getValue('count')
      this.setState({ value });
   }

   render() {
      return <button
         onClick={this.getValueFromSharedStore}
      >Read value from store (<span>{this.state.value})</span></button>
   }
}

storiesOf('Shared Module', module)
   .add('Two counters', () => {
      return (<Fragment>
         <p>Two counters maintain their counts and save the value <br/>
            in the shared store.</p>
         <SharedCounterView />
         <hr/>
         <table>
            <tbody>
               <tr>
                  <td><Counter /></td>
                  <td><Counter /></td>
               </tr>
            </tbody>
         </table>
      </Fragment>)
   });