import styled, { css } from 'styled-components'
const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    h2 {
      text-align: center;
    }

    .state {
      width: 100%;
      height: 15px;
      border-radius: 5px;
    }

    .green {
      background-color: #32d839;
    }

    .color-green {
      color: #32d839;
    }

    .red {
      background-color: #e4271b;
    }

    .color-red {
      color: #e4271b;
    }

    .yellow {
      background-color: #e7ca35;
    }

    .color-yellow {
      color: #e7ca35;
    }

    .orders {
      margin-top: 50px;
    }

    .order {
      width: 100%;
      margin-bottom: 40px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        'cod status'
        'price link';
      justify-content: space-between;
      gap: 25px;

      .item {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-weight: ${theme.font.semiBold};
        font-family: ${theme.font.family.ubuntu};
      }

      .cod {
        grid-area: cod;
      }

      .status {
        grid-area: status;
      }

      .price {
        grid-area: price;
      }

      .link {
        grid-area: link;
      }

      a {
        text-decoration: none;
      }

      p {
        display: flex;
        align-items: center;
      }
    }
  `}
`

export default Container
