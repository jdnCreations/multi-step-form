
export function Plan(props: { title: string; cost: number; icon: string; billing: string; setPlan: Function; setPlanCost: Function; planCost: number; plan: string; setBilling: Function; suffix: string; }) {

  function handlePlan() {
    props.setPlan(props.title);
    props.setPlanCost(props.cost);
  }

  return (
    <div>
      <label className="cursor-pointer">
        <input type="radio" className="peer sr-only" name="plan" onChange={handlePlan} checked={props.plan === props.title} />
        <div className="flex gap-3 w-full rounded-md bg-white p-4 text-light-gray transition-all hover:border-purplish-blue peer-checked:bg-pastel-blue/20 peer-checked:border-purplish-blue border">
          <img src={props.icon} alt="gaming icon" />
          <div className='flex flex-col'>
            <p className='font-bold text-marine-blue'>{props.title}</p>
            <p className='text-cool-gray text-sm'>
              ${`${props.suffix === "mo" ? props.cost : props.cost * 10}/${props.suffix}`}
            </p>
            {props.suffix === "yr" && <p className='text-sm font-medium text-marine-blue'>2 months free</p>}
          </div>
        </div>
      </label>
    </div>
  );
}
