import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './style.module.css'

const Button = ({ className, variant, color, size, disabled, children, Element, ...rest }) => {
  const buttonClasses = classNames(
    className,
    style.button,
    style[variant],
    style[color],
    style[size],
    { [style.disabled]: disabled }
  )

  return (
    <Element className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </Element>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  Element: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['flat', 'outline', 'dashed', 'clean', 'icon']),
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral', 'error', 'alert', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
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
  size: 'md',
  disabled: false,
  Element: 'button',
}

export default Button
