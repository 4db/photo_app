import React from 'react';
import {render} from 'react-dom';
import NavBarComponent from './NavBarComponent.jsx';
import PhotoComponent from './PhotoComponent.jsx';
import LazyLoad from 'react-lazyload';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <NavBarComponent />
        <div>
          {[,...Array(15)].map((x, i) =>
              <LazyLoad key={i} height={1000} offset={500} debounce={500}>
                <PhotoComponent page={i+1} />
              </LazyLoad>
          )}
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));