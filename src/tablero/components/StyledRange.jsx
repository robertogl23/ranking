import styled from '@emotion/styled';
const StyledRange = styled.div`
    background:var(--linear-gradient-1);
    border-radius:4px;
    height:30%;
    width:${(props) => (props.score > 100 ? 100 : props.score)}%;
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
