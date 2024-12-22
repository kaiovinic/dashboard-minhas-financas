import React from "react";
import { Container } from "./styles";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Content;
