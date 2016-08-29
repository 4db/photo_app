import React from 'react';
import NavBarComponent from './NavBarComponent.jsx';

class BoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.photo.id,
            url: this.props.photo.image_url[0],
            name: this.props.photo.name,
            times_viewed: this.props.photo.times_viewed,
            backgroundColor: 'white'
        }
    }

    favorite() {
        if (this.state.backgroundColor == 'white') {
            this.setState({backgroundColor: '#ECD6BE'});
            this.props.onFavorite();
        }
        else {
            this.setState({backgroundColor: 'white'});
            this.props.deFavorite();
        }
    }

    render() {
        var divStyle = {
            backgroundColor: this.state.backgroundColor
        };
        return (
            <div className='box' key={this.state.id} onClick={this.favorite.bind(this)} style={divStyle}>
                <img src={this.state.url}/>
                <span className="box-title">{this.state.name}</span>
                <span>&nbsp;🝯 {this.state.times_viewed}</span>
            </div>
        );
    }
}

export default BoxComponent;