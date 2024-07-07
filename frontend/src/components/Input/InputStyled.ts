import styled from 'styled-components';

const InputComponent = styled.input`
  font-family: 'Helvetica', 'Arial', sans-serif;
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 16px;

  &:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default InputComponent;