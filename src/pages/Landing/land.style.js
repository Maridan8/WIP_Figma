import styled from "styled-components";

export const LandOut = styled.div`
    width: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 30px;
`;
export const LeftContainer = styled.div`
    overflow: auto;
    padding-top: 50px;
`;
export const Left = styled.div`
    min-width: 730px;
    width: 730px;
    height: 780px;
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
    position: relative;
    margin-left:170px;
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
    position: absolute;
    left: 7px;
    top: 130px;
    animation: pedestalanim 10s infinite;
    @keyframes pedestalanim {
        0% {
            opacity: 1;
        }
        5% {
            opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90%{
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const MachineLineImg = styled.img`
    position: absolute;
    left: 13px;
    top: 199px;
    animation: lineanim 5s infinite;
    @keyframes lineanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const WhitelineImg = styled.img`
    position: absolute;
    left: 20px;
    top: 247px;
`;
export const LinearImg = styled.img`
    position: absolute;
    left: 69px;
    top: 258px;
    animation: linearanim 15s infinite;
    @keyframes linearanim {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const StarImg = styled.img`
    position: absolute;
    left: -10px;
    top: 255px;
    width: 15px;
    animation: staranim 15s infinite;
    @keyframes staranim {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const PinkLinearImg = styled.img`
    position: absolute;
    left: -43px;
    top: 275px;
    animation: pinklinearanim 8s infinite;
    @keyframes pinklinearanim {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        20% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const LampImg = styled.img`
    position: absolute;
    left: -80px;
    top:174px;
    animation: lampanim 10s infinite;
    @keyframes lampanim {
        0% {
            content: url('img/landing/lamp1.png');
        }
        45% {
            content: url('img/landing/lamp2.png');
        }
        75% {
            content: url('img/landing/lamp3.png');
        }
        100% {
            content: url('img/landing/lamp4.png');
        }
    }
`;
export const BubbleBottleImg = styled.img`
    position: absolute;
    left: 116px;
`;
export const BubblelightImg = styled.img`
    position: absolute;
    left: 110px;
    top: 161px;
    animation: bubblelightanim 20s infinite;
    @keyframes bubblelightanim {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        20% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const BubblelineImg = styled.img`
    position: absolute;
    left: 112px;
    top: 115px;
    animation: bubblelineanim 13s infinite;
    @keyframes bubblelineanim {
        0% {
            opacity: 1;
        }
        10% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const PinkCircleImg = styled.img`
    position: absolute;
    left: 117px;
    top: 72px;
    animation: pinkcircleanim 5s infinite;
    @keyframes pinkcircleanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const RocketImg = styled.img`
    position: absolute;
    left: 177px;
    top: 114px;
`;
export const FourdotImg = styled.img`
    position: absolute;
    left: 186px;
    top: 244px;
    animation: fourdotanim 5s infinite;
    @keyframes fourdotanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const RocketLineImg = styled.img`
    position: absolute;
    top: -52px;
    left: 173px;
    animation: fourdotanim 12s infinite;
    @keyframes fourdotanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const PinkLampImg = styled.img`
    position: absolute;
    top: -141px;
    left: 169px;
    animation: pinklampanim 18s infinite;
    @keyframes pinklampanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const PinkLamplightImg = styled.img`
    position: absolute;
    top: -151px;
    left: 161px;
    animation: lamplightanim 7s infinite;
    @keyframes lamplightanim {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const CircleLineImg = styled.img`
    position: absolute;
    left: 237px;
    top: 239px;
    animation: circlelineeanim 14s infinite;
    @keyframes circlelineeanim {
        0% {
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        45% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        95% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const FlowerImg = styled.img`
    position: absolute;
    left: 311px;
    top: 168px;
`;
export const DiamondImg = styled.img`
    position: absolute;
    top: 128px;
    left: 320px;
    animation: diamondanim 6s infinite;
    @keyframes diamondanim {
        0% {
            content: url('img/landing/diamond1.png');
        }
        20% {
            content: url('img/landing/diamond2.png');
        }
        40% {
            content: url('img/landing/diamond1.png');
        }
        60% {
            content: url('img/landing/diamond2.png');
        }
        80% {
            content: url('img/landing/diamond1.png');
        }
        100% {
            content: url('img/landing/diamond2.png');
        }
    }
`;
export const YellowLinearImg = styled.img`
    position: absolute;
    left: 239px;
    top: 145px;
`;
export const PurpleLinearImg = styled.img`
    position: absolute;
    left: 237px;
    top: -48px;
`;
export const BlueStarImg = styled.img`
    position: absolute;
    left: 235px;
    top: -11px;
    animation: helloanim 10s infinite;
    @keyframes helloanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const HelloImg = styled.img`
    position: absolute;
    left: 258px;
    top: 18px;
    animation: helloanim 6s infinite;
    @keyframes helloanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const PlusImg = styled.img`
    position: absolute;
    left: 209px;
    top: 70px;
    animation: helloanim 4s infinite;
    @keyframes helloanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const MouseImg = styled.img`
    position: absolute;
    top: 303px;
    left: 10px;
`;
export const TopstarImg = styled.img`
    position: absolute;
    top: 330px;
    width: 20px;
    left: -75px;
    animation: topstaranim 2s infinite;
    @keyframes topstaranim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const BottomStarImg = styled.img`
    position: absolute;
    width: 25px;
    top: 369px;
    left: -50px;
    animation: bottomstaranim 3s infinite;
    @keyframes bottomstaranim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const BigrocketImg = styled.img`
    position: absolute;
    left: -100px;
    top: 421px;
`;
export const DollarmarkImg = styled.img`
    position: absolute;
    left: 37px;
    top: 496px;
    animation: dotanim 3s infinite;
    @keyframes dotanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const DotboxImg = styled.img`
    position: absolute;
    left: 26px;
    top: 490px;
    animation: dotboxanim 8s infinite;
    @keyframes dotboxanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const StickImg = styled.img`
    position: absolute;
    top: 485px;
    left: -31px;
`;
export const StickCircleImg = styled.img`
    position: absolute;
    top: 551px;
    left: 17px;
    animation: stickcircleanim 8s infinite;
    @keyframes stickcircleanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const OrangedirectLineImg = styled.img`
    position: absolute;
    top:260px;
    left:193px;
    animation: orangelineanim 5s infinite;
    @keyframes orangelineanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const  WhitedirectLineImg = styled.img`
    position: absolute;
    top:450px;
    left:-44px;
    animation: whitedirectlineanim 5s infinite;
    @keyframes whitedirectlineanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const CircleLampImg = styled.img`
    position: absolute;
    left: 255px;
    top: 410px;
    animation: circlelampanim 3s infinite;
    @keyframes circlelampanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const CrocodileImg = styled.img`
    position: absolute;
    left: 266px;
    top: 351px;
    animation: corocodileanim 11s infinite;
    @keyframes corocodileanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const CoupleCircleImg = styled.img`
    position: absolute;
    left: 270px;
    top: 375px;
    animation: coupleanim 20s infinite;
    @keyframes coupleanim {
        0% {
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        30% {
            opacity: 1;
        }
        35% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const ThreedirectImg = styled.img`
    position: absolute;
    top: 356px;
    left: 322px;
`;
export const ClockImg = styled.img`
    position: absolute;
    top: 308px;
    left: 346px;
    animation: clockanim 15s infinite;
    @keyframes clockanim {
        0% {
            content: url('img/landing/clock1.png');
        }
        50% {
            content: url('img/landing/clock2.png');
        }
        100% {
            content: url('img/landing/clock1.png');
        }
    }
`;
export const BatteryImg = styled.img`
    position: absolute;
    top: 300px;
    left: 287px;
    animation: batanim 15s infinite;
    @keyframes batanim {
        0% {
            content: url('img/landing/battery2.png');
        }
        50% {
            content: url('img/landing/battery4.png');
        }
        100% {
            content: url('img/landing/batteryall.png');
        }
    }
`;
export const MoneyImg = styled.img`
    position: absolute;
    left: 440px;
    top: 30px;
    animation: moneyanim 5s infinite;
    @keyframes moneyanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const MoneyImg2 = styled.img`
    position: absolute;
    left: 440px;
    top: -45px;
    animation: moneyanim2 3s infinite;
    @keyframes moneyanim2 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const MoneyBoxImg = styled.img`
    position: absolute;
    left: 421px;
    top: 80px;
`;
export const DotcircleImg = styled.img`
    position: absolute;
    left: 335px;
    top: 231px;
`;
export const GalguriImg = styled.img`
    position: absolute;
    left: 358px;
    top: 295px;
    animation: galgurianim 10s infinite;
    @keyframes galgurianim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const CarImg = styled.img`
    position: absolute;
    left: 408px;
    top: 345px;
`;
export const FiveDotImg = styled.img`
    position: absolute;
    left: 345px;
    top: 457px;
`;
export const SelmaeImg = styled.img`
    position: absolute;
    left: 346px;
    top: 530px;
`;
export const ChipImg = styled.img`
    position: absolute;
    left: 462px;
    top: 561px;
    animation: chipani 8s infinite;
    @keyframes chipani {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const OralineImg = styled.img`
    position: relative;
    top: 345px;
    left: 228px;
    animation: olineanim 8s infinite;
    @keyframes olineanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const PinkLineImg = styled.img`
    position: relative;
    top: 234px;
    left: 156px;
    animation: pinklianim 10s infinite;
    @keyframes pinklianim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const SeveralDotImg = styled.img`
    position: relative;
    top: 223px;
    left: 33px;
    animation: sevdotanim 3s infinite;
    @keyframes sevdotanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const EarchImg = styled.img`
    position:absolute;
    top: 455px;
    left: 458px;
    animation: earthani 13s infinite;
    @keyframes earthani {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        40% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const YesLineImg = styled.img`
    position:absolute;
    top: 529px;
    left: 441px;
`;
export const LastStarImg = styled.img`
    position:absolute;
    top: 432px;
    left: 535px;
`;
export const TargetImg = styled.img`
    position:absolute;
    top: 555px;
    left: 522px;
`;
export const GrassImg = styled.img`
    position:absolute;
    top: 595px;
    left: 515px;
    animation: grassanim 7s infinite;
    @keyframes grassanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const ThreeChipImg = styled.img`
    position:absolute;
    top: 211px;
    left: 428px;
    animation: threedotani 4s infinite;
    @keyframes threedotani {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const Right = styled.div`
    width: 150px;
    padding-left: 20px;
`;
export const EnterBtn = styled.img`
    cursor: pointer;
    animation: enteranim 8s infinite;
    @keyframes enteranim {
        0% {
            content: url('img/landing/enter1.png');
        }
        50% {
            content: url('img/landing/enter2.png');
        }
        100% {
            content: url('img/landing/enter3.png');
        }
    }
`;