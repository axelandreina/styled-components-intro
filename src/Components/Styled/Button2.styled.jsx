import styled from "styled-components";

export const Button2 = styled.button`
    border-color: #5762d5;
    color: ${(props) => props.theme.main};
    background-color: #c1cefe;
    cursor: pointer;
    font-size: 20px;
    border-radius: 8px;
    padding: 12px 24px;
    margin-right: 8px;
    &:hover {
        background-color: #9aaef8;
    }
`;
Button2.defaultProps = {
    theme: {
        main: "#5762D5",
    },
};