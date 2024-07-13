import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.16px;
  text-align: center;
  color: rgba(144, 163, 191, 1);
`;

export const ViewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 104px;
  height: 44px;
  padding: 0px 20px;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.16px;
  text-align: center;
  color: rgba(53, 99, 233, 1);
`;
