import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { typographyVariantsMap } from '../../foundation/Text/variants';
import propToStyle from '../../../theme/Utils/propToStyle';
import breakpointsMedia from '../../../theme/Utils/breakpointsMedia';

const ButtonGhost = css`
  background-color: transparent;
  color: ${({ theme, variant }) => get(theme.colors, `${variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme.colors, `${variant}.color`)};
  color: ${({ theme, variant }) => get(theme.colors, `${variant}.contrastText`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  ${breakpointsMedia({
    xs: typographyVariantsMap.smallestException,
    md: typographyVariantsMap.paragraph1,
  })}
  ${propToStyle('display')}
  ${propToStyle('margin')}
`;

export default Button;
