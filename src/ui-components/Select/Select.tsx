import {FC, useState} from 'react'
import { IOption, ISelect } from './Select.interface'
import styles from './Select.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'


const Select:FC<ISelect> = ({options, value, onChange, customClassName, isOpen, placeholder}) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)
  const textSelect = value ? value.label : (placeholder ? placeholder : '')

  const handleClickOption = (option: IOption) => {
    onChange(option)
    setIsVisibleDropdown(false)
  }

  return (
    <div className={cn(styles.selectContainer, {
      [`${customClassName}__select-container`]: customClassName
    })}
    >
      <div className={cn(styles.select, {
        [`${customClassName}`]: customClassName
      })}
      onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(styles.inputSelect, {
          [`${customClassName}__input-select`]: customClassName
        })}
        onClick={() => setIsVisibleDropdown((backValue) => !backValue)}
        >
          <div className={cn(styles.placeholder , {
            [`${customClassName}__placeholder`]: customClassName
          })}>
            {textSelect}
            <svg className={cn(styles.arrowSvg , 
              {
                [`${customClassName}__arrow-svg`]: customClassName,
                [styles.arrowSvgOpen]: isVisibleDropdown,
              }
            )} xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29"><path   d="m20.5 11.5-6 6-6-6"/></svg>
          </div>
        </div>
        <div className={cn(styles.dropdown , {
            [styles.open]: isOpen || (isVisibleDropdown && isOpen !== false),
            [`${customClassName}__dropdown`]: customClassName
          })}>
              {options.length <= 0 ? 
                <CSSTransition
                in={isVisibleDropdown}
                classNames={styles.dropdownListAnimation}
                timeout={500}
                mountOnEnter
                unmountOnExit
                >
                  <div className={cn(styles.dropdownList , {
                    [`${customClassName}__dropdown-list`]: customClassName
                  })}>
                    No options
                  </div>
                </CSSTransition>
              : 
                <CSSTransition
                in={isVisibleDropdown}
                classNames={'dropdownListAnimation'}
                timeout={500}
                mountOnEnter
                unmountOnExit
                >
                  <div className={cn(styles.dropdownList , {
                    [`${customClassName}__dropdown-list`]: customClassName
                  })}>
                  {options.map(option => 
                    <div 
                      key={option.value} 
                      className={cn(styles.dropdownItem , {
                        [`${customClassName}__dropdown-item`]: customClassName,
                        [styles.noActive]: value?.value !== option.value,
                        [styles.active]: value?.value === option.value
                      })}
                      onClick={() => handleClickOption(option)}
                    >
                      {option.label}
                    </div>)}
                  </div>
                </CSSTransition>}
        </div>
      </div>
      {isVisibleDropdown && <div className={styles.closeBackground} onClick={() => setIsVisibleDropdown(false)}></div>}
    </div>
  )
}

export default Select