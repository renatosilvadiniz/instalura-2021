import styled from "styled-components";
import { typographyVariantsMap } from "./variants";
import propToStyle from "../../../theme/Utils/propToStyle";
import PropTypes from "prop-types";

const TextWrapper = styled.span`
  ${({ variant }) => typographyVariantsMap[variant]}
  ${propToStyle("textAlign")}
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextWrapper as={tag} variant={variant} {...props}>
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
