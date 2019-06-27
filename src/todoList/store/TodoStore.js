import {observable, autorun} from 'mobx';

class TodoStore {
    @observable todos = ['buy m', 'buy n'];
    @observable filter = '';
}

let store = window.store = new TodoStore();
export default store;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
});
