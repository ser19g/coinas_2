"use client"
import React from 'react'
import bitcoin from '@/public/static/images/bitcoin.png'
import { useRouter } from 'next/navigation';


export default function page({params,}:{params:{slug:string}}) {

  const router = useRouter()
  
  return (
    <>
    <main className="mt-10">
      {/* breadcrumb start */}
    
  <nav className="text-sm sm:text-base  p-4 md:p-6 lg:p-6 ">
    <ul className="list-none p-0 inline-flex space-x-2">
      <li className="flex items-center" onClick={() => router.push('/')}>
        <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="cursor-pointer hover:fill-pink-700 transition-colors duration-300" fill="#4b5563"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>        <span className="mx-2">/</span>
      </li>
      <li className="flex items-center hover:cursor-pointer hover:fill-pink-700">
        <a onClick={() => router.push('/metaverse')} className="text-gray-600   duration-300">Metaverse</a>
        <span className="mx-2">/</span>
      </li>
      <li className="flex items-center">
        <span className="text-gray-500"><b>{params.slug}</b></span>
      </li>
    </ul>
  </nav>
    
{/* breadcrumb end */}
<div className="mb-4 md:mb-0 w-full mx-auto relative">
  <div className="px-4 lg:px-0">
    <h2 className="text-4xl font-semibold text-gray-800 leading-tight dark:text-slate-100 tracking-wide">
      Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
    </h2>
    <p className='mt-1'>12/2/24 10:00pm</p>
    <a 
      href="#"
      className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
    >
      Cryptocurrency
    </a>
  </div>

  <img src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover" />
</div>

<div className="flex flex-col lg:flex-row lg:space-x-12 ">

  <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 dark:text-slate-200 tracking-wide">
    <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
      justice. Six draw
      you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
      resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
      outlived peculiar rendered led six.</p>

    <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
      thoroughly
      partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
      attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
      expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
      uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
      newspaper in advantage frankness to concluded unwilling.</p>

    <p className="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
      discovered
      uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
      spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
      active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
      prospect no as raptures quitting.</p>

    <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
      Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
      expression
      unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
      Steepest speaking up attended it as. Made neat an on be gave show snug tore.
    </div>

    <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
      everything.
      Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
      is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
      among. Delightful remarkably new assistance saw literature mrs favourable.</p>

    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

    <p className="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
      oh he common
      future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
      simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

    <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
      Hundred no
      prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
      ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
      connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
      ask expense are compact. New all paid few hard pure she.</p>

    <p className="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
      tastes really
      so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
      elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
      in cold no less been sent hard hill.</p>

    <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
      make two real
      miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
      to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
      without me.</p>

  </div>

  <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
        <img src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
          <p className="font-semibold text-gray-600 text-xs"> Editor </p>
        </div>
      </div>
      <p className="text-gray-700 py-3">
        Mike writes about technology
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
      </p>
      <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
        Follow 
        <i className='bx bx-user-plus ml-2' ></i>
      </button>
    </div>
  </div>

</div>
</main>
    </>
  )
}
// {router.query.id}
