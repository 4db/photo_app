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
                <div>
                    {[, ...Array(15)].map((x, i) =>
                        <LazyLoad key={i} height={1000} offset={500}>
                            <PhotoComponent page={i + 1}/>
                        </LazyLoad>
                    )}
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));