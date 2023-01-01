
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Snackbar, Paper, LinearProgress, Chip } from "@material-ui/core";
import JoinGang from "../../comp/joinGang/joinGang";


import {
   
    useContract,
    useAddress,
    ThirdwebNftMedia,
    useOwnedNFTs,
} from "@thirdweb-dev/react";


import "./MintPage.css";

import MintStart from "./MintStart"
const myNftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374";

const CountDowns = styled(Countdown)`
    margin-left: 140px;
`;



const MintButtonContainer = styled.div`
    button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {
        color: #464646;
    }
    button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,
    button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }
    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }
`;

const Card = styled(Paper)`
    display: inline-block;
    background-color: var(--card-background-lighter-color) !important;
    margin: auto;
    padding: 10px;
    margin-left:5px;


    
`;
const Timer = styled.div`
font-size:1em;
color:white;
justify-content: center;	
align-items: center;

`
const Timer1= styled.div`
font-size:1.3rem;
color:white;
justify-content: center;
align-items: center;

`
const nftBoxGrid = styled.div`
font-size:1.3rem;
color:white;
justify-content: center;
align-items: center;

`




const Mint = () => {
   
    const address = useAddress();
    const [isActive, setIsActive] = useState(false);
    const { contract: nftDrop } = useContract(myNftDropContractAddress);


    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2023, 0, 1, 14, 55, 0, 0)).getTime();

    const { data: ownedNfts } = useOwnedNFTs(nftDrop, address);

    async function opensea(id: string) { 
        const nft= id+1
        console.log(`https://www.opensea.io/${myNftDropContractAddress}/${id}`)
        window.open(`https://opensea.io/assets/matic/${myNftDropContractAddress}/${id}`)
    }


    const renderCounter = ({ days, hours, minutes, seconds }: any) => {
        return (
            <div>
                <Card elevation={1}>
                    <Timer ><h3>{days}</h3></Timer>
                    <br />
                    <Timer1>
                        Days
                    </Timer1>
                </Card>
                <Card elevation={1}>
                    <Timer><h3>{hours}</h3></Timer>
                    <br />
                    <Timer1>
                            Hours
                        </Timer1>
                </Card>
                <Card elevation={1}>
                    <Timer><h3>{minutes}</h3></Timer>
                    <br />
                    <Timer1>
                        Mins
                    </Timer1>
                    
                </Card>
                <Card elevation={1}>
                            <Timer><h3>{seconds}</h3></Timer>
                            <br />
                            <Timer1>
                                Secs
                            </Timer1>
                </Card>
            </div>
        );
    };

  
    return(
    
        <div className="featuredlaunch_container">
         
            <div className="featuredlaunch_rightCol" style={{ justifyContent: "center", alignItems: "center" }}>
               
                
                

                <div className="featuredLaunch_name HeadingText">MetaKul NFT Mint</div>
                <img 
                    src="https://media.discordapp.net/attachments/954642077340278825/1019585636375732285/6tckjj.gif"
                    alt="NFT"
                    width="300px"
                />
                <MintButtonContainer>

                    <div style={{ marginTop: "10px" }}>

                        <MintStart/>
                    </div>
                   

                  


                </MintButtonContainer>

            </div>
           
            <div className="featuredlaunch_leftCol " style={{display:"flex", justifyContent: "center", marginTop: "10px", alignItems: "center" }}>
                <div className=" containerMint">
<div style={{marginBottom:"35px", padding:"0 10px"}}>                                    
<h4 style={{marginBottom:"5px"}}>Please follow the steps to add Polygon’s Mainnet:</h4>

<h4 style={{marginBottom:"5px"}}>1.Navigate to <a style={{color:"green"}} href="https://polygonscan.com/" >polygonscan.com  </a>
  </h4>
<h4>2.Scroll down to the bottom of the page and click on the button Add Polygon Network</h4>

       </div>
                    <h3>Your Owned NFT</h3>
                    <p style={{ color:"white",marginTop:"0px", fontWeight:"bold" }}>( Will Load After Mint )</p>
                    <div className="nftBoxGrid">
                        {ownedNfts?.map((nft) => (
                            <div key={nft.metadata.id.toString()} className="nftBox">
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                    className="nftMedia"
                                />
                                <h3 style={{display:"flex", justifyContent: "center", alignItems: "center" }}>{nft.metadata.name}</h3>

                                <button
                                    onClick={() => opensea(nft.metadata.id)} className="mainButton"
                                >
                                    View on Opensea
                                </button>
                            </div>
                        ))}
                    </div>
                    </div>
              
                <div className="featuredlaunch_clipboard">
                    <JoinGang></JoinGang>
                </div>
              
                <div className="featuredlaunch_clipboard">
                            <div className="featuredlaunch_box">
                                <span>METAKUL SUPPLY</span>
                        <div className="featuredlaunch_quantity">777 NFT<br/>7777 Metaverse Land</div>
                            </div>
                            <div className="featuredlaunch_box">
                                <span>EARLY BIRD PRICE</span>
                                <div className="featuredlaunch_quantity">FREE</div>
                            </div>
                        </div>

             
            </div>
           

            
           
                    
        </div>
            
            
        
       
        )

}

export default Mint;
