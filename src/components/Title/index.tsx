import classNames from 'classnames';
import style from './styles.module.scss'

function Title({children, alt}: {children: string, alt?: boolean}) {
  return (
    <h2 className={classNames(
      style.titulo,
      {[ style['titulo--alt']]: alt }
      )}>
      {children}
    </h2>
  )
}

export default Title;