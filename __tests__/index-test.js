import React from 'react';
import renderer from 'react-test-renderer';
import NavBarComponent from '../src/client/app/NavBarComponent.jsx';

describe('App test', () => {
    it('App renders correctly', () => {
        const tree = renderer.create(
            <div className='app'>
                <NavBarComponent />
            </div>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});