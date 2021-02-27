import * as S from './styles'

export type Props = {
  children: string | React.ReactNode
  fontWeight?: 'normal' | 'semiBold' | 'bold'
  color?:
    | 'black'
    | 'orange'
    | 'gray'
    | 'mediumGray'
    | 'darkGray'
    | 'cyan'
    | 'white'
  fontSize?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | 'extra'
    | 'max'
    | 'xmax'
    | 'xxmax'
  font?: 'manjari' | 'ubuntu' | 'ubuntuCondensed'
  justify?: 'flex-start' | 'center' | 'flex-end'
  textAlign?: 'right' | 'center' | 'right'
  margin?: string
}

const Paragraph = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Paragraph
