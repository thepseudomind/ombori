import React from 'react';
import { shallow, mount } from  'enzyme';
import Users from '../../components/Users/Users';
import { IMain } from '../../types/types';

describe('userlist tests', ()=>{
    it('rendering users', ()=>{
        const mockProps : IMain = {
            status: true
        }
        const wrapper = shallow(<Users {...mockProps}/>);
        expect(wrapper).toMatchSnapshot();
    });
});