import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 24%;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding: 0px 15px;
  cursor: pointer;
`;

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 20px;
//     align-items: center;

//     .image-container {
//       width: 20%;
//       padding-right: 25px;

//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .name,
//     .quantity,
//     .price {
//       width: 25%;
//     }

//     .quantity {
//       display: flex;

//       .arrow {
//         cursor: pointer;
//       }

//       .value {
//         margin: 0 10px;
//       }
//     }

//     .remove-button {
//       padding-left: 12px;
//       cursor: pointer;
//     }
//   }
