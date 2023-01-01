import {
    ThirdwebNftMedia,
    useAddress,
    useMetamask,
    useTokenBalance,
    useOwnedNFTs,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import "./MintPage.css";

const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374";
const tokenContractAddress = "0xE9fd323D7B1e4cFd07C657E218F7da16efd6532f";
const stakingContractAddress = "0x08a5ce086d82f338AEDB3ACB958eb807C33Da7AD";


const Stake = () => {
    // Wallet Connection Hooks
    const address = useAddress();
    const connectWithMetamask = useMetamask();

    // Contract Hooks
    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );

    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );

    const { contract, isLoading } = useContract(stakingContractAddress);

    // Load Unstaked NFTs
    const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);

    // Load Balance of Token
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    ///////////////////////////////////////////////////////////////////////////
    // Custom contract functions
    ///////////////////////////////////////////////////////////////////////////
    const [stakedNfts, setStakedNfts] = useState<any[]>([]);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

    useEffect(() => {
        if (!contract) return;

        async function loadStakedNfts() {
            const stakedTokens = await contract?.call("getStakedTokens", address);

            // For each staked token, fetch it from the sdk
            const stakedNfts = await Promise.all(
                stakedTokens?.map(
                    async (stakedToken: { staker: string; tokenId: BigNumber }) => {
                        const nft = await nftDropContract?.get(stakedToken.tokenId);
                        return nft;
                    }
                )
            );

            setStakedNfts(stakedNfts);
            console.log("setStakedNfts", stakedNfts);
        }

        if (address) {
            loadStakedNfts();
        }
    }, [address, contract, nftDropContract]);

    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            const cr = await contract?.call("availableRewards", address);
            console.log("Loaded claimable rewards", cr);
            setClaimableRewards(cr);
        }

        loadClaimableRewards();
    }, [address, contract]);

    ///////////////////////////////////////////////////////////////////////////
    // Write Functions
    ///////////////////////////////////////////////////////////////////////////
    async function stakeNft(id: string) {
        if (!address) return;

        const isApproved = await nftDropContract?.isApproved(
            address,
            stakingContractAddress
        );
        // If not approved, request approval
        if (!isApproved) {
            await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
        }
        const stake = await contract?.call("stake", id);
    }

    async function withdraw(id: BigNumber) {
        const withdraw = await contract?.call("withdraw", id);
    }

    async function claimRewards() {
        const claim = await contract?.call("claimRewards");
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Stake Your NFTs</h1>

            <hr className={`${styles.divider} ${styles.spacerTop}`} />

            {!address ? (
                <button className={styles.mainButton} onClick={connectWithMetamask}>
                    Connect Wallet
                </button>
            ) : (
                <>
                    <h2>Your Tokens</h2>

                    <div className={styles.tokenGrid}>
                        <div className={styles.tokenItem}>
                            <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                            <p className={styles.tokenValue}>
                                <b>
                                    {!claimableRewards
                                        ? "Loading..."
                                        : ethers.utils.formatUnits(claimableRewards, 18)}
                                </b>{" "}
                                {tokenBalance?.symbol}
                            </p>
                        </div>
                        <div className={styles.tokenItem}>
                            <h3 className={styles.tokenLabel}>Current Balance</h3>
                            <p className={styles.tokenValue}>
                                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                            </p>
                        </div>
                    </div>

                    <button
                        className={`${styles.mainButton} ${styles.spacerTop}`}
                        onClick={() => claimRewards()}
                    >
                        Claim Rewards
                    </button>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />

                    <h2>Your Staked NFTs</h2>
                    <div className={styles.nftBoxGrid}>
                        {stakedNfts?.map((nft) => (
                            <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                    className={styles.nftMedia}
                                />
                                <h3>{nft.metadata.name}</h3>
                                <button
                                    className={`${styles.mainButton} ${styles.spacerBottom}`}
                                    onClick={() => withdraw(nft.metadata.id)}
                                >
                                    Withdraw
                                </button>
                               
                            </div>
                        ))}
                    </div>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />

                        <div className="featuredlaunch_leftCol " style={{ display: "flex", justifyContent: "center", marginTop: "10px", alignItems: "center" }}>
                            <div className=" containerMint">
                                <h3>Your Unstaked NFT</h3>
                               
                                <div className="nftBoxGrid">
                                    {ownedNfts?.map((nft) => (
                                        <div key={nft.metadata.id.toString()} className="nftBox">
                                            <ThirdwebNftMedia
                                                metadata={nft.metadata}
                                                className="nftMedia"
                                            />
                                            <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{nft.metadata.name}</h3>

                                            <button
                                                className="mainButton"
                                                onClick={() => stakeNft(nft.metadata.id)}
                                            >
                                                Stake
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                          

                        </div>
                </>
            )}
        </div>
    );
};

export default Stake;
