import NextLink from "next/link";

import { WrapLink, TextLink } from "./styles";

interface ILink {
  href: string;
  text?: string;
  children?: any;
  icon?: boolean
}

const Link = ({ text, href, children, icon }: ILink) => {


  if(icon) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <TextLink bold>{text}</TextLink>
      </a>
    )
  }

  return (
  <WrapLink>
    <NextLink href={href} passHref>
      <a>{children || <TextLink bold>{text}</TextLink>}</a>
    </NextLink>
  </WrapLink>
)};

export default Link;
