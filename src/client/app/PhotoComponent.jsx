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
      url: 'https://api.500px.com/v1/photos?rpp=50&feature=upcoming&image_size%5B%5D=1&image_size%5B%5D=2&image_size%5B%5D=32&image_size%5B%5D=31&image_size%5B%5D=33&image_size%5B%5D=34&image_size%5B%5D=35&image_size%5B%5D=36&image_size%5B%5D=2048&image_size%5B%5D=4&image_size%5B%5D=14&sort=&include_states=true&include_licensing=true&formats=jpeg%2Clytro&only=&page=1&rpp=50&sdk_key=b68e60cff4c929bedea36ca978830c5caca790c3',
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
    console.log(this.state.photos);
    return (
      <div>
          here
      </div>
    );
  }
}

export default PhotoComponent;