import { css } from "styled-components";
import get from "lodash/get";

const typographyVariantsStyles = (variant) => {
  return css`
    font-size: ${({ theme }) =>
      get(theme.typographyVariants, `${variant}.fontSize`)};
    font-weight: ${({ theme }) =>
      get(theme.typographyVariants, `${variant}.fontWeight`)};
    line-height: ${({ theme }) =>
      get(theme.typographyVariants, `${variant}.lineHeight`)};
  `;
};

export const typographyVariantsMap = {
  title: typographyVariantsStyles("title"),
  titleXS: typographyVariantsStyles("titleXS"),
  subTitle: typographyVariantsStyles("subTitle"),
  paragraph1: typographyVariantsStyles("paragraph1"),
  paragraph2: typographyVariantsStyles("paragraph2"),
  smallestException: typographyVariantsStyles("smallestException"),
};
