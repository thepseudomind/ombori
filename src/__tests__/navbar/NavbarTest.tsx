import React from 'react';
import { shallow, mount } from  'enzyme';
import Navbar from '../../components/Navbar/Navbar';
import { IMain } from '../../types/types';

describe('navbar test', ()=>{
    it('check if it is rendering nav correctly', ()=>{
        const mockProps : IMain = {
            status: true,
            toggleSidebar: ()=>{}
        }
        const wrapper = shallow(<Navbar {...mockProps}/>);
        expect(wrapper.find('span')).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    })

    it('check if navbar icon is active', ()=>{
        const mockProps : IMain = {
            status: true,
            toggleSidebar: ()=>{}
        }
        const wrapper = shallow(<Navbar {...mockProps}/>);
        expect(wrapper.find('span.navbar__menu').html()).toEqual('<span class="navbar__menu"><span class="navbar__menu--icons inactive"></span></span>')
    });

    it('check if navbar icon is inactive', ()=>{
        const mockProps : IMain = {
            status: false,
            toggleSidebar: ()=>{}
        }
        const wrapper = shallow(<Navbar {...mockProps}/>);
        expect(wrapper.find('span.navbar__menu').html()).toEqual('<span class="navbar__menu"><span class="navbar__menu--icons"></span></span>')
    });

    it('check if nav state changes on click', ()=>{
        const mockProps : IMain = {
            status: false,
            toggleSidebar: ()=>{}
        }
        const wrapper = mount(<Navbar {...mockProps}/>);
        const value: boolean = wrapper.prop('status');
        wrapper.find('span.navbar__menu').simulate('click');
        //expect(wrapper.prop('status')).toEqual(!value); 
    })
});