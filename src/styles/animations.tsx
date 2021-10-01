import { keyframes } from "styled-components";

export const Spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Appear = keyframes`
    from { opacity: 0%; top: -20px; }
    to { opacity: 100%; top: 0px; }
`;

export const BobUpAndDownAnimation = keyframes`
    from {  top: -5px; }
    to { top: 5px; }
`;