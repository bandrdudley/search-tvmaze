import React from 'react';
//import { shallow } from 'enzyme';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowForm from './components/ShowForm';
Enzyme.configure({ adapter: new Adapter() });

describe(ShowForm , ()=> {
    let searchShowsHandler = jest.fn();
    let wrapper;

    beforeEach(() => {
        //wrapper = shallow(<ShowForm/>);
        wrapper = mount(<ShowForm onSearchShow={searchShowsHandler}/>);
    });

    it('renders', () => {
        expect(wrapper).not.toBeNull()
    });

    xit('It has an input field', () => {
        const input = wrapper.find('#title');
        expect(input.props().value).toBe('');
    });
});

