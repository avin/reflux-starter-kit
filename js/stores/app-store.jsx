import Reflux from 'reflux';
import AppActions from '../actions/app-actions';

let AppStore = Reflux.createStore({
    listenables: [AppActions],
    onTestAction(){
        this.data.foo = 'mio';
        this.updateData();
    },
    updateData: function () {
        this.trigger(this.data); // sends the updated list to all listening components
    },
    getInitialState: function () {
        this.data = {
            foo: 'bar'
        };
        return this.data;
    }
});

export default AppStore;