import classNames from "classnames";
import './Button.scss'

const Button = (props) => {
  const {
    className,
    label,
    mode,
    location,
    href,
    icon,
    iconName,
    iconPosition = 'after',
    onClick,
    ...rest
  } = props

  const title = label ? label : ''
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  const specificProps = isLink ? linkProps : undefined

  const iconComponent = typeof icon === 'string'
    ? <img src={icon} alt="" />
    : icon

  const iconClass = `button-icon-${iconName}`
  const labelClass = `button-label-${location}`
  return (
    <Component
      className={classNames(
        className,
        'button',
        `button-${mode}`,
        `button-${location}`
      )}
      title={title}
      aria-label={title}
      onClick={onClick}
      {...specificProps}
      {...rest}
    >
      {iconPosition === 'before' && (
        <div className={iconClass}>
          {iconComponent}
        </div>)
      }
      <p className={labelClass}>
        {title}
      </p>
      {iconPosition === 'after' && (
        <div className={iconClass}>
          {iconComponent}
        </div>)
      }
    </Component>
  )
}

export default Button