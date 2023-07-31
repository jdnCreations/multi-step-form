import advanced from '../assets/images/icon-advanced.svg';
import arcade from '../assets/images/icon-arcade.svg';
import pro from '../assets/images/icon-pro.svg';
import thank from '../assets/images/icon-thank-you.svg';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import { Inputs, IAddOn } from '../App';
import { Plan } from './Plan';
import { AddOn } from './AddOn';


export function Steps(props: { confirmed: boolean; setConfirmed: Function; register: UseFormRegister<Inputs>; onSubmit: SubmitHandler<Inputs>; step: number; plan: string; planCost: number; billing: string; addons: IAddOn[]; setStep: Function; setPlan: Function; setPlanCost: Function; setBilling: Function; setAddons: Function; toggleBilling: Function; }) {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
    <div className='mb-10 md:mb-0'>
      {/* STEP ONE */}
      {props.step === 1 && (
        <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg md:shadow-none md:h-full md:mt-0">
          <h1 className="font-bold text-marine-blue text-2xl">Personal info</h1>
          <p className="font-regular text-base text-cool-gray">Please provide your name, email address, and phone number.</p>

          <form onSubmit={handleSubmit(onSubmit)} id="info" className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label className="text-marine-blue text-sm" htmlFor="name">Name</label>
              <input {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} className={`${errors.name && "border-red-500"} hover:cursor-pointer hover:border-purplish-blue text-marine-blue border rounded-md py-2 px-4 font-medium outline-none`} type="text" name="name" placeholder='e.g. Stephen King' />
              {errors.name && <p>{errors.name?.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-marine-blue text-sm" htmlFor="email">Email</label>
              <input {...register("email", { required: true })} className={`${errors.email && "border-red-500"} hover:cursor-pointer hover:border-purplish-blue text-marine-blue border rounded-md py-2 px-4 font-medium outline-none`} type="text" name="email" placeholder='e.g. stephenking@lorem.com' />
            </div>

            <div className="flex flex-col">
              <label className="text-marine-blue text-sm" htmlFor="phone">Phone</label>
              <input {...register("phone", { required: true })} className={`${errors.phone && "border-red-500"} hover:cursor-pointer hover:border-purplish-blue text-marine-blue border rounded-md py-2 px-4 font-medium outline-none`} type="text" name="phone" placeholder='e.g. +1 234 567 890' />
            </div>
          </form>
          <button form='info' type='submit' className="md:block hidden absolute bottom-[1.5rem] right-[1.5rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium"
            onClick={() => props.setStep(props.step + 1)}>Next Step</button>
        </div>
      )}
      {/* STEP TWO */}
      {props.step === 2 && (
        <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg md:shadow-none md:h-full md:mt-0">
          <h1 className="font-bold text-marine-blue text-2xl">Select your plan</h1>
          <p className="font-regular text-base text-cool-gray">You have the option of monthly or yearly billing.</p>

          <div className='flex flex-col justify-between gap-3'>
            <Plan title='Arcade' cost={9} icon={arcade} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix} />
            <Plan title='Advanced' cost={12} icon={advanced} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix} />
            <Plan title='Pro' cost={15} icon={pro} plan={props.plan} planCost={props.planCost} billing={props.billing} setBilling={props.setBilling} setPlan={props.setPlan} setPlanCost={props.setPlanCost} suffix={suffix} />

          </div>

          {/* Plan type (monthly or yearly) */}
          <div className='flex items-center justify-center gap-5 bg-alabaster rounded-md h-12 font-bold text-cool-gray'>
            <p className={`${monthly && 'text-marine-blue'} text-cool-gray`}>Monthly</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" checked={!monthly} onChange={() => props.toggleBilling()} className="sr-only peer" />
              <div className={`w-12 h-6 bg-marine-blue peer-focus:outline-none    rounded-full peer peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-marine-blue after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marine-blue`}></div>
            </label>
            <p className={`${!monthly && 'text-marine-blue'}`}>Yearly</p>
          </div>
          <div className={`md:flex absolute md:bottom-[1.5rem] left-[1rem] w-full bg-white hidden items-center z-50`}>
            {props.step > 1 && (
              <button className='absolute left-[1rem] font-bold text-cool-gray' onClick={() => props.setStep(props.step - 1)}>Go Back</button>
            )}
            <button form='info' type='submit' className="absolute right-[2.5rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium"
              onClick={() => props.setStep(props.step + 1)}>Next Step</button>
          </div>
        </div>
      )}

      {/* STEP THREE */}
      {props.step === 3 && (
        <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg mb-20 md:mb-0 md:shadow-none md:h-full md:mt-0">
          <h1 className="font-bold text-marine-blue text-2xl">Pick add-ons</h1>
          <p className="font-regular text-base text-cool-gray">Add-ons help enhance your gaming experience.</p>

          <div className='flex flex-col justify-between gap-3'>
            <AddOn addons={props.addons} setAddons={props.setAddons} title='Online service' subtitle='Access to multiplayer games' cost={1} suffix={suffix} />
            <AddOn addons={props.addons} setAddons={props.setAddons} title='Larger Storage' subtitle='Extra 1TB of cloud save' cost={2} suffix={suffix} />
            <AddOn addons={props.addons} setAddons={props.setAddons} title='Customizable profile' subtitle='Custom theme on your profile' cost={2} suffix={suffix} />
          </div>
          <div className={`md:flex absolute md:bottom-[1.5rem] left-[1rem] w-full bg-white hidden items-center z-50`}>
            {props.step > 1 && (
              <button className='absolute left-[1rem] font-bold text-cool-gray' onClick={() => props.setStep(props.step - 1)}>Go Back</button>
            )}
            <button form='info' type='submit' className="absolute right-[2.5rem] bg-marine-blue px-4 py-2 rounded-md text-white font-medium"
              onClick={() => props.setStep(props.step + 1)}>Next Step</button>
          </div>

        </div>
      )}


      {/* STEP FOUR */}
      {(props.step === 4 && !props.confirmed) && (
        <div className="bg-white rounded-xl flex flex-col px-6 py-8 relative z-10 mt-4 gap-4 shadow-lg md:mt-0 md:shadow-none md:h-full">
          <h1 className="font-bold text-marine-blue text-2xl">Finishing up</h1>
          <p className="font-regular text-base text-cool-gray">Double-check everything looks OK before confirming.</p>

          <div className='flex flex-col justify-between gap-3 bg-magnolia p-4'>
            <div className='flex justify-between items-center border-b pb-2'>
              <div className="flex flex-col">
                <p className='text-marine-blue font-bold'>{props.plan} ({props.billing})</p>
                <button className='self-start underline text-cool-gray hover:text-purplish-blue' onClick={() => props.setStep(2)}>Change</button>
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
          <div className={`absolute hidden md:flex bottom-0 left-0 w-full bg-white py-9 items-center z-50`}>
            <button className='absolute left-[1.5rem] font-bold text-cool-gray' onClick={() => props.setStep(props.step - 1)}>Go Back</button>
            <button className='absolute right-[1rem] font-bold bg-purplish-blue px-4 py-2 rounded-md text-white hover:bg-purplish-blue/75' onClick={() => props.setConfirmed(true)}>Confirm</button>
          </div>
        </div>
      )}

      {/* CONFIRMED */}
      {(props.confirmed && props.step === 4) && (
        <div className="bg-white rounded-xl flex flex-col px-6 py-20 relative z-10 mt-4 gap-4 shadow-lg items-center justify-center md:py-0 md:mt-0 md:shadow-none md:h-full md:max-w-[500px]">
          <img src={thank} alt="" className='w-12' />
          <h1 className='text-2xl font-bold text-marine-blue'>Thank you!</h1>
          <p className='text-cool-gray text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      )}
    </div>
  );
}
