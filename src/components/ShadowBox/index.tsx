import * as S from './styles'
export type Props = {
  paddingX?: 'xsmall' | 'small' | 'medium'
  paddingY?: 'xsmall' | 'small' | 'medium'
  textAlign?: 'left' | 'center' | 'right'
  radius?: 'small' | 'medium' | 'large' | 'rounded'
  children?: React.ReactNode
  height?: number
  width?: number
  className?: string
}

const ShadowBox = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default ShadowBox
