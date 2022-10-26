import Nft1 from "../../assets/nft3.png";
import Nft2 from "../../assets/nft2.png";
import Nft3 from "../../assets/nft1.png";



import './NftShowcase.css'

;




const NftData = [
    {
        url: "https://raw.githubusercontent.com/rabbit-sol/metakul-nft/main/hero1.webp",
        name: "NFT one",
        id:1
    },
    {
        url: "https://raw.githubusercontent.com/rabbit-sol/metakul-nft/main/hero2.webp",
        name: "NFT two",
        id: 2
    },
    {
        url: "https://raw.githubusercontent.com/rabbit-sol/metakul-nft/main/hero4.webp",
        name: "NFT one",
        id: 3
    }

 
  
    
];

export default function NftShowCase() {
   



    return (
        <div className="Containershowcase" id="about">
            <div className="CardContainercase">
               

                {NftData.map((nft) => (
                    <div className="Cardcase">
                        <img className="CardImg" src={nft.url}/>
                        {/*<div className="CardTittlecase">{nft.name}</div>*/}
                    </div>
                ))}
              

            </div>
          
        </div>
    );
}
