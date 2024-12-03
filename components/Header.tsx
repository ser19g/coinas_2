'use client';
import siteMetadata from '@/data/siteMetadata'
// import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import React from 'react';
import Link from 'next/link';
import Blockchain from '@/app/blockchain/page';
import { useRouter } from 'next/navigation';

export default function Header() {

  const router = useRouter()

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between pt-10 pb-2'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  const [status,setLike] = React.useState(false);
  let [all,setAll] = React.useState(false);
  let [bitcoin,setBitcoin] = React.useState(false);
  let [blockchain,setBlockchain] = React.useState(false);
  let [ethereum,setEthereum] = React.useState(false);
  let [defi,setDefi] = React.useState(false);
  let [altcoin,setAltcoin] = React.useState(false);
  let [regulation,setRegulation] = React.useState(false);
  let [nft,setNft] = React.useState(false);
  let [metaverse,setMetaverse] = React.useState(false);

  let [feature,setFeature] = React.useState(false)
  let [opinion,setOpinion] = React.useState(false)
  let [followup,setFollowup] = React.useState(false)
  let [markets,setMarkets] = React.useState(false)
  let [learn,setLearn] = React.useState(false)
  let [coincap,setCoincap] = React.useState(false)

    const onToggleNav = () => { setLike((e)=>{ e = !e;setAll(false);setBitcoin(false);setBlockchain(false);setEthereum(false);setDefi(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);setOpinion(false);setFollowup(false);setMarkets(false);setLearn(false);setCoincap(false);setFeature(false); return e }) }
    const onFeature = () => { setFeature((e)=>{ e = !e;setLike(false);setOpinion(false);setFollowup(false);setMarkets(false);setLearn(false);setCoincap(false); return e }) }
    const onOpinion = () => { setOpinion((e)=>{ e = !e;setLike(false);setFeature(false);setFollowup(false);setMarkets(false);setLearn(false);setCoincap(false); return e }) }
    const onFollowup = () => { setFollowup((e)=>{ e = !e;setLike(false);setFeature(false);setOpinion(false);setMarkets(false);setLearn(false);setCoincap(false); return e }) }
    const onMarkets = () => { setMarkets((e)=>{ e = !e;setLike(false);setFeature(false);setOpinion(false);setFollowup(false);setLearn(false);setCoincap(false); return e }) }
    const onLearn = () => { setLearn((e)=>{ e = !e;setLike(false);setFeature(false);setOpinion(false);setFollowup(false);setMarkets(false);setCoincap(false); return e }) }
    const onCoincap = () => { setCoincap((e)=>{ e = !e;setLike(false);setFeature(false);setOpinion(false);setFollowup(false);setMarkets(false);setLearn(false); return e }) }

    const onAll = () => { setAll(true);setBitcoin(false);setBlockchain(false);setEthereum(false);setDefi(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onBitcoin = () => { setBitcoin(true);setAll(false);setBlockchain(false);setEthereum(false);setDefi(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onBlockchain = () => { setBlockchain(true);setAll(false);setBitcoin(false);setEthereum(false);setDefi(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onEthereum = () => { setEthereum(true);setBlockchain(false);setAll(false);setBitcoin(false);setDefi(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onDefi = () => { setDefi(true);setEthereum(false);setBlockchain(false);setAll(false);setBitcoin(false);setAltcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onAltcoin = () => { setAltcoin(true);setDefi(false);setEthereum(false);setBlockchain(false);setAll(false);setBitcoin(false);setRegulation(false);setNft(false);setMetaverse(false);}
    const onRegulation = () => { setRegulation(true);setAltcoin(false);setDefi(false);setEthereum(false);setBlockchain(false);setAll(false);setBitcoin(false);setNft(false);setMetaverse(false);}
    const onNft = () => { setNft(true);setRegulation(false);setAltcoin(false);setDefi(false);setEthereum(false);setBlockchain(false);setAll(false);setBitcoin(false);setMetaverse(false);}
    const onMetaverse = () => { setMetaverse(true);setNft(false);setRegulation(false);setAltcoin(false);setDefi(false);setEthereum(false);setBlockchain(false);setAll(false);setBitcoin(false);}
  
  return (
    <>
    <header className={headerClass}>
      <Link href="/" >
        <div className="flex items-center justify-between">
          <div className="mr-3">
          logo
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className=" h-6 text-2xl font-semibold ">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden xl:block max-w-50 items-center space-x-4 overflow-x-auto  sm:space-x-6 ">
        {status ? 
        <span onClick={() => router.push('/')}>
        <button onClick={onToggleNav}  className=" text-center inline-flex items-center bg-pink-700 p-1 rounded-md text-white">
        
        news
        {status ?
        <svg className="h-5 w-5 "  width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" /></svg>
        :
        <svg className="h-5 w-5 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
         }
        </button>
        </span>
        :
        <button  onClick={onToggleNav}  className=" text-center inline-flex items-center hover:bg-pink-700 p-1 rounded-md hover:text-white">
        news
        {status ?
        <svg className="h-5 w-5 "  width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" /></svg>
        :
        <svg className="h-5 w-5 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
         }
        </button>
        }
        {feature ?
        <button onClick={onFeature} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">feature</Link>
        </button>
        :
        <button onClick={onFeature} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/feature">feature</Link>
        </button>
        }
         {opinion ?
        <button onClick={onOpinion} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">opinion</Link>
        </button>
        :
        <button onClick={onOpinion} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/opinion">opinion</Link>
        </button>
        }
         {followup ?
        <button onClick={onFollowup} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">follow-up</Link>
        </button>
        :
        <button onClick={onFollowup} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/followup">follow-up</Link>
        </button>
        }
        {markets ?
        <button onClick={onMarkets} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">markets</Link>
        </button>
        :
        <button onClick={onMarkets} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/markets">markets</Link>
        </button>
        }
        {learn ?
        <button onClick={onLearn} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">learn</Link>
        </button>
        :
        <button onClick={onLearn} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/learn">learn</Link>
        </button>
        }
        {coincap ?
        <button onClick={onCoincap} className=' bg-pink-700 p-1 rounded-md text-white'>
        <Link href="/">coinCup</Link>
        </button>
        :
        <button onClick={onCoincap} className=' hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/coincup">coinCup</Link>
        </button>
        }
        
        
          {/* {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))} */}
            
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
      
    </header>
    <div>
      {status ?
      <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4 leading-3 lg:space-x-6 p-2 text-sm">
        {all ? 
            <button onClick={onAll} className='bg-pink-700 p-1 rounded-md text-white'>
              <Link href="/all">All</Link>
            </button>
             :
            <button onClick={onAll} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white bg-inherit'>
              <Link href="/all">All</Link>
            </button>
        }
        {bitcoin ? 
            <button onClick={onBitcoin} className='bg-pink-700 p-1 rounded-md text-white'>
              <Link href="/bitcoin">BITCOIN</Link>
            </button>
            :
            <button onClick={onBitcoin} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
              <Link href="/bitcoin">BITCOIN</Link>
            </button>
        }  
        {blockchain ?
            <button onClick={onBlockchain} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
              <Link href="/blockchain">BLOCKCHAIN</Link>
            </button>
            :
            <button onClick={onBlockchain} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
              <Link href="/blockchain">BLOCKCHAIN</Link>
            </button>
        }  
        {ethereum ?
            <button onClick={onEthereum} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/ethereum">ETHEREUM</Link>
            </button>
            :
            <button onClick={onEthereum} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
            <Link href="/ethereum">ETHEREUM</Link>
            </button>
        } 
        {defi ?
            <button onClick={onDefi} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/defi">DEFI</Link>
            </button>
            :
            <button onClick={onDefi} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
            <Link href="/defi">DEFI</Link>
            </button>
        }   
        {altcoin ?
            <button onClick={onAltcoin} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/altcoin">ALTCOIN</Link>
            </button>
            :
            <button onClick={onAltcoin} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
            <Link href="/altcoin">ALTCOIN</Link>
            </button>
        }  
        {regulation ?
            <button onClick={onRegulation} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/regulation">REGULATION</Link>
            </button>
            :
            <button onClick={onRegulation} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/regulation">REGULATION</Link>
          </button>
        }   
        {nft ?
            <button onClick={onNft} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/nft">NFT</Link>
            </button>
            :
            <button onClick={onNft} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
            <Link href="/nft">NFT</Link>
            </button>
        }   
        {metaverse ?
            <button onClick={onMetaverse} className='hover:cursor-pointer bg-pink-700 p-1 rounded-md text-white'>
            <Link href="/metaverse">METAVERSE</Link>
            </button>
            :
            <button onClick={onMetaverse} className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/metaverse">METAVERSE</Link>
          </button>
        }  
      </div>
      </div>
       :''
    } 
    </div>
    </>
  )
}


