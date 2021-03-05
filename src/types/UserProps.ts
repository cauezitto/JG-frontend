type UserProps = {
  id?: number
  username: string
  email: string
  phone: string
  endereco: string
  photo?: string
  rua?: string
  bairro?: string
  cidade?: string
  estado?: string
  numero?: string
  favorites?: number[]
}

export default UserProps
