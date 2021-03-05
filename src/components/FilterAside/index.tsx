import { useState, useEffect } from 'react'
import Button from 'components/Button'
import Checkbox from 'components/CheckBox'
import Heading from 'components/Heading'
import { ParsedUrlQueryInput } from 'querystring'
import xor from 'lodash.xor'
import * as S from './styles'
import { useRouter } from 'next/router'

type Field = {
  nome: string
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Values = ParsedUrlQueryInput

export type FilteredAsidProps = {
  categorias: Array<{
    nome: string
  }>
  marcas: Array<{
    nome: string
  }>
  mobileShow?: boolean
  onClose: VoidFunction
  onFilter: (values: Values) => void
  initialValues?: Values
  isLoading?: boolean
}

const FilterAside = ({
  categorias,
  marcas,
  mobileShow,
  onClose,
  onFilter,
  initialValues = {},
  isLoading
}: FilteredAsidProps) => {
  const [values, setValues] = useState(initialValues)
  const { query } = useRouter()
  // console.log(values)

  useEffect(() => {
    // console.log(values)
    onFilter(values)
    // this method comes from another template
    // that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  // useEffect(() => {
  //   if (query.nome_contains !== initial_query) {
  //     const { nome_contains } = query
  //     // console.log(values)
  //     setValues({ marca: [], categorias: [], nome_contains })
  //     setInitial_query(query.nome_contains)
  //     // console.log('mudou')
  //   }
  // }, [query])

  const handleCheckbox = (name: string, value: string) => {
    if (isLoading) {
      return
    }
    const currentList = (values[name] as []) || []
    setValues((s) =>
      query.nome_contains
        ? {
            ...s,
            [name]: xor(currentList, [value]),
            nome_contains: query.nome_contains
          }
        : { ...s, [name]: xor(currentList, [value]) }
    )
  }

  return (
    <S.Wrapper show={mobileShow}>
      <Heading role="h2" textAlign="left" fontSize="xxlarge" lineBottom={false}>
        Categorias
      </Heading>

      {categorias.map((categoria, index) => (
        <Checkbox
          key={index}
          labelColor="black"
          color="black"
          label={categoria.nome}
          type="checkbox"
          onCheck={() => handleCheckbox('categorias', categoria.nome)}
          isChecked={(values['categorias'] as string[])?.includes(
            categoria.nome
          )}
        />
      ))}
      <br />
      <hr />
      <br />
      <Heading role="h2" textAlign="left" fontSize="xxlarge" lineBottom={false}>
        Marcas
      </Heading>

      {marcas.map((marca, index) => (
        <Checkbox
          key={index}
          labelColor="black"
          color="black"
          label={marca.nome}
          onCheck={() => handleCheckbox('marca', marca.nome)}
          isChecked={(values['marca'] as string[])?.includes(marca.nome)}
        />
      ))}

      <S.Footer>
        {/* <Button fill="gray300" fontSize="large" radius={10} onClick={onClose}>
          Fechar
        </Button>
        &nbsp; */}
        <Button fill="red100" fontSize="large" radius={10} onClick={onClose}>
          Aplicar
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default FilterAside
