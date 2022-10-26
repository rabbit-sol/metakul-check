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
import NavBar from "./comp/Navbar/navbar";

//pages
import Home from "./pages/home";
import Mint from "./pages/mint";


require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
            <Router>

                <NavBar

                />
                <Routes>

                    <Route id="home" path="/" element={<Home />} />
                    <Route id="mint" path="/mint" element={<Mint />} />
                    
                </Routes>
              

                
               
              

                

              
            </Router>
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


