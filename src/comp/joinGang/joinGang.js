import React from "react";
import "./joinGang.css"
import Discord from "../../assets/social/discord.png";
import LinkedIn from "../../assets/social/linkedin.png";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";


export default function JoinGang() {
    return (
        <div >
            <div className="">
                <div className="HeadingText"> Join The Metakul Gang</div>
            </div>
            <div className={"ButtonContiner"}>
                <div className="FlexRow1">
                    <div className="Button" style={{marginRight:"20px"}}>

                        <img className={"Icon"} src={Discord}></img>
                        <a style={{ color: "white" }} href="https://discord.gg/sRk3tZ9z3A" activeStyle={{ fontWeight: "bold", }}>
                            Discord
                        </a>
                    </div>
                    <div >
                        
                        <ConnectWallet/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
