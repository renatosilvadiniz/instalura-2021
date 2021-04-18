import styled from 'styled-components';
import propToStyle from '../../../../theme/Utils/propToStyle';

const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundColor')}
`;

export default Box;
