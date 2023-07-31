import bgMobile from './assets/images/bg-sidebar-mobile.svg';
import bgDesktop from './assets/images/bg-sidebar-desktop.svg';
import advanced from './assets/images/icon-advanced.svg';
import arcade from './assets/images/icon-arcade.svg';
import pro from './assets/images/icon-pro.svg';
import checkmark from './assets/images/icon-checkmark.svg';
import { useEffect, useState } from 'react';

export function AddOn(props: { title: string, subtitle: string, cost: number, suffix:string, addons:AddOn[], setAddons:Function}) {

  const addonInfo:AddOn = {
    name: props.title,
    cost: props.cost
  }

  // checks if addon is in state array
  function isAddonAdded() {
    for (let i = 0; i < props.addons.length; i++) {
      if (props.addons[i].name === props.title) {
        return true;
      }
    }
    return false;
  }

  function handleAddon() {
    if (isAddonAdded()) { 
      // REMOVE ADDON
      props.setAddons(props.addons.filter((addon) => addon.name !== props.title));
    } else {
      // ADD ADDON
      props.setAddons([...props.addons, addonInfo]);
    }
  }

  return (
    <div>
      <label className="cursor-pointer">
        <input type="checkbox" className="peer sr-only" name="plan" checked={isAddonAdded()} onChange={handleAddon}/>
        <div className="flex gap-3 justify-between w-full rounded-md bg-white p-4 text-light-gray transition-all hover:shadow peer-checked:bg-pastel-blue/20 peer-checked:border-purplish-blue border">
          <div className='flex flex-col'>
            <p className='font-bold text-marine-blue'>{props.title}</p>
            <p className='text-cool-gray text-sm'>{props.subtitle}</p>
          </div>
          <p className='text-sm self-center text-purplish-blue'>+${`${props.suffix === "mo" ? props.cost : props.cost * 10}/${props.suffix}`}</p>
        </div>
      </label>
    </div>
  )
}

export function Plan(props: { title: string, cost: number, icon: string, billing: string, setPlan:Function, setPlanCost:Function, planCost:number, plan: string, setBilling:Function, suffix: string }) {

  function handlePlan() {
    props.setPlan(props.title);
    props.setPlanCost(props.cost);
  }

  return (
    <div>
      <label className="cursor-pointer">
        <input type="radio" className="peer sr-only" name="plan" onChange={handlePlan} checked={props.plan === props.title}/>
        <div className="flex gap-3 w-full rounded-md bg-white p-4 text-light-gray transition-all hover:shadow peer-checked:bg-pastel-blue/20 peer-checked:border-purplish-blue border">
          <img src={props.icon} alt="gaming icon" />
          <div className='flex flex-col'>
            <p className='font-bold text-marine-blue'>{props.title}</p>
            <p className='text-cool-gray text-sm'>
              ${`${props.suffix === "mo" ? props.cost : props.cost * 10}/${props.suffix}`}
            </p>
            { props.suffix === "yr" && <p className='text-sm font-medium text-marine-blue'>2 months free</p>}
          </div>
        </div>
      </label>
    </div>
  )
}

export function Steps(props: { step:number, plan:string, planCost:number, billing:string, addons:AddOn[], setStep:Function, setPlan:Function, setPlanCost:Function, setBilling:Function, setAddons:Function, toggleBilling:Function }) {

  const monthly = props.billing === "Monthly";
  const suffix = props.billing === "Monthly" ? "mo" : "yr";

  function getTotal() {
    let total = 0;
    let addonsTotal = 0;
    for (let i = 0; i < props.addons.length; i++) {
      addonsTotal += props.addons[i].cost;
    }

    total = addonsTotal + props.planCost;

    if (monthly)
      return total;

    return total * 10;
  }

  return (
    <div className='mb-10'>
    {/* STEP ONE */}
    {props.step === 1 && (
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
    )}
    {/* STEP TWO */}
    {props.step === 2 && (
    <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg">
      <h1 className="font-bold text-marine-blue text-2xl">Select your plan</h1>
      <p className="font-regular text-base text-cool-gray">You have the option of monthly or yearly billing.</p>

      <div className='flex flex-col justify-between gap-3'>
        <Plan title='Arcade' cost={9} icon={arcade} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix}/>
        <Plan title='Advanced' cost={12} icon={advanced} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix}/>
        <Plan title='Pro' cost={15} icon={pro} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix}/>
      </div>

      {/* Plan type (monthly or yearly) */}
      <div className='flex items-center justify-center gap-5 bg-alabaster rounded-md h-12 font-bold text-cool-gray'>
        <p className={`${monthly && 'text-marine-blue'} text-cool-gray`}>Monthly</p>
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" checked={!monthly} onChange={() => props.toggleBilling()} className="sr-only peer"/>
        <div className={`w-12 h-6 bg-marine-blue peer-focus:outline-none    rounded-full peer peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-marine-blue after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marine-blue`}></div>
      </label>
        <p className={`${!monthly && 'text-marine-blue'}`}>Yearly</p>
      </div>
    </div>
    )}

    {/* STEP THREE */}
    {props.step === 3 && (
      <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg mb-20">
        <h1 className="font-bold text-marine-blue text-2xl">Pick add-ons</h1>
        <p className="font-regular text-base text-cool-gray">Add-ons help enhance your gaming experience.</p>

        <div className='flex flex-col justify-between gap-3'>
          <AddOn addons={props.addons} setAddons={props.setAddons} title='Online service' subtitle='Access to multiplayer games' cost={1} suffix={suffix} />
          <AddOn addons={props.addons} setAddons={props.setAddons} title='Larger Storage' subtitle='Extra 1TB of cloud save' cost={2} suffix={suffix} />
          <AddOn addons={props.addons} setAddons={props.setAddons} title='Customizable profile' subtitle='Custom theme on your profile' cost={2} suffix={suffix} />
        </div>
      </div>
    )}

    {/* STEP FOUR */}
    {props.step === 4 && (      
      <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg">
        <h1 className="font-bold text-marine-blue text-2xl">Finishing up</h1>
        <p className="font-regular text-base text-cool-gray">Double-check everything looks OK before confirming.</p>

        <div className='flex flex-col justify-between gap-3 bg-magnolia p-4'>
          <div className='flex justify-between items-center border-b pb-2'>
            <div className="flex flex-col">
              <p className='text-marine-blue font-bold'>{props.plan} ({props.billing})</p>
              <button className='self-start underline text-cool-gray' onClick={() => props.setStep(2)}>Change</button>
            </div>
            <p className='text-marine-blue font-bold'>                ${`${suffix === "mo" ? props.planCost : props.planCost * 10}/${suffix}`}</p>
          </div>
          {props.addons.map((addon) => (
            <div key={addon.name} className="flex justify-between">
              <p className='text-cool-gray'>{addon.name}</p>
              <p className='text-marine-blue'>
                ${`${suffix === "mo" ? addon.cost : addon.cost * 10}/${suffix}`}
              </p>
            </div>
          )
          )}
          
        </div>
          <div className='px-4 flex justify-between'>
            <p className='text-cool-gray'>Total (per {props.billing === 'Monthly' ? 'month' : 'year'})</p>
            <p className='text-purplish-blue font-bold'>+${getTotal()}/{suffix}</p>
          </div>
      </div>

    )}
    
  </div>
  );
}

interface AddOn {
  name: string,
  cost: number
}

function App() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState('Arcade');
  const [planCost, setPlanCost] = useState<number>(9);
  const [billing, setBilling] = useState('Monthly');
  const [addons, setAddons] = useState<Array<AddOn>>([]);

  function toggleBilling() {
    if (billing === "Monthly")
      setBilling("Yearly");
    else
      setBilling("Monthly");
  }

  return (
    <div className="h-[100%] min-h-screen font-primary bg-magnolia justify-center items-center mb-10">
      <div className="p-4">
        <div className="px-4 py-4 flex items-center justify-center gap-4
        ">
          <picture className="w-full absolute top-0 bg-blue-700 md:bg-black">
            <source media='(min-width: 768px)' srcSet={bgDesktop}></source>
            <img src={bgMobile} alt="" className='w-full'/>
          </picture>

          <div className='relative flex items-center justify-center gap-4 text-white'>
            <div className="flex gap-2 items-center">
              <p className={`${step === 1 ? "bg-white text-marine-blue" : "bg-transparent"} rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>1</p>
              <div className="uppercase hidden md:block">
                <p>Step 1</p>
                <p className="font-bold text-white">Your Info</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className={`${step === 2 ? "bg-white text-marine-blue" : "bg-transparent"} rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>2</p>
              <div className="uppercase hidden md:block">
                <p>Step 2</p>
                <p className="font-bold text-white">Select Plan</p>
              </div></div>
            <div className="flex gap-2 items-center">
              <p className={`${step === 3 ? "bg-white text-marine-blue" : "bg-transparent"} rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>3</p>
              <div className="uppercase hidden md:block">
                <p>Step 3</p>
                <p className="font-bold text-white">Add-ons</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className={`${step === 4 ? "bg-white text-marine-blue" : "bg-transparent"} rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>4</p>
              <div className="uppercase hidden md:block">
                <p>Step 4</p>
                <p className="font-bold text-white">Summary</p>
              </div>
            </div>
          </div>
        </div>

        <Steps step={step} plan={plan} planCost={planCost} billing={billing} addons={addons} setStep={setStep} setPlan={setPlan} setPlanCost={setPlanCost} setBilling={setBilling} setAddons={setAddons} toggleBilling={toggleBilling} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white py-9 flex items-center z-50">
        {step > 1 && (
          <button className='absolute left-[1rem] font-bold text-cool-gray' onClick={() => setStep(step-1)}>Go Back</button>
        )}
        {step === 4 ? (
          <button className='absolute right-[1rem] font-bold bg-purplish-blue px-4 py-2 rounded-md text-white'>Confirm</button>
        ) : (
          <button className="absolute right-[1rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium" onClick={() => setStep(step+1)}>Next Step</button>
        )}
      </div>
    </div>
  );
}

export default App;

// ETA 8 hours
// START AT 8PM -> 10PM
