import React from 'react';
import PhotoComponent from './PhotoComponent.jsx';

class NavBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: ''
        }
    }

    onFavorite() {
        this.setState({
            favorite: this.state.favorite === '' ? 1 : parseInt(this.state.favorite) + 1
        });
    }

    deFavorite() {
        this.setState({
            favorite: this.state.favorite === 1 ? '' : parseInt(this.state.favorite) -1
        });
    }

    render() {
        return (
            <div>
                <header className='fixed-nav-bar'>
                    <ul className='list'>
                        <li className='item'>
                            Favorite counter:&nbsp;
                        </li>
                        <li className='item'>
                            {this.state.favorite}
                        </li>
                    </ul>
                </header>
                <PhotoComponent onFavorite={this.onFavorite.bind(this)} deFavorite={this.deFavorite.bind(this)}/>
            </div>
        );
    }
}

export default NavBarComponent;