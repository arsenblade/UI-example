import {FC, useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './CheckBox.module.scss'
import cn from 'classnames'

const CheckBox:FC<{id: string, text?: string}> = ({id, text}) => {

  return (
    <div className={styles.checkBoxContainer}>
      <input className={styles.checkbox}  type='checkbox' id={id} />
      <label className={styles.label} htmlFor={id}>dvdvd</label>
    </div>
  )
}

export default CheckBox