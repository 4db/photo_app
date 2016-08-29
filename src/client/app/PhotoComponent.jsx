import React from 'react';
import BoxComponent from './BoxComponent.jsx';

class PhotoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            column1 : [],
            column2 : [],
            column3 : [],
            column4 : [],
            column5 : [],
            page  : 1,
            uploadStatus: true,
        }
    }

    componentDidMount() {
        var _self = this;
        _self.getPhotos();
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
                if (_self.state.uploadStatus === true) {
                    _self.getPhotos();
                }
            }
        });
    }

    getPhotos() {
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
            beforeSend: function() {
                this.setState({
                    uploadStatus  : false
                });
            }.bind(this),
            success: this.photosUpdate.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    /**
     * Update photo by column
     * @param data - array with 50 elements
     */
    photosUpdate(data) {
        data.photos.map(function(photo, i){
            if (i < 10) {
                this.state.column1.push(photo);
            }
            else if (i < 20) {
                this.state.column2.push(photo);
            }
            else if (i < 30) {
                this.state.column3.push(photo);
            }
            else if (i < 40) {
                this.state.column4.push(photo);
            }
            else {
                this.state.column5.push(photo);
            }
        }.bind(this));

        this.forceUpdate();
        this.setState({
            page         : this.state.page + 1,
            uploadStatus : true
        });
    }

    render() {
        return (
            <div className='masonry'>
                <div className='column' key='1'>
                    {this.state.column1.map(function (photo) {
                        return <BoxComponent photo={photo}/>
                    })}
                </div>
                <div className='column' key='2'>
                    {this.state.column2.map(function (photo) {
                        return <BoxComponent photo={photo}/>
                    })}
                </div>
                <div className='column' key='3'>
                    {this.state.column3.map(function (photo) {
                        return <BoxComponent photo={photo}/>
                    })}
                </div>
                <div className='column' key='4'>
                    {this.state.column4.map(function (photo) {
                        return <BoxComponent photo={photo}/>
                    })}
                </div>
                <div className='column' key='5'>
                    {this.state.column5.map(function (photo) {
                        return <BoxComponent photo={photo}/>
                    })}
                </div>
            </div>
        );
    }
}

export default PhotoComponent;