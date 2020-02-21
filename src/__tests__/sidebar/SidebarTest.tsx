import React from 'react';
import { shallow } from  'enzyme';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IMain } from '../../types/types';

it('there is button to click', ()=>{
    const mockProps : IMain = {
        status: true,
        toggleSidebar: ()=>{}
    };
    const wrapper = shallow(<Sidebar {...mockProps}/>);
    wrapper.find('.sidebar__close').simulate('click');
    expect(wrapper).toMatchSnapshot();
});

it('check is sidebar is active', ()=>{
    const mockProps : IMain = {
        status: true,
        toggleSidebar: ()=>{}
    };
    const wrapper = shallow(<Sidebar {...mockProps}/>);
    expect(wrapper.find('.sidebar').html()).toMatchSnapshot();
});

it('check is sidebar is inactive', ()=>{
    const mockProps : IMain = {
        status: false,
        toggleSidebar: ()=>{}
    };
    const wrapper = shallow(<Sidebar {...mockProps}/>);    
    expect(wrapper.find('.sidebar').html()).toMatchSnapshot();
});

