import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 15px 0;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  display: flex;
  margin: 0 25px;
  justify-content: center;

  &:first-child {
    width: 52%;
    max-width: 250px;
    min-width: 250px;
  }
  &:last-child {
    width: 8%;
    margin: 0;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

// .checkout-container {
//     width: 75%;
//     min-height: 90vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 30px auto 0;

//     .checkout-header {
//       width: 100%;
//       padding: 15px 0;
//       margin: 20px 0;
//       display: flex;
//       justify-content: space-around;
//       border-bottom: 1px solid darkgrey;

//       .header-block {
//         text-transform: capitalize;
//         width: 26%;
//         display: flex;
//         margin: 0 25px;
//         justify-content: center;

//         &:first-child{
//           width: 35%;
//         }

//         &:last-child {
//           width: 2%;
//         }
//       }
//     }

//     .total {
//       margin-top: 30px;
//       margin-left: auto;
//       font-size: 36px;
//     }
//   }
