import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MaterialIcon from '../index';

const loadIconAndValidateBasic = (props) => {
    const wrapper = shallow(<MaterialIcon {...props} />);
    expect(wrapper.find('.material-icons')).to.have.length(1);
    return wrapper;
}

const loadAndValidateWithIcon = (props) => {
    const wrapper = loadIconAndValidateBasic(props);
    expect(wrapper.find('.material-icons').text()).to.equal('face');
    return wrapper;
}

describe('MaterialIcon renders without any props', () => {
    it('to have an `i`', () => {
        loadIconAndValidateBasic();
    });
});

describe('MaterialIcon renders with icon prop', () => {
    it('to have an `i` with class md-24 by default', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face' });
        expect(wrapper.find('.material-icons').hasClass('md-24')).to.equal(true);
    });

    it('to have an `i`  with size prop overridden to medium', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face', size: 'medium' });
        expect(wrapper.find('.material-icons').hasClass('md-36')).to.equal(true);
    });
});

describe('MaterialIcon renders', () => {
    it('to have an `i` with dark color by default', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face' });
        expect(wrapper.find('.material-icons').hasClass('md-dark')).to.equal(true);
    });

    it('to have an `i`  with light color when inverted', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face', invert: true });
        expect(wrapper.find('.material-icons').hasClass('md-light')).to.equal(true);
    });
});

describe('MaterialIcon renders', () => {
    it('to have an `i` with active state by default', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face' });
        expect(wrapper.find('.material-icons').hasClass('md-inactive')).to.equal(false);
    });

    it('to have an `i`  with `md-inactive` when inactive', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face', inactive: true });
        expect(wrapper.find('.material-icons').hasClass('md-inactive')).to.equal(true);
    });

    it('to have an `i` with active state by default when inverted', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face', invert: true });
        expect(wrapper.find('.material-icons').hasClass('md-light')).to.equal(true);
        expect(wrapper.find('.material-icons').hasClass('md-inactive')).to.equal(false);
    });

    it('to have an `i`  with `md-inactive` and `md-light` when inactive and inverted', () => {
        const wrapper = loadAndValidateWithIcon({ icon: 'face', invert: true, inactive: true });
        expect(wrapper.find('.material-icons').hasClass('md-light')).to.equal(true);
        expect(wrapper.find('.material-icons').hasClass('md-inactive')).to.equal(true);
    });
});