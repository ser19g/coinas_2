import HeroOne from '@/components/HeroOne'
import { SliderMain } from '@/components/SliderMain'
import Image from 'next/image'
import React from 'react'

export default function Main() {
  return (
    <>
    {/* <SliderMain />
    <HeroOne /> */}
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-slate-400 hidden xl:block">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="lg:text-2xl sm:text-sm font-medium text-gray-900 title-font mb-2 dark:text-slate-100 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed dark:text-slate-300 hidden xl:block ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <span className='hidden xl:block'>
          <a className="text-pink-700 inline-flex items-center xl:mt-4 ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
