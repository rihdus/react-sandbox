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

class GeneratorFunTestStory extends Component {
    state = {
        arr: []
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
        this.runPoll()
    }

    render = () => <div>
        <p>Generator function yields new values in an array every second.</p>
        <pre>{this.state.arr.join(' ')}</pre>
    </div>
}

storiesOf('Generator Function', module)
    .add('test', () => <GeneratorFunTestStory />);


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}