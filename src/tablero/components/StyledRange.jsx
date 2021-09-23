import styled from '@emotion/styled'
const StyledRange = styled.div`
    background:linear-gradient(to right, #63dea3, #5cdf9d, #56df97, #4fe091, #49e08a, #44e186, #3fe183, #39e27f, #31e37e, #28e57d, #1ce67c, #06e77b);
    border-radius:4px;
    height:30%;
    width:${props => props.score  > 100 ? 100 : props.score}%;
    animation-name: example;
    animation-duration: 4s;
    animation-fill-mode:both;

    @keyframes example {
        0%{
            width: 0%;
        }

    }
`;
export default StyledRange;