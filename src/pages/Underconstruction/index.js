import React from "react";
import { Link } from "react-router-dom";
// import {DiscordSVG} from "../../assets/svg/svg";
import {UnderContain,UnderlogoImg,SoonText,SocialIconImg,SocialIcons,} from "./Under.style";

export default function UnderContainer() {
    return (
        <>
            <UnderContain>
                <UnderlogoImg src='img/underlogo.png' alt='' draggable={false} />
                <SoonText>coming soon</SoonText>
                <SocialIcons>
                    <SocialIconImg src='img/discord.svg' alt='' draggable={false} />
                    <SocialIconImg src='img/telegram.svg' alt='' draggable={false} />
                    <SocialIconImg src='img/twitter.svg' alt='' draggable={false} />
                </SocialIcons>
            </UnderContain>
        </>
    )
}
