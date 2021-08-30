import "./Input.scss";

function Input(props) {
  const {
    type = 'text',
    className = '',
    icon = null,
    selectOnFocus,
    ...rest
  } = props

  return (
    <label className={`Input ${icon ? 'with-icon' : ''} ${className}`}>
      <input
        onClick={(e) => {
          if (selectOnFocus) {
            e.target.select()
          }
        }}
        className="form-control"
        type={type}
        {...rest}
        />
        {icon && <i className={`icon-${icon}`} />}
    </label>
  )
}

export { Input }