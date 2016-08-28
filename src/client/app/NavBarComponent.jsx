import React from 'react';
import PhotoComponent from './PhotoComponent.jsx';
import LazyLoad from 'react-lazyload';

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
                    <a href="#" className="favorite">Favorite <span></span></a>
                </header>
                <div>
                    {[, ...Array(15)].map((x, i) =>
                        <LazyLoad key={i} height={1000} offset={500} debounce={500}>
                            <PhotoComponent page={i + 1}/>
                        </LazyLoad>
                    )}
                </div>
            </div>
        );
    }
}

export default NavBarComponent;