import React from 'react';
import { shallow } from  'enzyme';
import Home from '../../pages/home/home';

// Test if homepage renders
describe('homepage test', ()=>{
    const wrapper = shallow(<Home/>)

    it('render homepage', ()=>{
        expect(wrapper.length).toEqual(1)
    })

    it('shallow render', ()=>{
        expect(wrapper).toMatchSnapshot()
    })

})
