import React, { FC, useCallback, useEffect, useState } from 'react';
import { Wallet, web3 } from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { awaitTransactionSignatureConfirmation, CandyMachine, getCandyMachineState, mintOneToken } from "../utils/candy-machine";
import toast from 'react-hot-toast';

export const MintBox: FC = () => {
    const [ disabled, setDisabled ] = useState<boolean>(true);
    const [ available, setAvailable ] = useState<boolean>(true);
    const [ candyMachine, setCandyMachine ] = useState<CandyMachine>();
    const [ goLiveTime, setGoLiveDate ] = useState<Date>();

    const { connection } = useConnection();
    const wallet = useWallet();

    const onClick = useCallback(async () => {
        if (disabled) return;
        if (!wallet.publicKey) throw new WalletNotConnectedError();
        try {
            const txId = await mintOneToken(wallet.publicKey, candyMachine!)
            toast.promise(awaitTransactionSignatureConfirmation(
                txId,
                25000,
                connection,
                "singleGossip",
                false
            ), {
                loading: "Please, wait a seconds.",
                success: status => {
                    if (!status?.err) {
                        return <>Congratulations! You got the BabyApe.</>
                    }
                    return <b></b>
                },
                error: status => status
            })
        } catch(error: any) {
            let message = error.msg || error.message;
            if (error.code === 311) {
                message = `Ooops, Sold Out!.`;
                setAvailable(false);
                setDisabled(true);
            } else if (error.code === 312) {
                message = `Minting period hasn't started yet.`;
            }
            toast.error(message)
        }
    }, [connection, wallet, candyMachine, disabled]);

    useEffect(() => {
        if (!wallet.publicKey && !wallet.wallet) return;
        (async function () {
            const walletWrapper = {
                publicKey: wallet.publicKey,
                signAllTransactions: wallet.signAllTransactions,
                signTransaction: wallet.signTransaction,
            } as Wallet;
            const { candyMachine, itemsRemaining, itemsAvailable, itemsRedeemed, goLiveDate } = await getCandyMachineState(
                walletWrapper,
                new web3.PublicKey("4hghezJemiui58bG2dPaZBwcGbcJdYJNsBiZ5MCxAWSy"),
                connection,
            )

            if (!itemsRemaining) {
                setAvailable(false);
                setDisabled(true);
            } else {
                if (new Date(1634317200000) > new Date()) {
                    setDisabled(true);
                } else {
                    setDisabled(false);
                }
            }
            setGoLiveDate(goLiveDate);
            setCandyMachine(candyMachine);
        })()
    }, [wallet.publicKey, connection])

    useEffect(() => {
      const interval = setInterval(() => {
        if (new Date(1634317200000) > new Date()) {
            setDisabled(true)
        } else {
            if (disabled && available && candyMachine) {
                setDisabled(false)
            }
        }
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }, [disabled, available, candyMachine]);

    return (
        <div id="sectionFour" className="relative">
            <div className="container mx-auto justify-center flex px-5 lg:px-0">
                <div className="flex flex-col md:flex-row gap-14 items-center">
                    <div className="image-box relative w-[280px] min-w-[270px] md:max-w-[410px] lg:min-w-[400px] lg:-mt-16">
                        <img src="assets/img/presale-bg.png" className="select-none w-[280px] md:w-[405px] md:h-[260px] lg:w-auto lg:h-auto" alt=""/>
                        <img src="assets/img/babyapes.gif" className="absolute w-[205px] lg:w-[313px] left-[33px] top-[-24px]" alt=""/>
                        <div className="text-white absolute bottom-5 lg:bottom-9 xl:bottom-10 left-2/4 transform -translate-x-2/4">BabyApes</div>
                    </div>
                    <div className="content text-center md:text-left mt-5 md:mt-0">
                        <div className="uppercase text-3xl lg:text-6xl">Mint a Baby Ape</div>
                        <div className="uppercase text-texasRose text-3xl lg:text-[40px]">0.69 SOL</div>
                        <div className="text-lg"></div>
                        <button className={`wallet-btn py-5 px-10 ${!disabled || 'opacity-50 cursor-not-allowed'} transition-opacity uppercase inline-block mt-5 text-xl`} onClick={onClick}>{available ? 'Mint Now' : 'Sold Out'}</button>  
                    </div>
    
                </div>
            </div>
        </div>
    );
};
export default MintBox;