import React from 'react';

class BoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id          : this.props.photo.id,
            url         : this.props.photo.image_url[0],
            name        : this.props.photo.name,
            times_viewed: this.props.photo.times_viewed,
            styleClass  : 'box'
        }
    }

    favorite() {
        if (this.state.styleClass == 'box') {
            this.setState({
                styleClass: 'box box-favorite',
            });
            this.props.onFavorite();
        }
        else {
            this.setState({
                styleClass: 'box',
            });
            this.props.deFavorite();
        }
    }

    render() {
        return (
            <div className={this.state.styleClass} key={this.state.id} onClick={this.favorite.bind(this)}>
                <img src={this.state.url}/>
                <span className='box-title'>{this.state.name}</span>
                <span>&nbsp;🝯 {this.state.times_viewed}</span>
            </div>
        );
    }
}

export default BoxComponent;