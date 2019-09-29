import styled, {
    keyframes
} from 'styled-components';


const rotate = keyframes `
     0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`
export const Loading = styled.div `
    margin: 20% auto;
    width: 59px !important;
    height: 59px !important;
    -webkit-transform: translate(-29.5px, -29.5px) scale(0.295) translate(29.5px, 29.5px);
    transform: translate(-29.5px, -29.5px) scale(0.295) translate(29.5px, 29.5px);  
    > div {
        -webkit-transform-origin: 100px 100px;
        transform-origin: 100px 100px;
        -webkit-animation: ${rotate} 1s infinite linear;
        animation: ${rotate} 1s infinite linear;
        position: relative;

        div {
        position: absolute;
        width: 26px;
        height: 192px;
        background: #f08d43;
        left: 100px;
        top: 100px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        &:nth-child(1) {
            width: 152px;
            height: 152px;
            border-radius: 50%;
        }

        &:nth-child(3) {
            -webkit-transform: translate(-50%, -50%) rotate(30deg);
            transform: translate(-50%, -50%) rotate(30deg);
        }

        &:nth-child(4) {
            -webkit-transform: translate(-50%, -50%) rotate(60deg);
            transform: translate(-50%, -50%) rotate(60deg);
        }

        &:nth-child(5) {
            -webkit-transform: translate(-50%, -50%) rotate(90deg);
            transform: translate(-50%, -50%) rotate(90deg);
        }

        &:nth-child(6) {
            -webkit-transform: translate(-50%, -50%) rotate(120deg);
            transform: translate(-50%, -50%) rotate(120deg);
        }

        &:nth-child(7) {
            -webkit-transform: translate(-50%, -50%) rotate(150deg);
            transform: translate(-50%, -50%) rotate(150deg);
        }

        &:nth-child(8) {
            width: 80px;
            height: 80px;
            background: #fff;
            border-radius: 50%;
        }
        }
    }
`