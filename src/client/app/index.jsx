import React from 'react';
import {render} from 'react-dom';
import NavBarComponent from './NavBarComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <NavBarComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));