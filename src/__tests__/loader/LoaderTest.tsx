import React from 'react';
import { shallow } from  'enzyme';
import Loader from '../../components/Loader/Loader';
import { TLoader } from '../../types/types';

it('loader test and check if loader', ()=>{
    const mockProps : TLoader = {
        mini: false
    };
    const wrapper = shallow(<Loader {...mockProps}/>);
    expect(wrapper.find(`div.loader`).html()).toEqual('<div class="loader"></div>');
    expect(wrapper).toMatchSnapshot();
});

it('check if loader is mini', ()=>{
    const mockProps : TLoader = {
        mini: true
    };
    const wrapper = shallow(<Loader {...mockProps}/>);
    expect(wrapper.find(`div.loader__mini`).html()).toEqual('<div class="loader__mini"></div>');
});
