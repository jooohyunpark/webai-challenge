import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  color: black;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid white;
  min-width: 120px;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
