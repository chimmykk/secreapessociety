import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC, useEffect, useState } from 'react';

export const Header: FC = () => {
    const [opacity, setOpacity] = useState<boolean>(false);
    useEffect(() => {
        window.onscroll = () => {
            let n
            if (window.pageYOffset >= 100) {
                if (!opacity) {
                    setOpacity(true)
                }
            } else {
                setOpacity(false)
            }            
        }
    }, []);
    return (
    <header id="hero" className="h-auto sm:h-[600px] md:h-[500px] xl:h-[900px] relative">
        <div className={opacity ? "header fixed top-0 left-0 right-0 mb-10 sm:mb-0 z-50 transition-all bg-carrarra shadow-lg py-2": "header fixed top-0 left-0 right-0 mb-10 sm:mb-0 z-50 transition-all py-5"}>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-12 gap-5 items-center">
                    <div className="col-span-12 sm:col-span-2 flex justify-center sm:block">
                        
                        <a href="#">
                            <img src="assets/img/logo.png" className="w-[100px] sm:w-auto max-w-[250px] sm:max-w-[100%]" alt="Logo"/>
                        </a>
                        
                    </div>
                    <div className="col-span-12 sm:col-span-7 lg:col-span-8">
                        <ul className="list-none flex md:gap-20 justify-center">
                        <li><a className="mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors" href="https://stake.babyapes.io/#/">Staking</a></li>
                            <li><a className="mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors" href="#rarity">Rarity</a></li>
                            <li><a className="mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors" href="#roadmap">Roadmap</a></li>
                            <li><a className="mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors" href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex justify-center sm:block">
                        <div className="relative sm:float-right">
                            <WalletMultiButton className="py-3 px-5 xl:p-5 hover:opacity-50 transition-opacity block"/>   
                        </div>                    
      
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-60 sm:pt-0 content flex flex-col sm:flex-1 h-full justify-center items-center text-center">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="top-text text-lg text-texasRose">Collection of 5,000 BabyApes</div>
                <div className="title text-lg sm:text-4xl xl:text-[56px] lg:leading-tight">algorithmically generated, <br/>cute and collectible <br/>living in the Solana Blockchain. </div>
                <div className="buttons gap-5 xs:flex justify-center mt-8">
                    <a href="https://twitter.com/BabyApesNFT" className="flex gap-2 text-white social-btn py-3 px-5 xl:p-5 min-w-[200px] sm:min-w-[260px] justify-center items-center transform hover:-translate-y-1 hover:shadow-xl transition-all mb-5 xs:mb-0">
                        <img src="assets/img/social-twitter.png" className="max-w-5 max-h-5" alt=""/>
                        Join our Twitter
                    </a>
                    <a href="https://discord.gg/babyapes" className="flex gap-2 text-white social-btn py-3 px-5 xl:p-5 min-w-[200px] sm:min-w-[260px] justify-center items-center transform hover:-translate-y-1 hover:shadow-xl transition-all">
                        <img src="assets/img/social-discord.png" className="max-w-5 max-h-5" alt=""/>
                        Join our Discord
                    </a>                        
                </div>
            </div>
        </div>


        <div className="container mx-auto relative bottom-0 left-0 right-0 z-[-1] lg:z-auto hidden sm:flex">
      
            <img src="assets/img/mascot_left.png" className="absolute bottom-0 left-0 max-w-[250px] xl:max-w-[400px] max-h-[200px] xl:max-h-[320px]" alt=""/>
 


            <img src="assets/img/mascot_right.png" className="absolute bottom-0 right-0 max-w-[250px] xl:max-w-[400px] max-h-[200px] xl:max-h-[320px]" alt=""/>
  
            </div>     
    </header>
    );
};
export default Header;