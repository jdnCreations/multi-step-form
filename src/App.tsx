import bgMobile from './assets/images/bg-sidebar-mobile.svg';
import bgDesktop from './assets/images/bg-sidebar-desktop.svg';
import advanced from './assets/images/icon-advanced.svg';
import arcade from './assets/images/icon-arcade.svg';
import pro from './assets/images/icon-pro.svg';
import checkmark from './assets/images/icon-checkmark.svg';
import { useState } from 'react';

export function AddOn(props: { title: string, subtitle: string, cost: string}) {
  return (
    <div className='border border-light-gray rounded-md p-4 w-full flex gap-3 justify-between'>
      <div className='flex gap-3 items-center'>
        <div className='relative'>
          <input type="checkbox" className='appearance-none border h-6 w-6 rounded-md' />
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          </div>
        <div className='flex flex-col'>
          <p className='font-bold text-marine-blue'>{props.title}</p>
          <p className='text-cool-gray text-sm'>{props.subtitle}</p>
        </div>
      </div>
      <p className='text-sm self-center text-purplish-blue'>{props.cost}</p>
    </div>
  )
}

export function Plan(props: { title: string, cost: string, icon: string }) {
  return (
    <div className='border border-light-gray rounded-md p-4 w-full flex gap-3'>
      <img src={props.icon} alt="" />
      <div className='flex flex-col'>
        <p className='font-bold text-marine-blue'>{props.title}</p>
        <p className='text-cool-gray text-sm'>{props.cost}</p>
      </div>
    </div>
  )
}

export function Steps(props: { step:number }) {
  return (
    <>
    {/* STEP ONE */}
    <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg">
      <h1 className="font-bold text-marine-blue text-2xl">Personal info</h1>
      <p className="font-regular text-base text-cool-gray">Please provide your name, email address, and phone number.</p>

      <form action="" id="step-1" className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label className="text-marine-blue text-sm" htmlFor="name">Name</label>
          <input className='border rounded-md py-2 px-4 font-medium' type="text" name="name" placeholder='e.g. Stephen King'/>
        </div>

        <div className="flex flex-col">
          <label className="text-marine-blue text-sm" htmlFor="email">Email</label>
          <input className='border rounded-md py-2 px-4 font-medium' type="text" name="email" placeholder='e.g. stephenking@lorem.com'/>
        </div>

        <div className="flex flex-col">
          <label className="text-marine-blue text-sm" htmlFor="phone">Phone</label>
          <input className='border rounded-md py-2 px-4 font-medium' type="text" name="phone" placeholder='e.g. +1 234 567 890'/>
        </div>
      </form>
    </div>
    {/* STEP TWO */}
    <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg">
      <h1 className="font-bold text-marine-blue text-2xl">Select your plan</h1>
      <p className="font-regular text-base text-cool-gray">You have the option of monthly or yearly billing.</p>

      <div className='flex flex-col justify-between gap-3'>
        <Plan title='Arcade' cost='$9/mo' icon={arcade} />
        <Plan title='Advanced' cost='$12/mo' icon={advanced} />
        <Plan title='Pro' cost='$15/mo' icon={pro} />
      </div>

      {/* Plan type (monthly or yearly) */}
      <div className='flex items-center justify-center gap-5 bg-alabaster rounded-md h-12 font-bold text-cool-gray'>
        <p className='text-marine-blue'>Monthly</p>
        <div className='relative flex items-center px-1 rounded-full bg-marine-blue h-5 w-10'>
          <div className='absolute bg-white w-3 h-3 left-1 rounded-full flex items-center'></div>
        </div>
        <p>Yearly</p>
      </div>
    </div>

    {/* STEP THREE */}
    <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg mb-20">
      <h1 className="font-bold text-marine-blue text-2xl">Pick add-ons</h1>
      <p className="font-regular text-base text-cool-gray">Add-ons help enhance your gaming experience.</p>

      <div className='flex flex-col justify-between gap-3'>
        <AddOn title='Online service' subtitle='Access to multiplayer games' cost='$1/mo' />
        <AddOn title='Larger Storage' subtitle='Extra 1TB of cloud save' cost='$2/mo' />
        <AddOn title='Customizable profile' subtitle='Custom theme on your profile' cost='$2/mo' />
      </div>
    </div>

    {/* STEP FOUR */}
    <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg mb-20">
      <h1 className="font-bold text-marine-blue text-2xl">Finishing up</h1>
      <p className="font-regular text-base text-cool-gray">Double-check everything looks OK before confirming.</p>

      <div className='flex flex-col justify-between gap-3 bg-magnolia p-4'>
        <div className='flex justify-between items-center border-b pb-2'>
          <div className="flex flex-col">
            <p className='text-marine-blue font-bold'>Arcade (Monthly)</p>
            <button className='self-start underline text-cool-gray'>Change</button>
          </div>
          <p className='text-marine-blue font-bold'>$9/mo</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-cool-gray'>Online service</p>
          <p className='text-marine-blue'>+$1/mo</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-cool-gray'>Larger storgae</p>
          <p className='text-marine-blue'>+$2/mo</p>
        </div>
      </div>
        <div className='px-4 flex justify-between'>
          <p className='text-cool-gray'>Total (per month)</p>
          <p className='text-purplish-blue font-bold'>+$12/mo</p>
        </div>
    </div>
    
  </>
  );
}

function App() {
  const [step, setStep] = useState(1);


  return (
    <div className="h-full font-primary bg-magnolia justify-center items-center">
      <div className="p-4">
        <div className="px-4 py-4 flex items-center justify-center gap-4
        ">
          <picture className="w-full absolute top-0 bg-blue-700 md:bg-black">
            <source media='(min-width: 768px)' srcSet={bgDesktop}></source>
            <img src={bgMobile} alt="" className='w-full'/>
          </picture>

          <div className='relative flex items-center justify-center gap-4 text-white'>
            <div className="flex gap-2 items-center">
              <p className="rounded-full border border-white h-8 aspect-square flex justify-center items-center">1</p>
              <div className="uppercase hidden md:block">
                <p>Step 1</p>
                <p className="font-bold text-white">Your Info</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="rounded-full border border-white h-8 aspect-square flex justify-center items-center">2</p>
              <div className="uppercase hidden md:block">
                <p>Step 2</p>
                <p className="font-bold text-white">Select Plan</p>
              </div></div>
            <div className="flex gap-2 items-center">
              <p className="rounded-full border border-white h-8 aspect-square flex justify-center items-center">3</p>
              <div className="uppercase hidden md:block">
                <p>Step 3</p>
                <p className="font-bold text-white">Add-ons</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="rounded-full border border-white h-8 aspect-square flex justify-center items-center">4</p>
              <div className="uppercase hidden md:block">
                <p>Step 4</p>
                <p className="font-bold text-white">Summary</p>
              </div>
            </div>
          </div>
        </div>

        <Steps step={step} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white py-9 flex items-center z-50">
        {step > 1 && (
          <button className='absolute left-[1rem] font-bold text-cool-gray'>Go Back</button>
        )}
        {step === 4 ? (
          <button className='absolute right-[1rem] font-bold bg-purplish-blue px-4 py-2 rounded-md text-white'>Confirm</button>
        ) : (
          <button className="absolute right-[1rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium">Next Step</button>
        )}
      </div>
    </div>
  );
}

export default App;

// ETA 8 hours
// START AT 8PM -> 10PM
