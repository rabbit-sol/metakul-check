import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,

} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from '@solana/web3.js';


import React, { FC, ReactNode, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Footer from "./comp/footer/footer";
import NavBar from "./comp/Navbar/navbar";
import NewsLetter from "./comp/newsLetter/newsLetter";
import Roadmaps from "./comp/Roadmaps/Roadmap";
//pages
import Home from "./pages/home";
import Mint from "./pages/mint";
import Roadmap from "./pages/roadmap";
require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
           

              

                <div className={"Container"}>
                    
                    <NewsLetter></NewsLetter>
                    <Footer></Footer>

                </div>

        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);


    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),

            new SolflareWalletAdapter({ network }),



        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};


