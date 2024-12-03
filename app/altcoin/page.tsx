"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Altcoin() {
  
  const router = useRouter()

  return (
    <>
      {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
    <h2 className="mb-4 font-bold text-xl text-gray-600">Altcoin</h2>
    <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </a>
        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            
          </div>
        </div>
        <div className="py-4 px-3 dark:bg-slate-900">
          <h3 className="text-xs mb-2 font-medium dark:text-slate-100">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-rose-600 hover:text-rose-900" href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            
            
          </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
    </div> */}
    <section className="pt-5 lg:pt-20 pb-10 lg:pb-20">
   <div className="container">
      <div className="flex ">
         <div className="w-full px-4">
            <div className="text-left mx-auto mb-10 lg:mb-10 ">
               <span className="font-semibold text-lg text-primary mb-2 block">
               Altcoin
               </span>
               
               <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " onClick={() => router.push('/altcoin/yuiuyiu')}>
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " >
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " >
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " >
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " >
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-2 hover:cursor-pointer transform " >
            <div className="max-w-[370px] mx-auto ">
               <div className="rounded overflow-hidden mb-4 ">
                  <img
                     src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                     alt="image"
                     className="w-full transition duration-300 ease-in-out hover:scale-110"
                     />
               </div>
               <div>
                  <h3>
                     <a href="javascript:void(0)" className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl inline-block text-darkhover:text-primary">
                     Meet AutoManage, the best AI management tools
                     </a>
                  </h3>
                  <span className="bg-primary rounded inline-block text-center py-1 px-1 text-xs leading-loose font-semibold  mb-5" >
                  Dec 22, 2023
                  </span>
                  
                  {/* <p className="text-base text-body-color">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p> */}
               </div>
            </div>
         </div>
      </div>
   </div>
    </section>
    </>
  )
}
