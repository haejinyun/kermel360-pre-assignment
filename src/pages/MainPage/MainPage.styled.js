import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 60px 62px 60px;
  gap: 62px;
  background-color: rgba(246, 247, 249, 1);
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1320px;
  gap: 32px;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  padding-right: 23px;
  /* width: 1312px; */
  width: 734px;
`;

export const MoreButton = styled.button`
  width: 156px;
  height: 44px;
  padding: 0px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgba(53, 99, 233, 1);
  //styleName: Semibold/Type@16;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

export const Count = styled.span`
  //styleName: Medium/Type@14;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: right;
  color: rgba(144, 163, 191, 1);
`;
