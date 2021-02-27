import * as S from './styles'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

export type Props = {
  show?: boolean
  onClose?: VoidFunction
}

const PendingPermissionPopUp = (props: Props) => (
  <S.Wrapper {...props}>
    <S.SubWrapper>
      <Heading
        color="brown"
        font="ubuntu"
        fontWeight="semiBold"
        fontSize="xxxlarge"
        role="h3"
        lineBottom={false}
      >
        Aguardando autorização...
      </Heading>
      <Paragraph
        fontSize="large"
        font="ubuntu"
        textAlign="center"
        margin="30px 0"
      >
        Espere até seu(a) amigo(a) liberar o acesso para você
      </Paragraph>

      <Button onClick={props.onClose}>Beleza!</Button>
    </S.SubWrapper>
  </S.Wrapper>
)

export default PendingPermissionPopUp
