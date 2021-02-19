import Heading from 'components/Heading'
import PaddingWrapper from 'components/PaddingWrapper'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import { Color } from 'types/style'
import * as S from './styles'

export type VirtueCardProps = {
  fill: Color | 'green100'
  title: string
  text: string
  color: Color
}

const VirtueCard = ({
  color = 'white100',
  fill,
  text,
  title
}: VirtueCardProps) => (
  <S.Wrapper color={color} fill={fill}>
    <HorizontalPaddingWrapper padding="small">
      <Heading lineBottom={false} role="h3" color={color}>
        {title}
      </Heading>
    </HorizontalPaddingWrapper>

    <hr />

    <PaddingWrapper>
      <HorizontalPaddingWrapper padding="small">
        <p>{text}</p>
      </HorizontalPaddingWrapper>
    </PaddingWrapper>
  </S.Wrapper>
)

export default VirtueCard
