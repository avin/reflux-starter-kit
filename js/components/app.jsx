import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/app-store';


let APP = React.createClass({
    mixins: [Reflux.connect(AppStore, "data")],
    render(){
        return (
            <div></div>
        )
    }
});

export default APP;