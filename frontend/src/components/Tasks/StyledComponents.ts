import styled from 'styled-components';

export const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
  font-family: 'Helvetica', 'Arial', sans-serif;
  max-height: 600px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  padding: 10px;
`;

export const ListItem = styled.li`
  background-color: #ffffff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95%;
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ItemText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  word-break: break-word;  /* Ensure long words break properly and don't overflow */
`;

export const RemoveButton = styled.button`
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  
  &:hover {
    background-color: #ff4c4c;
  }
`;

export const EditButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  
  &:hover {
    background-color: #45a049;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; /* Prevent buttons from shrinking */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden; /* Ensure no overflow in x direction */
`;

export const AddTaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 5px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50px;
  
  &:hover {
    background-color: #45a049;
  }
`;

export const InputComponent = styled.input`
  font-family: 'Helvetica', 'Arial', sans-serif;
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 16px;
  flex-grow: 1;

  &:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.h1`
  font-family: 'Helvetica', 'Arial', sans-serif;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const FancyCheckbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 2px solid #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  position: relative;

  &:checked {
    background-color: #4CAF50;
    border: 2px solid #4CAF50;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 5px;
    border: solid white;
    border-width: 0 0 2px 2px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;


export const TaskContainer = styled.label<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${props => (props.done ? '#f8f8f8' : 'transparent')};
  color: ${props => (props.done ? 'darkgreen' : '#000')};
  padding: 10px;
  border-radius: 5px;
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
`;
