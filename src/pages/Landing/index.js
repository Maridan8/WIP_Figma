import React from "react";
import { Link } from "react-router-dom";
import { LandOut, LogoImg,LeftContainer,YesLineImg,Left,EnterBtn,LastStarImg,Right,ThreeChipImg,TargetImg,GrassImg,PinkLinearImg,PinkLineImg,EarchImg,SeveralDotImg,CarImg,ChipImg,OralineImg,SelmaeImg,FiveDotImg,MoneyImg,GalguriImg,DotcircleImg,MoneyImg2,MoneyBoxImg,ClockImg,BatteryImg,CoupleCircleImg,ThreedirectImg,CrocodileImg,CircleLampImg,OrangedirectLineImg,WhitedirectLineImg,DollarmarkImg,StickCircleImg,StickImg,DotboxImg,BigrocketImg,MouseImg,TopstarImg,BottomStarImg,PlusImg,BlueStarImg,HelloImg,PurpleLinearImg,YellowLinearImg,DiamondImg,FlowerImg,CircleLineImg,PinkLampImg,PinkLamplightImg,RocketImg,RocketLineImg,FourdotImg,PinkCircleImg,BubblelineImg,BubblelightImg,BubbleBottleImg,LampImg,MachineContainer,StarImg,MachineImg,PedestalImg,MachineLineImg,LinearImg,WhitelineImg} from "./land.style";

export default function LandContainer() {
    return (
        <LandOut>
            <LeftContainer>
                <Left>
                    <LogoImg src='img/underlogo.png' alt='' />
                    <MachineContainer>
                        <MachineImg src='img/landing/machineold.png' alt='' />
                        <PedestalImg src='img/landing/pedestal.svg' alt='' />
                        <MachineLineImg src='img/landing/machineLine.svg' alt='' />
                        <WhitelineImg src='img/landing/whiteline.svg' alt='' />
                        <LinearImg src='img/landing/linear.svg' alt='' />
                        <StarImg src='img/landing/star.svg' alt='' />
                        <PinkLinearImg src='img/landing/pinklinear.svg' alt='' />
                        <LampImg src='img/landing/lamp1.png' alt='' />
                        <BubbleBottleImg src='img/landing/bubblebottle.svg' alt='' />
                        <BubblelightImg src='img/landing/bubblelight.svg' alt='' />
                        <BubblelineImg src='img/landing/bubbleline.svg' alt='' />
                        <PinkCircleImg src='img/landing/pinkcircle.svg' alt='' />
                        <RocketImg src='img/landing/rocket.svg' alt='' />
                        <FourdotImg src='img/landing/fourdot.svg' alt='' />
                        <RocketLineImg src='img/landing/rocketline.svg' alt='' />
                        <PinkLampImg src='img/landing/pinklamp.svg' alt='' />
                        <PinkLamplightImg src='img/landing/pinklamplight.svg' alt='' />
                        <CircleLineImg src='img/landing/circleline.svg' alt='' />
                        <FlowerImg src='img/landing/flower.svg' alt='' />
                        <DiamondImg src='img/landing/diamond1.png' alt='' />
                        <YellowLinearImg src='img/landing/yellowlinear.svg' alt=''/>
                        <PurpleLinearImg src='img/landing/purplelinear.svg' alt=''/>
                        <BlueStarImg src='img/landing/bluestar.svg' alt=''/>
                        <HelloImg src='img/landing/hello.svg' alt=''/>
                        <PlusImg src='img/plus.svg' alt=''/>
                        <MouseImg src='img/landing/mouse.svg' alt=''/>
                        <TopstarImg src='img/landing/star.svg' alt='' />
                        <BottomStarImg src='img/landing/star.svg' alt='' />
                        <BigrocketImg src='img/landing/bigrocket.svg' alt='' />
                        <DollarmarkImg src='img/landing/dollarmark.svg' alt='' />
                        <DotboxImg src='img/landing/dotbox.svg' alt='' />
                        <StickImg src='img/stick.svg' alt='' />
                        <StickCircleImg src='img/stick-circle.svg' alt='' />
                        <WhitedirectLineImg src='img/landing/whitedirectline.svg' alt="" />
                        <OrangedirectLineImg src='img/landing/orangeline.svg' alt="" />
                        <CrocodileImg src='img/landing/crocodile.svg' alt="" />
                        <CircleLampImg src='img/landing/circlelamp.svg' alt="" />
                        <CoupleCircleImg src='img/landing/coplecircle.svg' alt='' />
                        <ThreedirectImg src="img/landing/threedirect.svg" alt='' />
                        <ClockImg src='img/landing/clock1.png' alt='' />
                        <BatteryImg src='img/landing/battery2.png' alt='' />
                        <MoneyBoxImg src='img/landing/moneybox.svg' alt='' />
                        <MoneyImg src='img/landing/money.svg' alt='' />
                        <MoneyImg2 src='img/landing/money.svg' alt='' />
                        <DotcircleImg src='img/landing/dotcircle.svg' alt='' />
                        <GalguriImg src='img/landing/galguri.svg' alt='' />
                        <CarImg src='img/landing/car.svg' alt='' />
                        <FiveDotImg src='img/landing/fivedot.svg' alt='' />
                        <SelmaeImg src='img/landing/selmae.svg' alt='' />
                        <ChipImg src='img/landing/chip.svg' alt='' />
                        <OralineImg src='img/landing/oraline.svg' alt='' />
                        <PinkLineImg src='img/landing/pinkline.svg' alt='' />
                        <SeveralDotImg src='img/landing/severaldot.svg' alt='' />
                        <EarchImg src='img/earth.svg' alt='' />
                        <YesLineImg src='img/landing/yesline.svg' alt='' />
                        <LastStarImg src='img/landing/star.svg' alt='' />
                        <TargetImg src='img/landing/target.svg' alt='' />
                        <GrassImg src='img/landing/grass.svg' alt='' />
                        <ThreeChipImg src='img/landing/threechip.svg' alt='' />
                    </MachineContainer>
                </Left> 
            </LeftContainer>
            <Right>
                <Link to='/home'>
                    <EnterBtn src='img/landing/enter1.png' alt='' />
                </Link>
            </Right>
        </LandOut>
    )
}
