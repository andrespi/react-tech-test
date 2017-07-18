import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import CheckBox from './CheckBox';

describe('CkeckBox', () => {

    function setup() {
        const props = {
            name: "isPrivate", label: "some",
            onSave: () => {},
            onChange: () => {}
        };

        return shallow(<CheckBox {...props} />);
    }

    it('render the props', () => {
        const wrapper = setup();
        expect(wrapper.find('label').text()).toBe('some');
    })
});
