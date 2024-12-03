"use client"
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import React, { useEffect } from 'react'




 const SliderMain = () => {
  let [latest, setLatest] = React.useState<any[]>([])

  let q = [{q:1},{q:1},{q:1},{q:1},{q:1},{q:1},{q:1},{q:1}]

  useEffect(() => {
    fetch( siteMetadata.bkurl +`/get_allCoin`).then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setLatest(data.result)
      }
    )
  },[])
  
  return (
    <>
       {latest.length > 1 &&
         <div className='banner-wrapper'>
         <div className='wrapper mt-5'>
         <div className='images'>
         {latest.map(( src, index ) => (
           <div className=' w-[150px] h-[120px] mx-2 border bg-gray-200 hover:bg-gray-100 dark:bg-gray-950 rounded-lg dark:border-gray-950 dark:hover:bg-slate-800' key={index}>
             <Link href={'/coincup/' + src.id}>
             <div className='flex p-2'>
             <img src={src.icon} alt={src.id} className='w-[25px] h-[25px] '/>
             <span className='mt-1 ml-2 text-xs dark:text-slate-200' >{src.symbol}</span>
             </div>
             <div className='ml-2 mt-1 text-xs dark:text-slate-200'>
             {src.name}
             </div>
             <div className='ml-2 mt-1 text-xs dark:text-slate-200'>
             {src.price > 0.1 &&
             new Intl.NumberFormat('us-US', { style: 'currency', currency: 'usd' }).format(src.price)
             }
           {src.price < 0.1 &&
             src.price
           }
             </div>
             <div className='flex text-[10px] ml-2 mt-1'>
               {src.priceChange1h > 0 &&
                 <span className='ml-1 text-green-500'>
                   {src.priceChange1h}%(1h)
                 </span>
               }
               {src.priceChange1h < 0 &&
                 <span className='ml-1 text-red-500'>
                   {src.priceChange1h}%(1h)
                 </span>
               }
               {src.priceChange1d > 0 &&
                 <span className='ml-1 text-green-500'>
                   {src.priceChange1d}%(24h)
                 </span>
               }
               {src.priceChange1d < 0 &&
                 <span className='ml-1 text-red-500'>
                   {src.priceChange1d}%(24h)
                 </span>
               }
               {src.priceChange1w > 0 &&
                 <span className='ml-1 text-green-500'>
                   {src.priceChange1w}%(1w)
                 </span>
               }
               {src.priceChange1w < 0 &&
                 <span className='ml-1 text-red-500'>
                   {src.priceChange1w}%(1w)
                 </span>
               }
             </div>
             </Link>
           </div>
         ))}
         </div>
         <div className='images'>
         {latest.map(( src, index ) => (
         <div className=' w-[150px] h-[120px] mx-2 border bg-gray-200 hover:bg-gray-100 dark:bg-gray-950 rounded-lg dark:border-gray-950 dark:hover:bg-slate-800' key={index}>
         <Link href={'/coincup/' + src.id}>
         <div className='flex p-2'>
         <img src={src.icon} alt={src.id} className='w-[25px] h-[25px] '/>
         <span className='mt-1 ml-2 text-xs dark:text-slate-200' >{src.symbol}</span>
         </div>
         <div className='ml-2 mt-1 text-xs dark:text-slate-200'>
         {src.name}
         </div>
         <div className='ml-2 mt-1 text-xs dark:text-slate-200'>
         {src.price > 0.1 &&
         new Intl.NumberFormat('us-US', { style: 'currency', currency: 'usd' }).format(src.price)
         }
       {src.price < 0.1 &&
         src.price
       }
         </div>
         <div className='flex text-[10px] ml-2 mt-1'>
           {src.priceChange1h > 0 &&
             <span className='ml-1 text-green-500'>
               {src.priceChange1h}%(1h)
             </span>
           }
           {src.priceChange1h < 0 &&
             <span className='ml-1 text-red-500'>
               {src.priceChange1h}%(1h)
             </span>
           }
           {src.priceChange1d > 0 &&
             <span className='ml-1 text-green-500'>
               {src.priceChange1d}%(24h)
             </span>
           }
           {src.priceChange1d < 0 &&
             <span className='ml-1 text-red-500'>
               {src.priceChange1d}%(24h)
             </span>
           }
           {src.priceChange1w > 0 &&
             <span className='ml-1 text-green-500'>
               {src.priceChange1w}%(1w)
             </span>
           }
           {src.priceChange1w < 0 &&
             <span className='ml-1 text-red-500'>
               {src.priceChange1w}%(1w)
             </span>
           }
         </div>
         </Link>
         </div>
         ))}
         </div>
         </div>
       </div>
       }   
       {latest.length < 1 &&
       <div className='flex'>
        {q.map((q,index) => (
        <div className="skeleton-wrapper ">
          <div className="skeleton-slider-carusel"></div>
        </div>
        ))}
       
       </div>
        
       
        
        
       }
    </>
  );
}

export default SliderMain