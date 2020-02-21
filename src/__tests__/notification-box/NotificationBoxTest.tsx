import React from 'react';
import { shallow } from  'enzyme';
import NotificationBox from '../../components/NotificationBox/NotificationBox';
import { TMessage } from '../../types/types';

describe('notification test', ()=>{
    const mockProps : TMessage = {
        message: ''
    };
    const wrapper = shallow(<NotificationBox {...mockProps}/>);

    it('shallow render', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
});
