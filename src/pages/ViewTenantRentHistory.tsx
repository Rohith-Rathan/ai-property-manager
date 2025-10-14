import React from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants with descriptive names - using complete asset mapping
const logoIcon = getAssetPath('9ae07b9f2b0ce8eb91e0422b181ec268539fb256');           // Header logo
const searchIcon = getAssetPath('883cd501fc86c09a6ac9236f472c914dc97e72de');         // Search bar icon
const notificationBellIcon = getAssetPath('380d7c57c8da998602c27a8540fb92067223abc1'); // Notification bell
const globeIcon = getAssetPath('387e1fdaba032cec9987ecb3f179369ebc062863');          // Globe/language icon
const moonThemeIcon = getAssetPath('c5897153a63e051430d72b0e62512742a6db262d');      // Theme toggle
const dashboardGridIcon = getAssetPath('80b75202df0baa408a9d13376ff37162cae3f6a6');  // Dashboard grid
const propertiesBuildingIcon = getAssetPath('d5f50011d879f7eeb838444199ed6cc8992be7ce'); // Properties building
const tenantsPersonIcon = getAssetPath('de8bf0318d24a35a22cb634ec71e1d3edd3cd21c');  // Tenants person (active)
const leasesDocumentIcon = getAssetPath('6d3c0204ac37f038cd091108592cad5b0022f2e9'); // Leases document
const maintenanceWrenchIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb'); // Maintenance wrench
const assetsBoxIcon = getAssetPath('850367b3d5bcc6795460767cc6f8c3748e42d0c6');      // Assets box
const historyClockIcon = getAssetPath('31bcd2bd8a20f979bbaf0dd99cf7a04a8abd86f3');   // History clock
const settingsGearIcon = getAssetPath('0f0383cf06f4eb1085b119a44e1d85a57f62ffa0');   // Settings gear
const backArrowIcon = getAssetPath('db2d219bf7ca866a4c7cc3d084b3fd4619321bf0');      // Back navigation
const locationPinIcon = getAssetPath('7ddb383b6724b3a3ae0a839da312c2c40c90e868');    // Location pin
const editPencilIcon = getAssetPath('52319417a31bbfed779edb880cba1406e3cb2a88');     // Edit pencil
const dollarRequestRentIcon = getAssetPath('f0936e44104717cb519ea7157ad2013e53f3963f'); // Request rent
const calendarExpiryIcon = getAssetPath('1c120c6c7dee64b387f06c815d8c1ae059eb2b07'); // Lease expiry
const dollarPaidIcon = getAssetPath('427b6999285a8baf78a416747f93c849977edb28');     // Rent paid
const usersGroupIcon = getAssetPath('2a57308041b3d6f98dfd9c06504690d8a2358f17');     // Co-tenants group
const wrenchTicketsIcon = getAssetPath('9546aa5fbd26ab7f8ec7514c04ea486025349b04');  // Maintenance tickets
const buildingPropertyIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2'); // Property building
const homeUnitIcon = getAssetPath('397449768111b648a778ff00f7f7adc0f33db310');       // Unit/home
const dollarRentIcon = getAssetPath('c508e0e9e06502acafd54f2124771cfa94ecbcc6');     // Monthly rent
const calendarDateIcon = getAssetPath('1d2f2cc176f13c65dcaf35f4f1987dbc5eb1c753');   // Lease dates
const documentFilesIcon = getAssetPath('0e57698f12072b290e200c386b094e0ea7b62ad7');  // Documents
const downloadIcon = getAssetPath('7001f64b0a974c8440c2f6da9af802d5329923df');       // Download action
const eyeViewIcon = getAssetPath('73084855d8c161a9911f10b1712f5a4e5563369e');        // View action

export default function ViewTenantRentHistory() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="View Tenant / Rent History" data-node-id="321:5991">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="321:5992">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="321:5993">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I321:5993;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I321:5993;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I321:5993;189:15785">
                    <img alt="" className="block max-w-none size-full" src={logoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I321:5993;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I321:5993;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I321:5993;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I321:5993;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I321:5993;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I321:5993;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I321:5993;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationBellIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I321:5993;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I321:5993;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I321:5993;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I321:5993;189:15807">
                      <img alt="" className="block max-w-none size-full" src={globeIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I321:5993;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I321:5993;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={moonThemeIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="321:5994">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="324:9962">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I324:9962;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardGridIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesBuildingIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I324:9962;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsPersonIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15648">
                      <img alt="" className="block max-w-none size-full" src={leasesDocumentIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15652">
                      <img alt="" className="block max-w-none size-full" src={maintenanceWrenchIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15655">
                      <img alt="" className="block max-w-none size-full" src={assetsBoxIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15674">
                      <img alt="" className="block max-w-none size-full" src={historyClockIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I324:9962;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I324:9962;189:15670">
                      <img alt="" className="block max-w-none size-full" src={settingsGearIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I324:9962;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I324:9962;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I324:9962;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I324:9962;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I324:9962;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[16px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="321:5996">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Container" data-node-id="321:5997">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Breadcrumb Container" data-node-id="321:5998">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="321:5999">
                      Tenant Management / Walter Carter
                    </p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex items-center justify-between p-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Container" data-node-id="321:6000">
                    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0" data-name="Container" data-node-id="321:6001">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6002">
                        <img alt="" className="block max-w-none size-full" src={backArrowIcon} />
                      </div>
                      <div className="relative shrink-0" data-name="Container" data-node-id="321:6005">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[259px]" data-name="Title Container" data-node-id="321:6006">
                            <p className="basis-0 font-['Inter:Bold',_sans-serif] font-bold grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px]" data-node-id="321:6007">
                              Walter Carter
                            </p>
                            <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="321:6008">
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="321:6009">
                                Active
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[274px]" data-name="Paragraph" data-node-id="321:6010">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6011">
                              <img alt="" className="block max-w-none size-full" src={locationPinIcon} />
                            </div>
                            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-500" data-node-id="321:6019">
                              <span>{`Sunset Apartments - `}</span>
                              <span className="font-medium">Unit 001</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-node-id="321:6020">
                      <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="321:6021">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6022">
                          <img alt="" className="block max-w-none size-full" src={editPencilIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="321:6025">
                          Edit Tenant
                        </p>
                      </div>
                      <div className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[10px] shrink-0 to-[#2b7fff]" data-name="Button" data-node-id="321:6348">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6357">
                          <img alt="" className="block max-w-none size-full" src={dollarRequestRentIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="321:6355">
                          Request Rent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Summary Cards" data-node-id="321:6026">
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="321:6027">
                    <div className="bg-gradient-to-l content-stretch flex from-[#ff6900] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#fb2c36]" data-name="Container" data-node-id="321:6028">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="321:6029">
                        <img alt="" className="block max-w-none size-full" src={calendarExpiryIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-name="Summary Card Content" data-node-id="321:6035">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="321:6036">
                        Lease Expiry
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="321:6037">
                        346 days
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="321:6038">
                    <div className="bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#c27aff]" data-name="Container" data-node-id="321:6039">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="321:6040">
                        <img alt="" className="block max-w-none size-full" src={dollarPaidIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-name="Summary Card Content" data-node-id="321:6043">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="321:6044">
                        Rent Paid
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="321:6045">
                        $18,400
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="321:6046">
                    <div className="bg-gradient-to-l content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#05df72]" data-name="Container" data-node-id="321:6047">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="321:6048">
                        <img alt="" className="block max-w-none size-full" src={usersGroupIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-name="Summary Card Content" data-node-id="321:6053">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="321:6054">
                        Co-tenants
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="321:6055">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="321:6056">
                    <div className="bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[40px] to-[#7c86ff]" data-name="Container" data-node-id="321:6057">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="321:6058">
                        <img alt="" className="block max-w-none size-full" src={wrenchTicketsIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-name="Summary Card Content" data-node-id="321:6060">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="321:6061">
                        Maintenance Tickets
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="321:6062">
                        2
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative rounded-[24px] shrink-0 w-full" data-node-id="321:6063">
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid h-full min-w-[288px] relative rounded-[24px] shrink-0 w-[320px]" data-name="Card" data-node-id="321:6064">
                    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start min-w-inherit overflow-x-clip overflow-y-auto p-[32px] relative w-[320px]">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="321:6065">
                        Overview
                      </p>
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="321:6066">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6067">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6068">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6069">
                              <img alt="" className="block max-w-none size-full" src={buildingPropertyIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6077">
                              Property
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6078">
                            Sunset Apartments
                          </p>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6079">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6080">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6081">
                              <img alt="" className="block max-w-none size-full" src={homeUnitIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6084">
                              Unit
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6085">
                            Unit 001
                          </p>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6086">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6087">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6088">
                              <img alt="" className="block max-w-none size-full" src={dollarRentIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6091">
                              Rent
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6092">
                            $800/mo
                          </p>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6093">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6094">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6095">
                              <img alt="" className="block max-w-none size-full" src={calendarDateIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6100">
                              Lease Start
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6101">
                            01-15-2025
                          </p>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6102">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6103">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6104">
                              <img alt="" className="block max-w-none size-full" src={calendarDateIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6109">
                              Lease End
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6110">
                            01-15-2026
                          </p>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="321:6111">
                          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="321:6112">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="321:6113">
                              <img alt="" className="block max-w-none size-full" src={documentFilesIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6119">
                              Documents
                            </p>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="321:6120">
                            2 Docs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-node-id="321:6121">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto p-[32px] relative size-full">
                      <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.1)] gap-[8px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 to-[rgba(43,127,255,0.1)]" data-name="View Properties Tabs" data-node-id="324:8551">
                        <div className="bg-gradient-to-b from-[rgba(124,134,255,0)] relative rounded-[9999px] shrink-0 to-[rgba(43,127,255,0)]" data-name="Primitive.button" data-node-id="I324:8551;324:8156">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="I324:8551;324:8157">
                              Lease Details
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[#7c86ff] relative rounded-[9999px] shrink-0 to-[#2b7fff]" data-name="Primitive.button" data-node-id="I324:8551;324:8158">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="I324:8551;324:8159">
                              Rent History
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[rgba(124,134,255,0)] relative rounded-[9999px] shrink-0 to-[rgba(43,127,255,0)]" data-name="Primitive.button" data-node-id="I324:8551;324:8160">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="I324:8551;324:8161">
                              Co-Tenants (3)
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[rgba(124,134,255,0)] relative rounded-[9999px] shrink-0 to-[rgba(43,127,255,0)]" data-name="Primitive.button" data-node-id="I324:8551;324:8162">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="I324:8551;324:8163">
                              Maintenance Tickets
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[rgba(124,134,255,0)] relative rounded-[9999px] shrink-0 to-[rgba(43,127,255,0)]" data-name="Primitive.button" data-node-id="I324:8551;324:8164">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="I324:8551;324:8165">
                              Communication History
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="324:6414">
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6395">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6385">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6368">
                              Due Date
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6386">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6387">
                              Status
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6388">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6389">
                              Rent Total
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0 w-[120px]" data-node-id="324:6393">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6394">
                              Actions
                            </p>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6405">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6406">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6407">
                              October 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6408">
                            <div className="bg-[rgba(153,161,175,0.1)] border border-[rgba(153,161,175,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6430">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1f242c] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6431">
                                  Upcoming
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6410">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6411">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0 w-[120px]" data-node-id="324:6412">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6554">
                              -
                            </p>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6433">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6434">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6435">
                              September 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6436">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6452">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6453">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6439">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6440">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:6441">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:6442">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:6443">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:6444">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:6448">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:6449">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6459">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6460">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6461">
                              Augest 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6462">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6463">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6464">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6465">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6466">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:8763">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:8764">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8765">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8766">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8770">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8771">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6478">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6479">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6480">
                              July 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6481">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6482">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6483">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6484">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6485">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:8775">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:8776">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8777">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8778">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8782">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8783">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6497">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6498">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6499">
                              June 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6500">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6501">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6502">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6503">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6504">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:8787">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:8788">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8789">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8790">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8794">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8795">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6516">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6517">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6518">
                              May 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6519">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6520">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6521">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6522">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6523">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:8799">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:8800">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8801">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8802">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8806">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8807">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.2)] border-solid box-border content-stretch flex items-center relative shrink-0 w-full" data-node-id="324:6535">
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6536">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6537">
                              April 10, 2025
                            </p>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6538">
                            <div className="bg-[rgba(0,201,80,0.1)] border border-[rgba(0,201,80,0.3)] border-solid h-[22px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="324:6539">
                              <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="324:6540">
                                  Paid
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex grow h-[56px] items-center min-h-px min-w-px px-[24px] py-[16px] relative shrink-0" data-node-id="324:6541">
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="324:6542">
                              $180.00
                            </p>
                          </div>
                          <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative shrink-0" data-node-id="324:8811">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="324:8812">
                              <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8813">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8814">
                                  <img alt="" className="block max-w-none size-full" src={downloadIcon} />
                                </div>
                              </div>
                              <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="324:8818">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="324:8819">
                                  <img alt="" className="block max-w-none size-full" src={eyeViewIcon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
