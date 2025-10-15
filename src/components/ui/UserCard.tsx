import React from 'react';
import ThemeIcon from './ThemeIcon';
import { MoreActionsButton } from './MoreActionsButton';

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  initials: string;
  onMenuClick?: () => void;
  onMoreActions?: () => void;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  phone,
  initials,
  onMenuClick,
  onMoreActions,
  className = ''
}) => {
  return (
    <div className={`bg-gray-50 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start justify-center p-4 relative rounded-xxl size-full ${className}`}>
      <div className="relative shrink-0 w-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-between relative w-full">
          {/* User Details Section */}
          <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full max-w-sm">
            {/* Avatar */}
            <div className="bg-gradient-info-flow content-stretch flex items-center justify-center relative rounded-xxl shrink-0 w-10 h-10">
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-h5 text-nowrap text-static-white tracking-normal whitespace-pre">
                {initials}
              </p>
            </div>
            
            {/* User Info */}
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-sans font-normal leading-base not-italic relative shrink-0 text-primary text-h5 w-full">
                {name}
              </p>
              
              {/* Contact Information */}
              <div className="content-center flex flex-wrap gap-2 items-center relative shrink-0 w-full">
                {/* Email */}
                <div className="box-border content-stretch flex gap-2 items-center px-0 py-px relative shrink-0">
                  <div className="relative shrink-0 w-3 h-3">
                    <ThemeIcon 
                      src="/assets/3fa9b13ab8ace0e15e059c64cfe847f6ab65db15.svg" 
                      alt="Email" 
                      size="xs" 
                      color="tertiary" 
                    />
                  </div>
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small text-nowrap whitespace-pre">
                    {email}
                  </p>
                </div>
                
                {/* Phone */}
                <div className="box-border content-stretch flex gap-2 items-center px-0 py-px relative shrink-0">
                  <div className="relative shrink-0 w-3 h-3">
                    <ThemeIcon 
                      src="/assets/30ca31f42edc86fbd200d6c6af5214fb28adca7e.svg" 
                      alt="Phone" 
                      size="xs" 
                      color="tertiary" 
                    />
                  </div>
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small text-nowrap whitespace-pre">
                    {phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* More Actions Button */}
          {onMoreActions && (
            <MoreActionsButton 
              items={[
                { 
                  id: 'view-profile',
                  label: 'View Profile', 
                  icon: '/assets/view-details-icon.svg',
                  onClick: onMoreActions 
                },
                { 
                  id: 'edit-user',
                  label: 'Edit User', 
                  icon: '/assets/edit-property-icon.svg',
                  onClick: () => console.log('Edit user clicked') 
                },
                { 
                  id: 'send-email',
                  label: 'Send Email', 
                  icon: '/assets/email-icon.svg',
                  onClick: () => console.log('Send email clicked') 
                },
                { 
                  id: 'call-user',
                  label: 'Call User', 
                  icon: '/assets/phone-icon.svg',
                  onClick: () => console.log('Call user clicked') 
                }
              ]}
            />
          )}
          
          {/* Fallback Menu Button */}
          {!onMoreActions && onMenuClick && (
            <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6">
              <button 
                onClick={onMenuClick}
                className="block cursor-pointer relative shrink-0 w-4 h-4"
              >
                <ThemeIcon 
                  src="/assets/1f1cfc25eb2eae5af3fa71139b714c255a241a43.svg" 
                  alt="More options" 
                  size="sm" 
                  color="tertiary" 
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
