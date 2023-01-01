import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimedNFTSupply,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useUnclaimedNFTSupply,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";

import { useMemo, useState } from "react";
import styles from "./Theme.module.css";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374";

const MintStart = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);

    const address = useAddress();
  
  
    const claimConditions = useClaimConditions(nftDrop);

   
    const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
    const claimedSupply = useClaimedNFTSupply(nftDrop);

    const numberClaimed = useMemo(() => {
        return BigNumber.from(claimedSupply.data || 0).toString();
    }, [claimedSupply]);

    const numberTotal = useMemo(() => {
        return BigNumber.from(claimedSupply.data || 0)
            .add(BigNumber.from(unclaimedSupply.data || 0))
            .toString();
    }, [claimedSupply.data, unclaimedSupply.data]);



   
    const isLoading = useMemo(() => {
        return (
           
            !nftDrop
        );
    }, [
      
        nftDrop,
        
    ]);


    return (

        <div className={
            styles.container
        }

        >
            <div className={
                styles.mintInfoContainer
            }

            > {
                    isLoading ? (
                        <h3 style={{ color: "white", textAlign: "center" }}>Loading...</h3>
                    ) : (
                        <>


                            <div >
                                {/* Image Preview of NFTs */}


                                    <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
                                        Claim Your Free Nft Now</h3>
                                    {/* Amount claimed so far */}
                                    <h4 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
                                        (Connect wallet or download new wallet to get started)</h4>
                                    <div className={styles.mintCompletionArea}>
                                        
                                    <div className={styles.mintAreaLeft}>
                                            <h4 style={{ color: "white", textAlign: "center",  }}>
                                            Total Minted</h4>
                                        </div>
                                       
                                    <div className={styles.mintAreaRight}>
                                        {claimedSupply && unclaimedSupply ? (
                                            <h6 style={{ color: "white", textAlign: "center" }}>
                                                    {numberClaimed} { "/" } {numberTotal}
                                            </h6>
                                        ) : (
                                            // Show loading state if we're still loading the supply
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </div>

                                {claimConditions.data?.length === 0 ||
                                    claimConditions.data?.every(
                                        (cc) => cc.maxClaimableSupply === "0"
                                    ) ? (
                                    <div>
                                        <h2>
                                            Already Claimed 1 free NFT
                                        </h2>
                                    </div>
                                ) : (
                                    <>


                                        <div className={styles.mintContainer}>
                                         
                                                            <Web3Button
                                                                colorMode="dark"
                                                                accentColor="#5204BF"
                                                                contractAddress="0x710E9161e8A768c0605335AB632361839f761374"
                                                                action={(contract) => contract.erc721.claim(1)}
                                                                onSuccess={() => {
                                                                    alert("NFT Claimed!");
                                                                   
                                                                }}
                                                                onError={(error) => {
                                                                    alert("Error Claiming Nft");
                                                                    console.error(error);
                                                                    alert(error);
                                                                }}
                                                            >
                                                                Claim An NFT
                                                            </Web3Button>
                                            
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )
                }

            </div >

        </div >
    );
};

export default MintStart;
