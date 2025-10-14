const imgIcon = "/assets/8e9f7f806084d3de113365a0759470c812c2864e.svg";
const imgIcon1 = "/assets/b2d67f85fb907015f4ab9ee4b411d10f7461a7a4.svg";
const imgIcon2 = "/assets/570562bdab185d048f5ac2c0767b4b5fb79062af.svg";
const imgIcon3 = "/assets/2c08c65ba84d97c660b9cc885af5ca09d53cdea9.svg";
const imgIcon4 = "/assets/3384c89641c91cff684b3dcbf5fd6e312713d58f.svg";
const imgIcon5 = "/assets/a6af28070bbfe7ed933370be257107a72dbc80a4.svg";
const imgIcon6 = "/assets/a2fafa4dbcbf61afa7b1dbcb268c239fe05caab6.svg";

export default function AddUnit() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start relative rounded-[24px] size-full" data-name="Add Unit" data-node-id="282:15411">
      <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center justify-between pb-[16px] pt-[32px] px-[32px] relative shrink-0 w-full" data-name="Header" data-node-id="282:15412">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="282:15413">
          Add Unit
        </p>
        <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="282:15414">
          <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="282:15415">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
      <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-[32px] py-[24px] relative shrink-0 w-full" data-name="LoginScreen" data-node-id="282:15518">
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Field Group" data-node-id="282:15640">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15641">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15642">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15643">
                Property Name *
              </p>
            </div>
            <div className="bg-[rgba(10,18,32,0.05)] border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15644">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Container" data-node-id="282:15645">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15646">
                  Sunset Apartments
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15647">
                <img alt="" className="block max-w-none size-full" src={imgIcon1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Field Group" data-node-id="282:15519">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15520">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15521">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15522">
                Unit Name *
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15523">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15524">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15525">
                  Enter unit name
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15526">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="282:15528">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15529">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15530">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15531">
                Unit Type *
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15532">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15533">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15534">
                  Studio
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15535">
                <img alt="" className="block max-w-none size-full" src={imgIcon3} />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15537">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15538">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15539">
                Bedrooms
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15540">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15541">
                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15542">
                  <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                </div>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15545">
                  Enter
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15546">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15548">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15549">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15550">
                Bathrooms
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15551">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15552">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15553">
                  Enter
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15554">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Field Group" data-node-id="282:15556">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15557">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15558">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15559">
                Total Sq Ft
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15560">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Container" data-node-id="282:15561">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15562">
                  Enter
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15563">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15565">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15566">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15567">
                Monthly Rent *
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15568">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15569">
                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15570">
                  <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                </div>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15573">
                  Enter
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15574">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15576">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15577">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15578">
                Security Deposit
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15579">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="282:15580">
                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15581">
                  <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                </div>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15584">
                  Enter
                </p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15585">
                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Field Group" data-node-id="282:15587">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="282:15588">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="282:15589">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15590">
                Description
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] h-[80px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container" data-node-id="282:15591">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15592">
                Unit description
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="282:15593">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15594">
            Unit Amenities
          </p>
          <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-node-id="282:15595">
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15596">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15597">
                Swimming Pool
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15598">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15599">
                Gym
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15600">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15601">
                Parking
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15602">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15603">
                Laundry
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15604">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15605">
                Security
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15606">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15607">
                Garden
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15608">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15609">
                Balcony
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15610">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15611">
                Air Conditioning
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15612">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15613">
                Heating
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15614">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15615">
                Internet
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15616">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15617">
                Pet Friendly
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15618">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15619">
                Elevator
              </p>
            </div>
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:15620">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15621">
                Concierge
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Image Upload Section" data-node-id="282:15622">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="282:15623">
            Unit Images
          </p>
          <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Image Upload Container" data-node-id="282:15624">
            <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[128px]" data-name="Button" data-node-id="282:15625">
              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15626">
                <img alt="" className="block max-w-none size-full" src={imgIcon5} />
              </div>
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15630">
                Upload
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px_0px_0px] border-[rgba(10,18,32,0.2)] border-solid box-border content-center cursor-pointer flex flex-wrap gap-[16px] items-center justify-center pb-[32px] pt-[33px] px-[32px] relative shrink-0 w-full" data-name="Container" data-node-id="282:15508">
        <button className="border border-[rgba(10,18,32,0.1)] border-solid relative rounded-[8px] shrink-0 w-[160px]" data-name="Button" data-node-id="282:15509">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-[160px]">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:15510">
              Cancel
            </p>
          </div>
        </button>
        <button className="bg-gradient-to-b from-[#7c86ff] relative rounded-[10px] shrink-0 to-[#2b7fff] w-[160px]" data-name="Button" data-node-id="282:15511">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-[160px]">
            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:15512">
              <img alt="" className="block max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre" data-node-id="282:15516">
              Save Asset
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}