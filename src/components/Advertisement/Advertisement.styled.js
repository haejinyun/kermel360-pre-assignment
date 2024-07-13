import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 640px;
  height: 360px;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.color};
  padding: 24px;
  box-sizing: border-box;
`;

export const Advertisement = styled.div`
  display: flex;

  flex-direction: column;
  gap: 16px;
`;

export const AdvertisementTitle = styled.div`
  //styleName: Semibold/Type@32;
  font-family: Plus Jakarta Sans;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

export const AdvertisementDescription = styled.div`
  //styleName: Medium/Type@16;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

export const RentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 1);
  width: 120px;
  height: 44px;
  padding: 0 20px;
  gap: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  border: none;
  cursor: pointer;
`;
