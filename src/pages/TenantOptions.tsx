import React from 'react';

const imgIcon = "/assets/73084855d8c161a9911f10b1712f5a4e5563369e.svg";
const imgIcon1 = "/assets/8c23599e1d7e92e55418a1e1ffbdd778ec937473.svg";
const imgIcon2 = "/assets/c508e0e9e06502acafd54f2124771cfa94ecbcc6.svg";
const imgIcon3 = "/assets/324a62ec993f392b21c21e51c78a1d26a4bbb251.svg";

export default function TenantOptions() {
  return (
    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col items-start p-px relative rounded-[16px] size-full" data-name="Tenant Options" data-node-id="314:11282">
      <div className="relative shrink-0 w-full" data-name="View Details" data-node-id="314:11283">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="314:11284">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="314:11287">
            View Details
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-node-id="314:11288">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="314:11289">
            <img alt="" className="block max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="314:11292">
            Edit Tenant
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Schedule Maintenance" data-node-id="314:11293">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="314:11306">
            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="314:11297">
            Request Rent
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Remove Asset" data-node-id="314:11298">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="314:11299">
            <img alt="" className="block max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fb2c36] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="314:11305">
            Inactive Tenant
          </p>
        </div>
      </div>
    </div>
  );
}
