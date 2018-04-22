import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { sizes, light, dark, mdInactive } from './config/mappings';

const MaterialIcon = ({ icon, size, invert, inactive, color, style }) => {
    const sizeMapped = sizes[size] || parseInt(size) || sizes['small'];
    const defaultColor = (invert && 'invert') ? light : dark;
    const inactiveColor = (inactive && 'inactive') ? mdInactive : '';
    const propStyle = style || {};
    const styleOverride = Object.assign(propStyle, {color: color ? color : '', fontSize: sizeMapped});
    
    return (
        <i className={`material-icons ${sizeMapped} ${defaultColor} ${inactiveColor}`} style={styleOverride} >{icon}</i>
    )
}

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.any,
  invert: PropTypes.boolean,
  inactive: PropTypes.boolean
};

export default MaterialIcon;
export * from './palette';
