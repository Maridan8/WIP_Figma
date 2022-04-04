import styled from "styled-components";

export const LandOut = styled.div`
    width: 1440px;
    border: 1px solid red;
    padding-top: 100px;
`;
export const LogoImg = styled.img`
    width: 300px;
    animation: logoanim 5s infinite;
    @keyframes logoanim {
        0% {
            opacity: 0;
        }
        70% {
            opacity: 0.4;
        }
        100% {
            content: url('img/funnylogo.png');
        }
    }
`;
export const MachineContainer = styled.div`

`;
export const MachineImg = styled.img`
    animation: machineanim 5s infinite;
    @keyframes machineanim {
        0% {
            content: url('img/landing/machineold.png');
        }
        50% {
            content: url('img/landing/machinenew.png');
        }
        100% {
            content: url('img/landing/machineold.png');
        }
    }
`;
export const PedestalImg = styled.img`
    
`;