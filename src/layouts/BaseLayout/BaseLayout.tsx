import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container paddingTop={8} paddingBottom={8}>
      {children}
    </Container>
  );
};

export default BaseLayout;
