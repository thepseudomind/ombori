import React from 'react';
import { shallow, render } from  'enzyme';
import Home from '../../pages/home/home';

// Test if homepage renders
describe('homepage test', ()=>{
    it('render page', ()=>{
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
    });
});
