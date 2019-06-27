import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

@observer
class TodoList extends Component {

    constructor(props) {
        super(props);


    }

    filter(e) {
        this.props.store.filter = e.target.value
    }

    createNew(e) {
        if(e.which === 13) {
            this.props.store.createTodos(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        const { filter, filterTodos } = this.props.store;
        const todoList = filterTodos.map((item, key) => {
            return <li key={key}>{item.value}</li>
        })
        console.log(32442)
        return <div>
            <h1>d1232os</h1>
            <input onKeyPress={this.createNew.bind(this)} />
            <input className={'filter'} value={filter} onChange={this.filter.bind(this)}/>
            <ul>{todoList}</ul>
        </div>
    }
}

export default TodoList;
