import React from 'react';
import { shallow } from  'enzyme';
import Main from '../../components/Main/Main';
import { IMain } from '../../types/types';

// Test if Mainpage renders
describe('Mainpage test', ()=>{
    it('check if main page is active', ()=>{
        const mockProps : IMain = {
            status : true
        };
    
        const wrapper = shallow(<Main {...mockProps}/>);
        expect(wrapper.find('.main').html()).toMatchSnapshot();
    });

    it('check if main page is inactive', ()=>{
        const mockProps : IMain = {
            status : false
        };
    
        const wrapper = shallow(<Main {...mockProps}/>);
        expect(wrapper.find('.main').html()).toMatchSnapshot();
    });
});
