import classes from './Content.module.scss'

export default function Content({ children }) {
  return <main className={`${classes.content}`}>{children}</main>
}
