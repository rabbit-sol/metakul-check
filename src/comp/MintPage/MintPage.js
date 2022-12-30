
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Snackbar, Paper, LinearProgress, Chip } from "@material-ui/core";
import JoinGang from "../../comp/joinGang/joinGang";

import "./MintPage.css";




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




const Mint = () => {
    const [isActive, setIsActive] = useState(false);


    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2023, 0, 1, 14, 55, 0, 0)).getTime();
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

                        <CountDowns
                            date={currentDate + (launchDate - currentDate)}
                            onMount={({ completed }) => completed && setIsActive(true)}
                            onComplete={() => {
                                setIsActive(true);
                            }}
                            renderer={renderCounter}
                        />
                    </div>


                </MintButtonContainer>

            </div>
           
            <div className="featuredlaunch_leftCol" style={{ justifyContent: "center", alignItems: "center" }}>
                <h3 style={{ padding: "15px", marginTop: "-10px", color: "white", textAlign: "center" }}>
                    Get your wallet Ready for free nft and earn passive Crypto👇🏻</h3>
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
