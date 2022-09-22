import styled from "styled-components";
import inputControls from "../../assets/images/input-controls.svg";

export const InputCntr = styled.div<any>`
    input {
        width: 60px;
        border: 2px solid ${(props: any) => props.theme.black};
        border-radius: 10px;
        background: ${(props: any) => props.theme.primary};
        outline: none;
        height: 100%;
        font-family: 'Inter', sans-serif;
        font-style: italic;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        padding-left: 10px;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
        cursor: pointer;
        display: block;
        width: 8px;
        text-align:center;
        position:relative;
    }
    
    input[type=number]:hover::-webkit-inner-spin-button { 
        background: url(${inputControls}) no-repeat 50% 50%;  
        width: 14px;
        height: 14px;
        padding: 4px;
        position: relative;
        right: 4px;
    }
`

