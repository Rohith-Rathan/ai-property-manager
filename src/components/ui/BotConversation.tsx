import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export interface BotMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp?: string;
  userInitials?: string;
  attachments?: {
    type: 'image' | 'file';
    count?: number;
    label?: string;
  }[];
}

export interface BotConversationProps {
  title?: string;
  messages: BotMessage[];
  className?: string;
}

export const BotConversation: React.FC<BotConversationProps> = ({
  title = 'AI Conversation',
  messages = [],
  className = ''
}) => {
  const renderMessage = (message: BotMessage) => {
    const isUser = message.type === 'user';
    
    return (
      <div
        key={message.id}
        className={`content-stretch flex gap-2 items-start ${isUser ? 'justify-end' : ''} relative shrink-0 w-full`}
      >
        {/* Avatar - Only show for bot messages */}
        {!isUser && (
          <div className="bg-gradient-brand-aurora box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-full shrink-0 w-6 h-6">
            <div className="relative shrink-0 w-3 h-3">
              <ThemeIcon 
                src="/assets/ai-efficiency-icon.svg" 
                alt="AI Assistant" 
                size="xs" 
                color="inverse"
              />
            </div>
          </div>
        )}

        {/* Message Content */}
        <div className={`basis-0 box-border content-stretch flex gap-2 grow items-center justify-center min-h-px min-w-px p-2 relative rounded-lg shrink-0 ${
          isUser 
            ? 'bg-gray-100' 
            : 'bg-gradient-brand-aurora-10'
        }`}>
          <div className="basis-0 font-normal grow leading-normal min-h-px min-w-px not-italic relative shrink-0 text-primary text-xs">
            {/* Parse content for formatting */}
            <div dangerouslySetInnerHTML={{ __html: formatMessageContent(message.content) }} />
            
            {/* Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2">
                {message.attachments.map((attachment, index) => (
                  <div key={index} className="text-tertiary text-xs">
                    {attachment.type === 'image' && attachment.count && (
                      <span>📷 {attachment.count} images</span>
                    )}
                    {attachment.label && !attachment.count && (
                      <span>{attachment.label}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* User Avatar - Only show for user messages */}
        {isUser && (
          <div className="bg-gradient-aqua-2 content-stretch flex items-center justify-center relative rounded-full shrink-0 w-6 h-6">
            <p className="font-normal leading-normal not-italic relative shrink-0 text-xs text-nowrap text-white whitespace-pre">
              {message.userInitials || 'JD'}
            </p>
          </div>
        )}
      </div>
    );
  };

  const formatMessageContent = (content: string): string => {
    // Convert markdown-like formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/\n/g, '<br />') // Line breaks
      .replace(/📸/g, '📸') // Emojis
      .replace(/👍/g, '👍')
      .replace(/🔔/g, '🔔')
      .replace(/🔴/g, '🔴');
  };

  return (
    <div className={`bg-white-95 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col gap-4 items-start p-8 relative rounded-xxxl w-full h-96 ${className}`}>
      {/* Header Section */}
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-2 items-center relative shrink-0">
          <div className="relative shrink-0 w-4 h-4">
            <ThemeIcon 
              src="/assets/ai-efficiency-icon.svg" 
              alt="AI Conversation" 
              size="sm" 
              color="primary"
            />
          </div>
          <p className="font-semibold leading-6 not-italic relative shrink-0 text-primary text-base text-nowrap whitespace-pre">
            {title}
          </p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex flex-col gap-4 items-start flex-1 w-full overflow-y-auto overflow-x-hidden">
        {messages.map(renderMessage)}
      </div>
    </div>
  );
};

export default BotConversation;
