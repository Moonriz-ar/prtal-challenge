import styled from 'styled-components';

import Card from '@mui/material/Card';

export const AddButtonStyled = styled.button`
  color: rgba(29, 78, 216, 1);
  background-color: rgba(226, 232, 240, 1);
  border: none;
  border-radius: 50%;
  height: 24px;
  opacity: 0;
  width: 24px;

  &:hover {
    opacity: 1;
  }
`;
AddButtonStyled.displayName = 'AddButtonStyled';

export const CardStyled = styled(Card)`
  padding: 8px;
`;
CardStyled.displayName = 'CardStyled';

export const ContainerStyled = styled.section`
  display: flex;
  padding: 8px;
  position: relative;
`;
ContainerStyled.displayName = 'ContainerStyled';

export const ButtonContainer = styled.article`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;
ButtonContainer.displayName = 'ButtonContainer';
