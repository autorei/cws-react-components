import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import style from './style.module.css'

const Link = 'a'

const Button = ({
    className,
    onClick,
    variant,
    color,
    size,
    children,
    type,
    to,
    disabled,
}) => {
    const buttonClasses = classNames(
        className,
        style.button,
        style[variant],
        style[color],
        style[size],
        { [style.disabled]: disabled }
    )

    if (type === 'link') {
        if (to.indexOf('http') !== -1 || to.indexOf('www') !== -1) {
            return (
                <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                >
                    {children}
                </a>
            )
        }

        return (
            <Link
                className={buttonClasses}
                onClick={onClick}
                to={to}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
    to: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf([
        'flat',
        'outline',
        'dashed',
        'clean',
        'block',
        'icon',
    ]),
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'quartenary',
    ]),
    size: PropTypes.oneOf(['micro', 'tiny', 'small', 'medium', 'large']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    className: null,
    onClick: null,
    variant: 'flat',
    color: 'primary',
    size: 'small',
    type: 'button',
    disabled: false,
}

export default Button
