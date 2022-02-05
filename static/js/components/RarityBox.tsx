import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const RarityBox: FC = () => {
    const [selected, setSelected] = useState('Background')
    const [layers, setLayers] = useState<{
        [layer: string]: {
            name: string, 
            rarity: string
        }[];
    }>({'Background': [{'name': 'Mint Green', 'rarity': '12.68'}, {'name': 'Purple', 'rarity': '13.74'}, {'name': 'Pink', 'rarity': '13.20'}, {'name': 'Light Blue', 'rarity': '13.56'}, {'name': 'Melon Orange', 'rarity': '13.30'}, {'name': 'Yellow', 'rarity': '13.88'}, {'name': 'Dark Grey', 'rarity': '5.84'}, {'name': 'Blue', 'rarity': '13.82'}], 'Body': [{'name': 'Baby Ape Alien', 'rarity': '4.19'}, {'name': 'Baby Ape Dark Brown', 'rarity': '18.69'}, {'name': 'Baby Gorilla', 'rarity': '18.97'}, {'name': 'Baby Ape Purple', 'rarity': '9.51'}, {'name': 'Baby Ape', 'rarity': '19.11'}, {'name': 'Baby Ape Fire', 'rarity': '6.02'}, {'name': 'Baby Ape Zombie', 'rarity': '6.60'}, {'name': 'Baby Ape Albino', 'rarity': '5.64'}, {'name': 'Baby Ape Skeleton', 'rarity': '1.34'}, {'name': 'Baby Ape Neon Green', 'rarity': '8.24'}, {'name': 'Baby Ape Solana', 'rarity': '1.68'}], 'Headwear': [{'name': 'Front Red Cap', 'rarity': '3.85'}, {'name': 'Neon Blue Headband', 'rarity': '2.97'}, {'name': 'Purple White Cap', 'rarity': '2.11'}, {'name': 'Sumbrero', 'rarity': '3.25'}, {'name': 'Red White Cap', 'rarity': '2.39'}, {'name': 'Sorting Blue Hat', 'rarity': '1.46'}, {'name': 'Purple Sorcerer Hat', 'rarity': '2.47'}, {'name': 'Straw Hat', 'rarity': '5.42'}, {'name': 'Halo', 'rarity': '1.54'}, {'name': 'Neon Green Headband', 'rarity': '2.63'}, {'name': 'Toque Blanche', 'rarity': '3.53'}, {'name': 'Backward Red Cap', 'rarity': '3.47'}, {'name': 'Blue Bandanna', 'rarity': '1.93'}, {'name': 'Black Detective Hat', 'rarity': '3.35'}, {'name': 'Camo White Cap', 'rarity': '3.51'}, {'name': 'Camo Cap', 'rarity': '4.29'}, {'name': 'Red Headband', 'rarity': '2.89'}, {'name': 'Black White Cap', 'rarity': '2.27'}, {'name': 'To The Moon Black Cap', 'rarity': '1.00'}, {'name': 'Sorting Purple Hat', 'rarity': '1.81'}, {'name': 'Red Bandanna', 'rarity': '2.55'}, {'name': 'Police Hat', 'rarity': '1.44'}, {'name': 'Pilot Hat', 'rarity': '1.66'}, {'name': 'Blue Sorcerer Hat', 'rarity': '2.67'}, {'name': 'Neon Purple Headband', 'rarity': '2.99'}, {'name': 'Solana White Cap', 'rarity': '1.48'}, {'name': 'Yellow White Cap', 'rarity': '3.85'}, {'name': 'Black Bandanna', 'rarity': '3.17'}, {'name': 'Cowboy Hat', 'rarity': '2.43'}, {'name': 'To The Moon Red Cap', 'rarity': '0.96'}, {'name': 'Brown Bennie', 'rarity': '1.97'}, {'name': 'Top Hat', 'rarity': '3.01'}, {'name': 'Captain Sailor Hat', 'rarity': '1.14'}, {'name': 'Watermelon', 'rarity': '0.66'}, {'name': 'Super Ape Hair', 'rarity': '0.44'}, {'name': 'Viking Helmet', 'rarity': '0.82'}, {'name': 'Black Bennie', 'rarity': '1.89'}, {'name': 'Wukong Headband', 'rarity': '0.20'}, {'name': 'Backward Solana Cap', 'rarity': '1.62'}, {'name': 'Super God Ape Hair', 'rarity': '0.30'}, {'name': 'Ultra Ape Hair', 'rarity': '0.28'}, {'name': 'Solana Ape Hair', 'rarity': '0.30'}, {'name': 'Crown Jewel', 'rarity': '0.06'}], 'Ear': [{'name': 'Silver Earring', 'rarity': '12.56'}, {'name': 'Gold Earring', 'rarity': '6.62'}], 'Mouth': [{'name': 'Baby Tooth', 'rarity': '1.89'}, {'name': 'Cigarette', 'rarity': '10.69'}, {'name': 'Cigar', 'rarity': '10.05'}, {'name': 'Pipe', 'rarity': '2.69'}, {'name': 'Blush', 'rarity': '4.19'}, {'name': 'Baby Fangs', 'rarity': '1.68'}], 'Eyes': [{'name': 'Green Sunnies', 'rarity': '8.86'}, {'name': 'Black Sunnies', 'rarity': '4.67'}, {'name': 'Yellow Sunnies', 'rarity': '10.75'}, {'name': '3D Glasses', 'rarity': '2.77'}, {'name': 'Purple Sunnies', 'rarity': '6.54'}, {'name': 'Solana Sunnies', 'rarity': '2.17'}, {'name': 'Silver Viper', 'rarity': '1.32'}, {'name': 'Solana Viper', 'rarity': '1.14'}, {'name': 'Laser Eyes', 'rarity': '0.08'}]})
    
    return (
        <div id="sectionSix" className="relative">
        <div className="container mx-auto relative pb-40 px-5 lg:px-0">
            <div className="text-4xl xl:text-6xl text-center mb-6">Rarity</div>
            <ul className="list-none flex flex-col lg:flex-row sm:gap-6 justify-center tab-list mb-8">
                    {Object.keys(layers).map((layer, i) =>
                        <li onClick={() => setSelected(layer)} className={`my-3 sm:my-0 rarity-btn relative text-white h-[61px] leading-[61px] px-12 cursor-pointer transform transition-shadow hover:shadow-xl text-center sm:text-left ${layer == selected ? 'active' : ''}`}>{layer}</li>
                    )}
            </ul>
            <Swiper
            className="overflow-hidden pb-5"
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    320: {
                    slidesPerView: 1
                    },
                    479: {
                    slidesPerView: 2
                    },
                    639: {
                    slidesPerView: 3
                    },
                    1023: {
                    slidesPerView: 4
                    }
                }}
            >   
            {
            //@ts-ignore
            layers[selected].map((item, i) =>
                <SwiperSlide>
                    <div className="item-rarity py-[17px] px-[26px] relative">
                        <img src={`items/${selected}/${item.name}.png`} className="w-full xl:w-[234px] xl:h-[234px]" alt=""/>
                        <span className="absolute top-8 right-0 value-bg text-white py-2 px-4">{item.rarity}%</span>
                        <div className="absolute bottom-[-20px] left-2/4 transform -translate-x-2/4 rarity-name py-[8px] px-5 uppercase w-[150px] xl:w-auto text-center xl:text-start">{item.name}</div>
                    </div>
                </SwiperSlide>
            )}
            </Swiper>
    
            <span id="roadmap">&nbsp;</span> 
            </div>
        </div>
    );
};
export default RarityBox;