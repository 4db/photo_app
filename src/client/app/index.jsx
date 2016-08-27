import React from 'react';
import {render} from 'react-dom';
import PhotoComponent from './PhotoComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div className='masonry'>
        <PhotoComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));