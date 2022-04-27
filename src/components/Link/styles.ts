import styled from "styled-components";

import Text from "../Text";

export const TextLink = styled(Text)``;

export const WrapLink = styled.div`
  cursor: pointer;

  ${TextLink} {
    position: relative;

    &::after {
      content: "";
      position: absolute;

      bottom: -3px;
      left: 0;

      height: 1px;
      width: 0;

      background: ${({ theme }) => theme.colors.white};

      transition: width 0.1s ease;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;
