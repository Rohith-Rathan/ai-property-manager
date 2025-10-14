const imgIcon = "/assets/7125bccb8bad594a6a01faebb58d547f527b4920.svg";
const imgIcon1 = "/assets/5d5c2949b263b20567a63f78f8cf256f3598ab4b.svg";
const imgIcon2 = "/assets/7048031b3fabb140cea9563d447d80ec10c414d1.svg";
const imgIcon3 = "/assets/30ca31f42edc86fbd200d6c6af5214fb28adca7e.svg";
const imgIcon4 = "/assets/daeb9fb300a5aed159b0927a8bdd35eea3f55c89.svg";

export default function TenantMoreOptions() {
  return (
    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col items-start p-px relative rounded-[16px] size-full" data-name="Tenant More Options" data-node-id="274:9539">
      <div className="relative shrink-0 w-full" data-name="View Details" data-node-id="274:9540">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="274:9615">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="274:9544">
            Email
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-node-id="274:9545">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="274:9619">
            <img alt="" className="block max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="274:9549">
            SMS
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Schedule Maintenance" data-node-id="274:9550">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="274:9622">
            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="274:9554">
            Whatsapp
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Edit Asset" data-node-id="274:9625">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="274:9629">
            <img alt="" className="block max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="274:9628">
            Voice
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Remove Asset" data-node-id="274:9555">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="274:9556">
            <img alt="" className="block max-w-none size-full" src={imgIcon4} />
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fb2c36] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="274:9562">
            Remove Tenant
          </p>
        </div>
      </div>
    </div>
  );
}