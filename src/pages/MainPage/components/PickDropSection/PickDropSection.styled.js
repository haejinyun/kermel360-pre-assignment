import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1312px;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchButton = styled.button`
  background-color: rgba(53, 99, 233, 1);
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 60px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: scaleX(-1);
`;
