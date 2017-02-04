import React from 'react';
import BoxComponent from './BoxComponent.jsx';

class PhotoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            column1     : [],
            column2     : [],
            column3     : [],
            column4     : [],
            column5     : [],
            page        : 1,
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
                only:'Animals',
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
        var arr = this.state.column1;
        data.photos.map(function(photo, i){
            switch (i) {
                case 10:
                    arr = this.state.column2;
                    break;
                case 20:
                    arr = this.state.column3;
                    break;
                case 30:
                    arr = this.state.column4;
                    break;
                case 40:
                    arr = this.state.column5;
                    break;
            }
            arr.push(photo);
        }.bind(this));

        this.forceUpdate();
        this.setState({
            page         : this.state.page + 1,
            uploadStatus : true
        });
    }

    render() {
        return (
            <div className='masonry' key='masonry'>
                <div className='column' key='column-1'>
                    {this.state.column1.map(function (photo) {
                        return <BoxComponent photo={photo} onFavorite={this.props.onFavorite} deFavorite={this.props.deFavorite}/>
                    }.bind(this))}
                </div>
                <div className='column' key='column-2'>
                    {this.state.column2.map(function (photo) {
                        return <BoxComponent photo={photo} onFavorite={this.props.onFavorite} deFavorite={this.props.deFavorite}/>
                    }.bind(this))}
                </div>
                <div className='column' key='column-3'>
                    {this.state.column3.map(function (photo) {
                        return <BoxComponent photo={photo} onFavorite={this.props.onFavorite} deFavorite={this.props.deFavorite}/>
                    }.bind(this))}
                </div>
                <div className='column' key='column-4'>
                    {this.state.column4.map(function (photo) {
                        return <BoxComponent photo={photo} onFavorite={this.props.onFavorite} deFavorite={this.props.deFavorite}/>
                    }.bind(this))}
                </div>
                <div className='column' key='column-5'>
                    {this.state.column5.map(function (photo) {
                        return <BoxComponent photo={photo} onFavorite={this.props.onFavorite} deFavorite={this.props.deFavorite}/>
                    }.bind(this))}
                </div>
            </div>
        );
    }
}

export default PhotoComponent;