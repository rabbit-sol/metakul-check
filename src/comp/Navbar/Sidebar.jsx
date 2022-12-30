import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import { ConnectWallet } from "@thirdweb-dev/react";
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";
export default function Sidebar({ sidebarOpen, toggleSidebar }) {
    return (
        <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
            <SidebarHeader className="flexSpaceCenter">
                <div className="flexNullCenter">
                    <LogoIcon />
                    <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
                        Metakul
                    </h1>
                </div>
                <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
                    <CloseIcon />
                </CloseBtn>
            </SidebarHeader>

            <UlStyle className="flexNullCenter flexColumn">
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Home
                    </a>

                </li>
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/#about"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        About
                    </a>
                </li>
                
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/roadmap"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Roadmap
                    </a>
                </li>
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/#kul-team"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Team
                    </a>
                </li>
            
            
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/#footer"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Contact
                    </a>
                </li>
            </UlStyle>
            <UlStyle className="flexSpaceCenter">
                <li className="semiBold font20 pointer">
                    <a href="/mint" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
                       Mint
                    </a>
                </li>
                <li className="semiBold font20 pointer flexCenter">
                    <div className="radius8 border border-rounded" style={{ padding: "4px 4px", background: "#0d545ff0" }}>

                        <ConnectWallet className="wallet-btn " />
                    </div>
                </li>
            </UlStyle>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
