import * as S from './styles'

export type BannerProps = {
  title?: string
  description?: string
  img: string
}

const Banner = ({ title, description, img }: BannerProps) => (
  <S.Wrapper bg={img}>
    {title && <S.Heading>{title}</S.Heading>}
    {description && <S.Paragraph>{description}</S.Paragraph>}
  </S.Wrapper>
)

export default Banner
