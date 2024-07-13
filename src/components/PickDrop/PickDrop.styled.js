import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 582px;
  height: 136px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  padding: 24px 48px;
  box-sizing: border-box;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  margin: 0;
  appearance: none;
  border: none;
  background-color: rgba(53, 99, 233, 0.3);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(53, 99, 233, 1); // 내부 원의 색상
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioText = styled.div`
  //styleName: Semibold/Type@16;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(26, 32, 44, 1);
`;

export const SettingContainer = styled.div`
  display: flex;
`;

export const SettingSection = styled.div`
  display: flex;
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SettingTitle = styled.div`
  //styleName: Bold/Type@16;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(26, 32, 44, 1);
`;

export const Division = styled.div`
  display: flex;
  margin: 0 23.5px;
  width: 1px;
  height: 48px;
  background-color: rgba(195, 212, 233, 0.4);
`;

export const SettingDropDown = styled.div`
  display: flex;
  align-items: center;
  width: 126px;
  height: 20px;
  gap: 8px;
`;

export const SettingValue = styled.div`
  //styleName: Medium/Type@12;
  font-family: Plus Jakarta Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.12px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(144, 163, 191, 1);
`;
