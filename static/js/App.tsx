import React, { FC, useMemo } from 'react';
import Countdown from 'react-countdown';
import AOS from 'aos';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletExtensionWallet,
    getSolletWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import './App.css';
import 'aos/dist/aos.css';
import Header from './components/Header';
import MintBox from './components/MintBox';
import RarityBox from './components/RarityBox';
import { Toaster } from 'react-hot-toast';


//@ts-ignore
const timeRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div id="countdown" className="text-3xl sm:text-6xl">0d : 0h : 0m : 0s</div>;
  } else {
    return <div id="countdown" className="text-3xl sm:text-6xl">{days}d : {hours}h : {minutes}m : {seconds}s</div>;
  }
};
AOS.init();
export const App: FC = () => {
    const network = WalletAdapterNetwork.Mainnet;
    const wallets = useMemo(() => [
        getPhantomWallet(),
        getSolletWallet({ network }),
        getSolflareWallet(),
    ], [network]);

    return (
        <ConnectionProvider endpoint={"https://lokidfxnwlabdq.main.genesysgo.net:8899/"}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <Header/>
                  <div id="sectionOne" className="relative">
                    <div className="container mx-auto py-[40px] md:py-[100px] px-5 lg:px-0">
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div className="text-3xl md:text-5xl lg:text-[56px] md:leading-[60px] text-center md:text-start">BabyApes</div>
                            <img src="assets/img/section-1-img.png?1" className="max-w-full" alt=""/>
                            <div className="text-3xl md:text-5xl lg:text-[56px] md:leading-[60px] text-center md:text-start">living on <br/> <span className="text-texasRose">SOLANA</span></div>
                        </div>
                    </div>
                  </div>
                  <div id="sectionTwo" className="lg:bg-carrarraHigh">
                      <div className="container mx-auto md:h-[300px] relative px-5 lg:px-0">
                          <img src="assets/img/section-2-img.png" className="py-10 md:py-0 md:w-full md:absolute -top-8" alt=""/>
                      </div>
                  </div>
                  
                  <div id="sectionThree">
                      <div className="container mx-auto py-20 lg:pt-[300px] xl:pt-[500px] lg:pb-36 flex justify-center relative px-5 lg:px-0">

                          <div className="countdown-content text-center sm:text-left">
                          <span id="minting">&nbsp;</span>
                          <div className="text-texasRose text-lg">&nbsp;</div>
                              <div className="countdown-text my-3 text-lg sm:text-2xl">Time left to minting BabyApes</div>
                              <Countdown
                              date={1634317200000}
                              renderer={timeRenderer}
                              />
                    
                          </div>
                      </div>
                  </div>
                  <MintBox/>

                  <div id="sectionFive" className="relative">
                    <div className="container mx-auto py-36 relative px-5 lg:px-0">
                        <div className="text-2xl sm:text-4xl md:text-[56px] text-center sm:leading-tight mb-8">Say Hello! <br/> <span className="text-texasRose">BabyApes!</span></div>
                        <div className="grid grid-cols-12 gap-6 2xl:ml-56 2xl:-mr-56 mb-8">
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="100"
                            data-aos-duration="100">
                                <img src="assets/img/avatars/avatar-1.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #4566</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="200"
                            data-aos-duration="200">
                                <img src="assets/img/avatars/avatar-2.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #1268</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="300"
                            data-aos-duration="300">
                                <img src="assets/img/avatars/avatar-3.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #996</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="400"
                            data-aos-duration="400">
                                <img src="assets/img/avatars/avatar-4.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #869</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="500"
                            data-aos-duration="500">
                                <img src="assets/img/avatars/avatar-5.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #348</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-right" data-aos-offset="600"
                            data-aos-duration="600">
                                <img src="assets/img/avatars/avatar-6.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #3405</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 2xl:mr-52 2xl:-ml-52">
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="100"
                            data-aos-duration="100">
                                <img src="assets/img/avatars/avatar-7.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #4512</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="200"
                            data-aos-duration="200">
                                <img src="assets/img/avatars/avatar-8.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #1045</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="300"
                            data-aos-duration="300">
                                <img src="assets/img/avatars/avatar-9.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #765</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="400"
                            data-aos-duration="400">
                                <img src="assets/img/avatars/avatar-10.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #2315</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="500"
                            data-aos-duration="500">
                                <img src="assets/img/avatars/avatar-11.png" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #653</div>
                            </div>
                            <div className="col-span-6 sm:col-span-4 lg:col-span-2" data-aos="fade-left" data-aos-offset="600"
                            data-aos-duration="600">
                                <img src="assets/img/avatars/avatar-12.jpg" className="w-full xl:h-51 object-cover" alt=""/>
                                <div className="text-white name-box p-2 text-center mt-3">BabyApe #126</div>
                            </div>              
                        </div>
                        <span id="rarity">&nbsp;</span>
                    </div>
                </div>
                <RarityBox/>
                
                <div id="sectionSeven">
                    <div className="container mx-auto py-20 relative px-5 lg:px-0">
                        <div className="text-4xl xl:text-[64px] text-center mb-8">Roadmap</div>
                        <div className="grid grid-cols-12 justify-center">
                            <div className="col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14">
                                <div className="icon relative w-[60px] flex-shrink-0 items-center lg:flex hidden">
                                    <img src="assets/img/road-icon-active.png" className="w-[60px] h-[60px]" alt=""/>
                                </div>
                                <div className="content pt-5 pb-8 px-12 flex-1 relative">
                                    <span className="text-texasRose text-2xl block">01</span>
                                    <div className="text-2xl text-codGray mt-1">Launching</div>
                                    <div className="opacity-70 text-codGray text-lg my-3">Minting</div>
                                    <div className="opacity-70 text-codGray text-[14px]">Launch 5,000 BabyApes to the community</div>
                                    <img src="assets/img/tree.png" className="absolute -top-20 -right-11 z-[-9] w-[74px] h-[146px] hidden md:block" alt=""/>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3">
                                <div className="inside relative w-[60px] flex-shrink-0 items-center lg:flex hidden">
                                    <img src="assets/img/road-icon.png" className="w-[60px] h-[60px]" alt=""/>
                                </div>
                                <div className="content non-active pt-5 pb-8 px-12 flex-1 relative">
                                    <span className="text-texasRose text-2xl block">02</span>
                                    <div className="text-2xl text-codGray mt-1">Listing on secondary markets</div>
                                    <div className="opacity-70 text-codGray text-[14px]">Digitaleyes, more to be confirmed later.</div>
                                    <img src="assets/img/tree.png" className="absolute -bottom-5 -right-14 z-[-9] w-[100px] h-[197px] hidden md:block" alt=""/>
                                </div>
                            </div>     
                            
                            <div className="col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14">
                                <div className="icon full relative w-[60px] flex-shrink-0 items-center hidden lg:flex">
                                    <img src="assets/img/road-icon.png" className="w-[60px] h-[60px]" alt=""/>
                                </div>
                                <div className="content non-active pt-5 pb-8 px-12 flex-1 relative">
                                    <span className="text-texasRose text-2xl block">03</span>
                                    <div className="text-2xl text-codGray mt-1">Community Fund</div>
                                    <div className="opacity-70 text-codGray text-[14px]">25% of Creators' fee will go into the BabyApes Community Fund 💰. 100% of the Community Fund's allocation will be decided by holders of BabyApes. A DAO system will be set up and a fair voting system will be introduced.</div>
                                    <img src="assets/img/tree.png" className="absolute -bottom-5 -right-24 z-[-9] w-[100px] h-[197px] hidden md:block" alt=""/>                          

                                </div>
                            </div>  
                            
                            <div className="col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3">
             
                                <div className="inside relative w-[60px] flex-shrink-0 items-center hidden lg:flex">
                                    <img src="assets/img/road-icon.png" className="w-[60px] h-[60px]" alt=""/>
                                </div>
    

                                <div className="content non-active pt-5 pb-8 px-12 flex-1">
                  
                                    <span className="text-texasRose text-2xl block">04</span>
                                    <div className="text-2xl text-codGray mt-1">Launch Clothing Line</div>
                                    <div className="opacity-70 text-codGray text-[14px]">BabyApes Clothing line. A proportion of the initial sales will go into the following investments:<br/>
            # Product development for the BabyApes clothing line<br/>
            # BabyApes clothing line will go on sale on the website<br/>
            # Physical pop-up stores for clothing line launched in cities around the world, we will start in Asia and expand globally<br/> 
            # BabyApes mass marketing in popular cities, start in Asia and expand globally. Advertisement at art galleries, popular venues, zoos, BabyApes Graffiti around famous hip areas in the city<br/>
            # Collaboration with popular household premium brands (phone cases - like Casetify) and move towards luxury brands in the future (e.g. Gucci)<br/><br/>

            <b>The long-term objective is to turn BabyApes into a multinational recognised brand similar to Supreme. The roadmap is aggressive, we know. At BabyApes, we are aiming for Mars, not the moon ** </b><br/><br/>

            Hypothetically, owning BabyApes now, might just mean one day you're an early investor in a unicorn startup. 
            </div>


                                </div>
            
                            </div>                     
                            
                                            <div className="col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14">
 
                                <div className="icon full relative w-[60px] flex-shrink-0 items-center hidden lg:flex">
                                    <img src="assets/img/road-icon.png" className="w-[60px] h-[60px]" alt=""/>
                                </div>
                                <div className="content non-active pt-5 pb-8 px-12 flex-1 relative">
   
                                    <span className="text-texasRose text-2xl block">05</span>

                                    <div className="text-2xl text-codGray mt-1">Future Projects</div>
                                    <div className="opacity-70 text-codGray text-[14px]">Collaborations, New Collection, Airdrops. The future is very exciting, lets make BabyApes into the next BlueChip NFT! <b>BabyApes Together Strong!</b></div>
                                    <img src="assets/img/tree.png" className="absolute -bottom-5 -right-24 z-[-9] w-[100px] h-[197px] hidden md:block" alt=""/>
                                </div>
                            </div> 
                            
                        </div>
                        <span id="faq">&nbsp;</span>
                    </div>

                </div>
                <div id="sectionEight" className="bg-carrarraHigh">
                    <div className="container mx-auto py-20 px-5 lg:px-0">
          
                        <div className="text-4xl xl:text-[64px] text-center mb-8">FAQ</div>
         
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 md:col-span-6">
                                <div className="faq-item p-5 pb-10">
                                    <div className="faq-title text-white inline-block py-4 px-10 mb-4">What is the total BabyApes supply?</div>
                                    <div className="text-codGray">The total supply of BabyApes is 5,000.</div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="faq-item p-5 pb-10">
                                    <div className="faq-title text-white inline-block py-4 px-10 mb-4">When?</div>
                                    <div className="text-codGray">BabyApes minting will begin on 15/10/2021 at 5PM UTC.</div>
                                </div>            
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="faq-item p-5 pb-10">
                                    <div className="faq-title text-white inline-block py-4 px-10 mb-4">What is the minting cost?</div>
                                    <div className="text-codGray">Each BabyApes will cost 0.69 SOL to mint.</div>
                                </div>                
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="faq-item p-5 pb-10">
                                    <div className="faq-title text-white inline-block py-4 px-10 mb-4">What Solana wallets can I use?</div>
                                    <div className="text-codGray">You will be able to use four of Solana’s main wallets Phantom, Sollet and Solflare.</div>
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 md:col-start-4">
                                <div className="faq-item p-5 pb-10">
                                    <div className="faq-title text-white inline-block py-4 px-10 mb-4">Where can I buy or sell my BabyApes?</div>
                                    <div className="text-codGray">After mint, it will be on DigitalEyes.</div>
                                </div>             
                            </div>
                        </div>
                    </div>
                </div>
                
                <footer id="footer" className="bg-emperor">
                    <div className="container mx-auto py-5 flex flex-col md:flex-row justify-between items-center px-5 lg:px-0">
                        <ul className="list-none flex sm:gap-5 md:gap-16">
                            <li><a href="#minting" className="mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity">Presale</a></li>
                            <li><a href="#rarity" className="mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity">Rarity</a></li>
                            <li><a href="#roadmap" className="mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity">Roadmap</a></li>
                            <li><a href="#faq" className="mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity">FAQ</a></li>
                        </ul>

                        <ul className="list-none flex sm:gap-5 mt-5 md:mt-0">
                            <li><a href="#" className="mx-3 sm:mx-0 opacity-90 hover:opacity-100 transition-opacity block"><img src="assets/img/social-twitter.png" alt=""/></a></li>
                            <li><a href="#" className="mx-3 sm:mx-0 opacity-90 hover:opacity-100 transition-opacity block"><img src="assets/img/social-discord.png" alt=""/></a></li>
                        </ul>
                    </div>
                </footer>
                </WalletModalProvider>
                <Toaster position="bottom-left" reverseOrder={false} />
            </WalletProvider>
        </ConnectionProvider>
    );
};
export default App;