import React from 'react';

class NavBarComponent extends React.Component {

    static onFavorite() {
        var count = $('.favorite>span').text();
        $('.favorite>span').text(count === '' ? 1 : parseInt(count) + 1);
    }

    static deFavorite() {
        var count = $('.favorite>span').text();
        $('.favorite>span').text(count === '1' ? '' : parseInt(count) - 1);
    }

    render() {
        return (
            <div>
                <header className="fixed-nav-bar">
                    <div className="favorite">Favorite counter: <span></span></div>
                </header>
            </div>
        );
    }
}

export default NavBarComponent;