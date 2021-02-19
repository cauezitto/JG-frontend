import Input from 'components/Input'
import Label from 'components/Label'
import Button from 'components/Button'
import * as S from './styles'
import { HorizontalPaddingWrapper } from 'styles/pages/home'

const ContactForm = () => (
  <HorizontalPaddingWrapper padding="large">
    <S.Wrapper>
      <Label fontWeight="semiBold">
        Nome: <Input fill="gray50" borderWidth={1} height={44} required />
      </Label>
      <br />
      <Label fontWeight="semiBold">
        Email: <Input fill="gray50" borderWidth={1} height={44} required />
      </Label>
      <br />
      <Label fontWeight="semiBold">
        Telefone: <Input fill="gray50" borderWidth={1} height={44} required />
      </Label>
      <br />
      <Label fontWeight="semiBold">
        N° do pedido: <Input fill="gray50" borderWidth={1} height={44} />
      </Label>
      <br />
      <Label fontWeight="semiBold">
        Mensagem: <Input fill="gray50" borderWidth={1} height={44} />
      </Label>
      <br />
      <Button fill="red100" radius={5} fontSize="large">
        Enviar
      </Button>
    </S.Wrapper>
  </HorizontalPaddingWrapper>
)

export default ContactForm
