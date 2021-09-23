import styled from '@emotion/styled';
const StyledBox = styled.div`
    width:${props => props.width};
    ${props => props.line && 'border-right: var(--BorderRight);'}
`
export default StyledBox