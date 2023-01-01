import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import footer from "./Footer"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
const activeChainId = ChainId.Polygon


ReactDOM.render(
    <React.StrictMode>
        <ThirdwebProvider
            sdkOptions={{
                gasless: {
                    biconomy: {
                        apiKey: "ku_3WNqmF.81e25a3d-5ffe-4a82-ae72-11c6266981fc",
                        apiId: "5d2f9ed2-c6c3-4b34-baf9-a7332d6cccb3",                      
                    }
                },
            }}
            desiredChainId={activeChainId}
        >
            <App />
        </ThirdwebProvider>
    </React.StrictMode>,
    document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
