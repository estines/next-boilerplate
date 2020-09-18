import styled, { StyledComponent } from "styled-components";

const PageLayout: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  flex: 1;
`;

export default ({ children }) => <PageLayout>{children}</PageLayout>;
