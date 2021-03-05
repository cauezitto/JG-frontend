import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings.small} 0;
    /* justify-content: space-between; */
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.gray300};
    border-radius: 0.2rem;
    transition: background border 250ms;
    position: relative;
    outline: none;
    margin-right: ${theme.spacings.small};
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white100};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 250ms;
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.brown};
    }
    &:hover {
      border-color: ${theme.colors.gray300};
      transition: 250ms;
    }
    &:checked {
      border-color: ${theme.colors.brown};
      background: ${theme.colors.brown};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1.8rem;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`
