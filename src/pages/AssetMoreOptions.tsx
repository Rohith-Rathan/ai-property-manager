const imgIcon = "/assets/35b71607fde7aec76f1484f2fff2aa41e798bb65.svg";
const imgIcon1 = "/assets/d129fb0aa10875a98819af090b2404969ab0d3f9.svg";
const imgIcon2 = "/assets/85ec93cf71a85c65ec3d63eb25c9abc046602a62.svg";
const imgIcon3 = "/assets/daeb9fb300a5aed159b0927a8bdd35eea3f55c89.svg";

export default function AssetMoreOptions() {
  return (
    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col items-start p-px relative rounded-[16px] size-full" data-name="Assets More Options" data-node-id="276:10900">
      <div className="relative shrink-0 w-full" data-name="View Details" data-node-id="276:10901">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="276:10954">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="276:10905">
            View Details
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Edit Asset" data-node-id="276:10945">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="276:10946">
            <img alt="" className="block max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="276:10949">
            Edit Asset
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Schedule Maintenance" data-node-id="276:10930">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="276:10935">
            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="276:10934">
            Schedule Maintenance
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Remove Asset" data-node-id="276:10918">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="276:10919">
            <img alt="" className="block max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fb2c36] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="276:10925">
            Remove Asset
          </p>
        </div>
      </div>
    </div>
  );
}