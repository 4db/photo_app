import React from 'react';
import {render} from 'react-dom';
import LazyLoad from 'react-lazyload';
import PhotoComponent from './PhotoComponent.jsx';
import NavBarComponent from './NavBarComponent.jsx';



class App extends React.Component {
    render() {
        return (
            <div className="app">
                <NavBarComponent />
                <PhotoComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));