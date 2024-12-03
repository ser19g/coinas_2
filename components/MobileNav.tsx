'use client'

import { Dialog, Transition } from '@headlessui/react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Link from 'next/link';
import React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';


const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)
  const closeRef = useRef()
  
  const onToggleNav = () => {
    setNavShow((status) => {
      // if (status) {
      //   enableBodyScroll(navRef.current)
      // } else {
      //   // Prevent scrolling
      //   disableBodyScroll(navRef.current)
      // }
      return !status
    })
  }
  function close(){
   const myMaybeNullElement = window.document.getElementById("click")
   myMaybeNullElement?.click()
  }

  const [status,setLike] = useState(false);

  
    const onDropDown = () => {
      setLike((status)=>{
        status = !status
        return status
      })
    }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <Dialog.Panel className="fixed left-0 top-0 z-70 h-full w-full bg-white opacity-95 duration-300 dark:bg-gray-950 dark:opacity-[0.98]">
              <nav
                ref={navRef}
                className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left"
              >
                {/* {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))} */}
                <button onClick={onDropDown}  className=" text-center inline-flex items-center p-1 rounded-md  py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">
        news
        {status ?
        <svg className="h-5 w-5 "  width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" /></svg>
        :
        <svg className="h-5 w-5 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
         }
        </button>
        {/* dropdown news */}
        <div>
      {status ?
      <div className="ml-12">
      <ul className=" ">
        <li>
        <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
        <Link href="/all" onClick={close}>All</Link></div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
            <Link href="/bitcoin" onClick={close}>BITCOIN</Link>
          </div>
        </li> 
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/blockchain" onClick={close}>BLOCKCHAIN</Link>
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/ethereum" onClick={close}>ETHEREUM</Link>
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/defi" onClick={close}>DEFI</Link>
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/altcoin" onClick={close}>ALTCOIN</Link>  
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/regulation" onClick={close}>REGULATION</Link>  
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/nft" onClick={close}>NFT</Link>
          </div>
        </li>
        <li>
          <div className='hover:cursor-pointer hover:bg-pink-700 p-1 rounded-md hover:text-white'>
          <Link href="/metaverse" onClick={close}>METAVERSE</Link>
          </div>
        </li>  
      </ul>
      </div>
      :''
    }
      </div>
        {/* dropdown news end */}
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">feature</button>
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">opinion</button>
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">follow-up</button>
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">markets</button>
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">learn</button>
        <button className=" text-center inline-flex items-center p-1 rounded-md  mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0  dark:text-gray-100 ">coinCup</button>
              </nav>

              <button id='click'
                className="fixed right-4 top-7 z-80 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
