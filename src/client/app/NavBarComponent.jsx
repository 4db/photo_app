import React from 'react';

class NavBarComponent extends React.Component {

    static onFavorite() {
        var count = $('#favorite').text();
        $('#favorite').text(count === '' ? 1 : parseInt(count) + 1);
    }

    static deFavorite() {
        var count = $('#favorite').text();
        $('#favorite').text(count === '1' ? '' : parseInt(count) - 1);
    }

    render() {
        return (
            <div>
                <header className="fixed-nav-bar">
                    <ul className="list">
                        <li className="item">
                            Favorite counter:&nbsp;
                        </li>
                        <li className="item" id="favorite" >
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default NavBarComponent;