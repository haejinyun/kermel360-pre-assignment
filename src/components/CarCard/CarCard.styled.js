import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 304px;
  height: 388px;
  border-radius: 10px;
  padding: 24px;
  border: 1px solid rgba(144, 163, 191, 0.2);
  box-sizing: border-box;
`;

export const TitleSection = styled.div`
  display: flex;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.div`
  //styleName: Bold/Type@20;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.03em;
  text-align: left;
  color: rgba(26, 32, 44, 1);
`;

export const CarType = styled.div`
  //styleName: Bold/Type@14;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(144, 163, 191, 1);
`;

export const Heart = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

export const CarImg = styled.img`
  display: flex;
  justify-content: center;

  /* width: 204px;
  height: 64px; */
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;
export const IconGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.64px;
  text-align: left;
  color: rgba(144, 163, 191, 1);
`;

export const RentSection = styled.div`
  display: flex;

  /* align-items: flex-end; */
  align-items: center;
  justify-content: space-between;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Price = styled.div`
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.2px;
  text-align: left;
  color: rgba(26, 32, 44, 1);
  & > span {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.64px;
    text-align: left;
    color: rgba(144, 163, 191, 1);
  }
`;
export const DiscountPrice = styled.div`
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.64px;
  text-align: left;
  color: rgba(144, 163, 191, 1);
  text-decoration: line-through;
`;

export const RentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 44px;
  top: 320px;
  left: 164px;
  padding: 0px 20px;
  gap: 8px;
  border: none;
  border-radius: 4px;
  background-color: rgba(53, 99, 233, 1);
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
