import React from 'react';
import {render} from 'react-dom';
import PhotoComponent from './PhotoComponent.jsx';
import LazyLoad from 'react-lazyload';

class App extends React.Component {
  render () {
    return (
      <div>
        {[,...Array(15)].map((x, i) =>
            <LazyLoad key={i} height={1000} offset={500}>
              <PhotoComponent page={1} />
            </LazyLoad>
        )}
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));