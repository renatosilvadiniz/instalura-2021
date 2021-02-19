import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../../theme/Utils/breakpointsMedia';
import propToStyle from '../../../../theme/Utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
  ${propToStyle('marginTop')}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    const helper = (size) => css`
      flex: 0 0 ${(100 * value[size]) / 12}%;
      max-width: ${(100 * value[size]) / 12}%;
    `;
    return typeof value === 'number'
      ? css`
          flex: 0 0 ${(100 * value) / 12}%;
          max-width: ${(100 * value) / 12}%;
        `
      : breakpointsMedia({
        xs: value && helper('xs'),
        sm: value && helper('sm'),
        md: value && helper('md'),
        lg: value && helper('lg'),
        xl: value && helper('xl'),
      });
  }}
  ${({ offset }) => {
    const helper = (size) => css`
      margin-left: ${(100 * offset[size]) / 12}%;
    `;
    return typeof offset === 'number'
      ? css`
          margin-left: ${(100 * offset) / 12}%;
        `
      : breakpointsMedia({
        xs: offset && helper('xs'),
        sm: offset && helper('sm'),
        md: offset && helper('md'),
        lg: offset && helper('lg'),
        xl: offset && helper('xl'),
      });
  }}
  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;

Col.defaultProps = {
  offset: 0,
  value: 12,
};

Col.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.object.isRequired,
  ]),
  offset: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.object.isRequired,
  ]),
};

// eslint-disable-next-line import/prefer-default-export
export const Grid = {
  Container,
  Row,
  Col,
};
