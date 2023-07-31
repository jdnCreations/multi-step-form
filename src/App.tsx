import bgMobile from './assets/images/bg-sidebar-mobile.svg';
import bgDesktop from './assets/images/bg-sidebar-desktop.svg';
import {  useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Steps } from './components/Steps';

export interface IAddOn {
  name: string,
  cost: number
}

export type Inputs = {
  name: string,
  email: string,
  phone: string
}

function App() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState('Arcade');
  const [planCost, setPlanCost] = useState<number>(9);
  const [billing, setBilling] = useState('Monthly');
  const [addons, setAddons] = useState<Array<IAddOn>>([]);
  const [confirmed, setConfirmed] = useState(false);

  const { register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  function toggleBilling() {
    if (billing === "Monthly")
      setBilling("Yearly");
    else
      setBilling("Monthly");
  }

  return (
    <div className="h-[100%] min-h-screen font-primary items-center bg-magnolia justify-center mb-10 md:mb-0 md:flex">
      <div className="p-4 md:flex  md:max-w-[940px] md:bg-white md:rounded-lg md:gap-12">
        <div className="px-4 py-4 flex items-center md:relative md:block md:p-0 justify-center gap-4 md:max-w-[274px] h-full
        ">
          <picture className="w-full absolute md:relative top-0 md:h-full md:max-w-[100%]">
            <source media='(min-width: 768px)' srcSet={bgDesktop}></source>
            <img src={bgMobile} alt="" className='w-full'/>
          </picture>

          <div className='relative md:absolute md:top-0 flex md:flex-col md:items-start md:pl-6 md:pt-6 items-center justify-center gap-4 text-white'>
            <div className="flex gap-2 md:gap-4 items-center">
              <p className={`${step === 1 ? "bg-light-blue text-marine-blue border-light-blue" : "bg-transparent"} font-medium rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>1</p>
              <div className="uppercase hidden md:flex md:flex-col">
                <p className='text-cool-gray text-sm'>Step 1</p>
                <p className="font-bold text-white text-sm">Your Info</p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <p className={`${step === 2 ? "bg-light-blue border-light-blue text-marine-blue" : "bg-transparent"} font-medium rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>2</p>
              <div className="uppercase hidden md:flex md:flex-col">
                <p className='text-cool-gray text-sm'>Step 2</p>
                <p className="font-bold text-white text-sm">Select Plan</p>
              </div></div>
            <div className="flex gap-2 md:gap-4 items-center">
              <p className={`${step === 3 ? "bg-light-blue border-light-blue text-marine-blue" : "bg-transparent"} font-medium rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>3</p>
              <div className="uppercase hidden md:flex md:flex-col">
                <p className='text-cool-gray text-sm'>Step 3</p>
                <p className="font-bold text-white text-sm">Add-ons</p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <p className={`${step === 4 ? "bg-light-blue border-light-blue text-marine-blue" : "bg-transparent"} font-medium rounded-full border border-white h-8 aspect-square flex justify-center items-center`}>4</p>
              <div className="uppercase hidden md:flex md:flex-col">
                <p className='text-cool-gray text-sm'>Step 4</p>
                <p className="font-bold text-white text-sm">Summary</p>
              </div>
            </div>
          </div>
        </div>

        <Steps confirmed={confirmed} setConfirmed={setConfirmed} register={register} onSubmit={onSubmit} step={step} plan={plan} planCost={planCost} billing={billing} addons={addons} setStep={setStep} setPlan={setPlan} setPlanCost={setPlanCost} setBilling={setBilling} setAddons={setAddons} toggleBilling={toggleBilling} />
        
      </div>
      <div className={`${confirmed ? "hidden" : "flex"} md:hidden fixed bottom-0 left-0 w-full bg-white py-9 flex items-center z-50`}>
        {step > 1 && (
          <button className='absolute left-[1rem] font-bold text-cool-gray' onClick={() => setStep(step-1)}>Go Back</button>
        )}
        {step === 4 ? (
          <button className='absolute right-[1rem] font-bold bg-purplish-blue px-4 py-2 rounded-md text-white hover:bg-purplish-blue/75' onClick={() => setConfirmed(true)}>Confirm</button>
        ) : (
          <button form='info' type='submit' className="absolute right-[1rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium" 
          onClick={
            () => setStep(step+1)
          }>Next Step</button>
        )}
      </div>
    </div>
  );
}

export default App;
