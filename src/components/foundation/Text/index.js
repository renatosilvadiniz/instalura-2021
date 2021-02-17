import styled from "styled-components";
import { typographyVariantsMap } from "./variants";
import PropTypes from "prop-types";

const TextWrapper = styled.span`
  ${({ variant }) => typographyVariantsMap[variant]}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextWrapper as={tag} variant={variant}>
      {children}
    </TextWrapper>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "smallestException",
};
