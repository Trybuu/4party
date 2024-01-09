import classes from './Input.module.scss'

export default function Input({ children }) {
  return <div className={`${classes[`input-wrapper`]}`}>{children}</div>
}
