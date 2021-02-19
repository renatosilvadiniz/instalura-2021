import { css } from 'styled-components';
import breakpoints from '../Breakpoints';

export default function breakpointsMedia(cssByBreakpoints) {
  const styles = Object.keys(cssByBreakpoints).map((item) => css`
      @media (min-width: ${breakpoints[item]}px) {
        ${cssByBreakpoints[item]}
      }
    `);
  return styles;
}
