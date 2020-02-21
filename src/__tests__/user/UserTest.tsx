import React from 'react';
import { shallow } from  'enzyme';
import User from '../../components/User/User';
import { IProduct } from '../../types/types';

describe('user test', ()=>{
    const mockProps : IProduct = {
        id: 1,
        email: 'email@email.com',
        first_name: 'Name',
        last_name: 'Other name',
        avatar: 'link'
    }

    const wrapper = shallow(<User {...mockProps}/>)

    it('render user', ()=>{
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });
})
