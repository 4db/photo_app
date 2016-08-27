import React from 'react';

class PhotoComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      photos : []
    }
  }

  componentDidMount() {
      $.ajax({
      url: 'https://api.500px.com/v1/photos',
      data: {
        rpp: 20,
        feature: 'upcoming',
        image_size: [2048],
        sdk_key: 'b68e60cff4c929bedea36ca978830c5caca790c3'
      },
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({photos: data.photos});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    var _data = this.state.photos;
    return(
      <div className='column'>
          {_data.map(function(photo, i){
             return <div className='tile' key={photo.id}>
                      <img src={photo.image_url[0]}/>
                      {photo.name}
                    </div>; 
           })}
      </div>
    );
  }
}

export default PhotoComponent;