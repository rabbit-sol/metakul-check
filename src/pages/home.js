
import JoinGang from "../comp/joinGang/joinGang";
import HeroSection from "../comp/HeroSection/HeroSection"
import NftShowcase from "../comp/NftShowcase/NftShowcase"
import NftCase from "../comp/NftCase/NftCase"
import BlockChainCase from "../comp/BlockchainCase/BlockchainCase"
import Qna from "../comp/qna/qna";
import NewsLetter from "../comp/newsLetter/newsLetter";
import Roadmap from "../comp/Roadmap/Roadmap";
import Footer from "../comp/footer/footer";
const Home = () => {
    return (
        <div>
            <HeroSection style={{ marginBottom: "50px" }} ></HeroSection>
           
            <NftShowcase></NftShowcase>
            <div className="MainQnaContainer" >
                <Qna></Qna>
                <iframe className={"mainVideo"} height="500px" style={{ marginTop: "50px" }} src="https://www.youtube.com/embed/afdnbXXbBTg"  ></iframe>
            </div>
            

            <Footer></Footer>
            {/*
            <NftCase></NftCase>
            <BlockChainCase></BlockChainCase>
            */}

            
        </div>
    )
}

export default Home;
