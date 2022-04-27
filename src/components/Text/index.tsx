import { fontTypes, themeColors } from "styles/theme";

import { TextStyle } from "./styles";

export interface IProps {
  color?: keyof typeof themeColors;
  bold?: boolean;
  textAlign?: "left" | "center" | "right" | "unset";
  truncate?: boolean;
  type?: keyof typeof fontTypes;
  uppercase?: boolean;
  children?: any
}

const Text = ({
  type = "body",
  bold = false,
  color = "white",
  children,
  textAlign = "unset",
  uppercase,
  ...rest
}: IProps) => (
    <TextStyle
      type={type}
      bold={bold}
      color={color}
      textAlign={textAlign}
      uppercase={uppercase}
      {...rest}
    >
      {children}
    </TextStyle>
  )

export default Text;
