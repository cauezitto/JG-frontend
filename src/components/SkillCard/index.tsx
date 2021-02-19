import Heading from 'components/Heading'
import * as S from './styles'

export type SkillCardProps = {
  image: string
  icon: string
  title: string
  text: string
}

const SkillCard = (props: SkillCardProps) => (
  <S.Wrapper>
    <img src={props.image} height={130} />
    <img src={props.icon} className="icon" />
    <Heading lineBottom={false} role="h2" margin="50px 0 10px 0">
      {props.title}
    </Heading>

    <p>{props.text}</p>
  </S.Wrapper>
)

export default SkillCard
