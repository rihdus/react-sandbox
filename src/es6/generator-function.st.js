import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

function* makeArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i + 1);
        yield delay(1000).then(() => arr);
    }
    return;
}

function forEachYeild(itr, fn) {
    let res = itr.next()
    return new Promise(async (resolve) => {
        while(true) {
            if(res.done) {
                break;
            } else {
                fn(await res.value)
            }
            res = itr.next()
        }
        resolve(res);
    })
}

class GeneratorFunTestStory extends Component {
    state = {
        arr: [],
        done: false
    }

    runPoll(itr) {
        if (!itr) {
            itr = makeArray(10);
        }

        const res = itr.next();
        if (!res.done) {
            res.value.then((arr) => {
                this.setState({ arr: arr || [] })
                this.runPoll(itr);
            });
        }
    }

    componentDidMount() {
        forEachYeild(makeArray(10), (value) => {
            this.setState({
                arr: value || []
            })
        }).then(() => {
            this.setState({
                done: true
            })
        })
    }

    render = () => <div>
        <p>Generator function yields new values in an array every second.</p>
        <pre>{this.state.arr.join(' ')}</pre>
        {this.state.done && <p>Done!!!</p>}
    </div>
}

storiesOf('Generator Function', module)
    .add('test', () => <GeneratorFunTestStory />);


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}