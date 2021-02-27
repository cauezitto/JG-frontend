import { IoIosArrowDown } from 'react-icons/io'
import * as S from './styles'
import { useState, useEffect } from 'react'
type Props = {
  children?: React.ReactNode
  text?: string
}

const Options = (props: Props) => {
  const [className, setClassName] = useState('hidden')

  const changeClass = () => {
    if (className === 'hidden') {
      setClassName('visible')
      return
    }

    setClassName('hidden')
  }
  return (
    <S.Wrapper
      id="selector-wrapper"
      onClick={changeClass}
      style={{
        borderRadius: className === 'hidden' ? '50px' : '25px 26px 0 0'
      }}
    >
      {props.text && (
        <>{props.text === '' ? 'Motivo do chamado' : props.text}</>
      )}{' '}
      <IoIosArrowDown />
      <div className={className}>{props.children}</div>
    </S.Wrapper>
  )
}

export default Options
