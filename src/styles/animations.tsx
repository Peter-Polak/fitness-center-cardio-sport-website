import { keyframes } from "styled-components";

export const Spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Appear = keyframes`
    from { opacity: 0%; }
    to { opacity: 100%; }
`;