import React from "react";
import { Link } from "react-router-dom";
import { LandOut, LogoImg,MachineContainer,MachineImg,PedestalImg} from "./land.style";

export default function LandContainer() {
    return (
        <LandOut>
            <LogoImg src='img/underlogo.png' alt='' />
            <MachineContainer>
                <MachineImg src='img/landing/machineold.png' alt='' />
                <PedestalImg src='img/landing/pedestal.svg' alt='' />
            </MachineContainer>
        </LandOut>
    )
}
