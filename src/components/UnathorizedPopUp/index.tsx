import * as S from './styles'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

export type Props = {
  show?: boolean
  onClose?: VoidFunction
  onRedirect?: VoidFunction
}

const UnathorizedPopUp = (props: Props) => (
  <S.Wrapper {...props}>
    <S.SubWrapper>
      <Heading
        color="brown"
        font="ubuntu"
        fontWeight="semiBold"
        fontSize="xxxlarge"
        lineBottom={false}
        role="h3"
      >
        Ops você não está logado :c
      </Heading>
      <Paragraph
        fontSize="large"
        font="ubuntu"
        textAlign="center"
        margin="30px 0"
      >
        Faça seu login ou cadastre-se para acessar
      </Paragraph>
      <div className="options">
        <Button onClick={props.onClose} fontSize="large" fill="gray300">
          Fechar
        </Button>

        <Button onClick={props.onRedirect} fontSize="large">
          Beleza!
        </Button>
      </div>
    </S.SubWrapper>
  </S.Wrapper>
)

export default UnathorizedPopUp
