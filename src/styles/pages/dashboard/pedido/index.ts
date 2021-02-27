import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.xlarge};
    grid-template-areas:
      'table table'
      'shipping address'
      '. back';
    gap: ${theme.spacings.xxlarge};

    .table-head {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      border-radius: ${theme.border.radius.large};
      z-index: 5;
      align-items: center;
      justify-content: center;
    }

    .t-body {
      margin-top: -${theme.spacings.medium};
      z-index: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .t-row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
    }

    .cell {
      display: table-cell;
      padding: ${theme.spacings.xsmall};
    }

    .table {
      width: 100%;
      grid-area: table;
    }

    .table-mobile {
      display: none;
    }

    .shipping {
      grid-area: shipping;
      text-align: center;
      height: auto;
      /* display: flex;
      flex-direction: column; */
      /* justify-content: center; */
      /* align-items: center; */

      p {
        display: flex;
        text-align: center;
      }
    }

    .address {
      grid-area: address;
    }

    .color-red {
      color: #e4271b;
    }

    .color-green {
      color: #32d839;
    }

    .color-yellow {
      color: #e7ca35;
    }

    .item {
      font-weight: ${theme.font.semiBold};
      font-family: ${theme.font.family.ubuntu};
    }

    .back2orders {
      grid-area: back;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;

        font-family: ${theme.font.family.ubuntu};
        color: ${theme.colors.black};
        margin-right: ${theme.spacings.xxxgiant};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      grid-template-areas:
        'table table'
        'shipping shipping'
        'address address';

      .back2orders {
        display: none;
      }

      .table-mobile {
        display: unset;

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: ${theme.spacings.medium};

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      }

      .shipping a {
        word-break: break-all;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileM}) {
      .table-mobile {
        .grid {
          padding: ${theme.spacings.xsmall};

          .item p {
            font-size: ${theme.font.sizes.small};
          }
        }
      }
    }
  `}
`

export default Container
