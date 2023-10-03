import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = () => {
  return <SFooter>&copy; test inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
