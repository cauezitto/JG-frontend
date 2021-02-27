import { Color } from 'types/style'
import * as S from './styles'

export type InputProps = {
  value?: string
  placeholder?: string
  onChange?: (value: any) => void
  borderColor?: Color
  fill?: Color
  width?: number
  height?: number
  borderWidth?: number
  font?: 'ubuntu' | 'roboto' | 'robotoCondensed'
  fontSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  textArea?: boolean
  type?: string
  className?: string
  readOnly?: boolean
  radius?: number
  required?: boolean
  maxLength?: number
  margin?: string
}

const Input = (props: InputProps) => {
  if (props.textArea) {
    return (
      <S.TextArea onChange={props.onChange} value={props.value} {...props} />
    )
  }
  return <S.Input onChange={props.onChange} value={props.value} {...props} />
}

export default Input
