import React from 'react';

class PhotoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      photos : [],
      page   : props.page
    }
  }

  componentDidMount() {
      console.log('componentDidMount')
      $.ajax({
      url: 'https://api.500px.com/v1/photos',
      data: {
        rpp: 50,
        page: this.state.page,
        feature: 'upcoming',
        image_size: [4],
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
      <div className='masonry'>
          {[0,10,20,30,40].map((i) =>
              <div className='column' key={i}>
                  {_data.slice(i,i+9).map(function(photo){
                      return <div className='box' key={photo.id}>
                          <img src={photo.image_url[0]}/>
                          <span className="box-title">
                              {photo.name}
                          </span>
                          <span>
                              &nbsp;🝯 {photo.times_viewed}
                          </span>
                      </div>;
                  })}
              </div>
          )}
      </div>
    );
  }
}

export default PhotoComponent;