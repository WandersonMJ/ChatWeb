import styled, { css } from 'styled-components';

import * as T from '../../types'

export const WrapperChatMessage = styled.div<T.IWrapperChatMessage>`
  ${({theme, type}) => css`
    display: flex;
    width: fit-content;
    height: fit-content;
    max-width: 350px;
    gap: 14px;
    padding: 7px;

    border-radius: 5px;

    background-color: ${theme.colors.chat1};

    word-break: break-all;

    position: relative;

    ${type === 'sent' && css`
      ::after {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 10px solid ${theme.colors.chat1};
        right: -10px;
        bottom: 4px;
        position: absolute;
      }
    `}

    ${type === 'received' && css`
      ::before {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent; 
        
        border-right:10px solid ${theme.colors.chat1};
        left: -10px;
        bottom: 4px;
        position: absolute;
      }
    `}
  `}
`;

export const Image = styled.img`
  width:35px;
  height: 35px;
  border-radius: 50px;
`

export const WrapperChatBot = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 86vh;
  padding: 0 15px;
  
  @media (max-height: 850px) {
    height: 82vh;
  }

  @media (max-height: 650px) {
    height: 75vh;
  }

  @media (max-height: 470px) {
    height: 72vh;
  }
`

export const WrapperText = styled.div<T.IWrapperText>`
  ${({messageClass}) => css`
    & + & {
      margin-top: 14px;    
    }
  
    align-self: flex-start;

    ${messageClass && css`
      align-self: flex-end;
    `}
  `}
`
