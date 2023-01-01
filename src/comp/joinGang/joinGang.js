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
                <div className="HeadingText"> Do More with you NFT</div>
            </div>
            <div className={"ButtonContiner"}>
                <div className="FlexRow1">
                    <div className="mainButton" style={{marginRight:"20px"}}>

                        
                        <a style={{ color: "white" }} target="_blank" href="https://opensea.io/collection/metakul" >
                            Sell On Opensea
                        </a>
                    </div>
                    <div className="mainButton" style={{ marginRight: "20px" }}>

                        
                        <a style={{ color: "white" }} target="_blank" href="https://stake.metakul.in/" >
                            Stake & earn Crypto
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
