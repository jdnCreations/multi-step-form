import { IAddOn } from '../App';


export function AddOn(props: { title: string; subtitle: string; cost: number; suffix: string; addons: IAddOn[]; setAddons: Function; }) {

  const addonInfo: IAddOn = {
    name: props.title,
    cost: props.cost
  };

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
        <input type="checkbox" className="peer sr-only" name="plan" checked={isAddonAdded()} onChange={handleAddon} />
        <div className="flex gap-3 justify-between w-full rounded-md bg-white p-4 text-light-gray transition-all hover:border-purplish-blue peer-checked:bg-pastel-blue/20 peer-checked:border-purplish-blue border">
          <div className='flex flex-col'>
            <p className='font-bold text-marine-blue'>{props.title}</p>
            <p className='text-cool-gray text-sm'>{props.subtitle}</p>
          </div>
          <p className='text-sm self-center text-purplish-blue'>+${`${props.suffix === "mo" ? props.cost : props.cost * 10}/${props.suffix}`}</p>
        </div>
      </label>
    </div>
  );
}
