import {observable, autorun} from 'mobx';

class TodoStore {
    @observable todos = ['buy m', 'buy n'];
    @observable filter = '';

}

var store = window.store = new TodoStore();
export default TodoStore;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
});
