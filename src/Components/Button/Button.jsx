import React from 'react';
import './Button.scss';

const Button = ({ name, children, color, href = '#contact', variant = 'primary', className = '', style, ...rest }) => {
    const classes = `ui-btn ui-btn--${color ? 'custom' : variant}${className ? ` ${className}` : ''}`;
    const inlineStyle = color ? { background: color, ...style } : style;
    const label = children ?? name;

    if (href === null) {
        return (
            <button type="button" className={classes} style={inlineStyle} {...rest}>
                {label}
            </button>
        );
    }

    return (
        <a href={href} className={classes} style={inlineStyle} {...rest}>
            {label}
        </a>
    );
};

export default Button;