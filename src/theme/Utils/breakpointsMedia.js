import breakpoints from "../Breakpoints";
import { css } from "styled-components";

export default function breakpointsMedia(cssByBreakpoints) {
  const styles = Object.keys(cssByBreakpoints).map((item) => {
    return css`
      @media (min-width: ${breakpoints[item]}px) {
        ${cssByBreakpoints[item]}
      }
    `;
  });
  return styles;
}
