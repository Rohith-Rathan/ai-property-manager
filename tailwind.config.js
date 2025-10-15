/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-static-white',
    'text-static-black',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ===== PRIMITIVE COLORS =====
        'gray-100': 'var(--color-gray-100)',
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-50': 'var(--color-gray-50)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'gray-600': 'var(--color-gray-600)',
        'gray-700': 'var(--color-gray-700)',
        'gray-800': 'var(--color-gray-800)',
        'gray-900': 'var(--color-gray-900)',

        // Text Colors (Fixed - removed text- prefix to avoid double prefix)
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)',
        'tertiary': 'var(--color-text-tertiary)',
        'inverse': 'var(--color-text-inverse)',
        'disabled': 'var(--color-text-disabled)',
        'accent': 'var(--color-text-accent)',
        'error': 'var(--color-text-error)',
        'muted': 'var(--color-text-muted)',

        // Static Colors (Fixed - removed text- prefix to avoid double prefix)
        'static-white': 'var(--color-static-white)',
        'static-black': 'var(--color-static-black)',

        // Navy Colors
        'navy-1': 'var(--color-navy-1)',

        // Green Colors
        'green-1': 'var(--color-green-1)',
        'green-2': 'var(--color-green-2)',
        'green-3': 'var(--color-green-3)',

        // Gold Colors
        'gold-500': 'var(--color-gold-500)',

        // Primary Colors
        'primary-1': 'var(--color-primary-1)',
        'primary-2': 'var(--color-primary-2)',
        'primary-3': 'var(--color-primary-3)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',

        // Accent Colors
        'accent-blue-1': 'var(--color-accent-blue-1)',
        'accent-blue-2': 'var(--color-accent-blue-2)',
        'accent-purple-1': 'var(--color-accent-purple-1)',
        'accent-purple-2': 'var(--color-accent-purple-2)',
        'accent-magenta-500': 'var(--color-accent-magenta-500)',
        'accent-red-1': 'var(--color-accent-red-1)',
        'accent-red-2': 'var(--color-accent-red-2)',
        'accent-pink-1': 'var(--color-accent-pink-1)',
        'accent-pink-2': 'var(--color-accent-pink-2)',

        // Background Colors
        'background-1': 'var(--color-background-1)',
        'background-2': 'var(--color-background-2)',
        'background-3': 'var(--color-background-3)',
        'background-default': 'var(--color-background-default)',

        // Orange Colors
        'orange-1': 'var(--color-orange-1)',
        'orange-2': 'var(--color-orange-2)',

        // Neon Colors
        'neon-magenta': 'var(--color-neon-magenta)',
        'neon-cyan': 'var(--color-neon-cyan)',
        'neon-teal-1': 'var(--color-neon-teal-1)',
        'neon-teal-2': 'var(--color-neon-teal-2)',
        'neon-lime-1': 'var(--color-neon-lime-1)',
        'neon-lime-2': 'var(--color-neon-lime-2)',

        // Neutral Colors
        'neutral-50': 'var(--color-neutral-50)',
        'neutral-100': 'var(--color-neutral-100)',
        'neutral-200': 'var(--color-neutral-200)',
        'neutral-300': 'var(--color-neutral-300)',
        'neutral-400': 'var(--color-neutral-400)',
        'neutral-500': 'var(--color-neutral-500)',
        'neutral-600': 'var(--color-neutral-600)',
        'neutral-700': 'var(--color-neutral-700)',
        'neutral-800': 'var(--color-neutral-800)',
        'neutral-900': 'var(--color-neutral-900)',

        // ===== SEMANTIC COLORS =====
        // Surface Colors
        'surface-primary': 'var(--color-surface-primary)',
        'surface-secondary': 'var(--color-surface-secondary)',
        'surface-tertiary': 'var(--color-surface-tertiary)',
        'surface-inverse': 'var(--color-surface-inverse)',

        // Brand Colors
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'brand-tertiary': 'var(--color-brand-tertiary)',

        // Accent Colors
        'accent-blue': 'var(--color-accent-blue)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'accent-purple': 'var(--color-accent-purple)',
        'accent-magenta': 'var(--color-accent-magenta)',
        'accent-red': 'var(--color-accent-red)',
        'accent-pink': 'var(--color-accent-pink)',

        // Status Colors
        'status-success': 'var(--color-status-success)',
        'status-warning': 'var(--color-status-warning)',
        'status-error': 'var(--color-status-error)',
        'status-info': 'var(--color-status-info)',

        // Border Colors
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-focus': 'var(--color-border-focus)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-default': 'var(--color-border-default)',
        'border-strong': 'var(--color-border-strong)',
        'border-muted': 'var(--color-border-muted)',
        'border-error': 'var(--color-border-error)',
        'border-success': 'var(--color-border-success)',
        'border-warning': 'var(--color-border-warning)',
        
        // Overlay Border Colors
        'overlays-white-inverse-5': 'var(--color-overlays-white-inverse-5)',
        'overlays-white-inverse-10': 'var(--color-overlays-white-inverse-10)',
        'overlays-white-inverse-20': 'var(--color-overlays-white-inverse-20)',

        // Static Colors (Duplicate removed - already defined above)

        // ===== OVERLAY COLORS =====
        // White Overlays
        'overlays-white-5': 'var(--color-overlays-white-5)',
        'white-5': 'var(--color-overlays-white-5)',
        'overlays-white-10': 'var(--color-overlays-white-10)',
        'white-10': 'var(--color-overlays-white-10)',
        'overlays-white-20': 'var(--color-overlays-white-20)',
        'overlays-white-30': 'var(--color-overlays-white-30)',
        'overlays-white-50': 'var(--color-overlays-white-50)',
        'overlays-white-60': 'var(--color-overlays-white-60)',
        'overlays-white-70': 'var(--color-overlays-white-70)',
        'overlays-white-75': 'var(--color-overlays-white-75)',
        'overlays-white-80': 'var(--color-overlays-white-80)',
        'overlays-white-90': 'var(--color-overlays-white-90)',
        'overlays-white-95': 'var(--color-overlays-white-95)',
        'overlays-white-100': 'var(--color-overlays-white-100)',

        // Black Overlays
        'overlays-black-5': 'var(--color-overlays-black-5)',
        'overlays-black-10': 'var(--color-overlays-black-10)',
        'overlays-black-20': 'var(--color-overlays-black-20)',
        'overlays-black-30': 'var(--color-overlays-black-30)',
        'overlays-black-50': 'var(--color-overlays-black-50)',
        'overlays-black-60': 'var(--color-overlays-black-60)',
        'overlays-black-70': 'var(--color-overlays-black-70)',
        'overlays-black-75': 'var(--color-overlays-black-75)',
        'overlays-black-80': 'var(--color-overlays-black-80)',
        'overlays-black-90': 'var(--color-overlays-black-90)',
        'overlays-black-95': 'var(--color-overlays-black-95)',
        'overlays-black-100': 'var(--color-overlays-black-100)',

        // Black Inverse Overlays
        'overlays-black-inverse-5': 'var(--color-overlays-black-inverse-5)',
        'overlays-black-inverse-10': 'var(--color-overlays-black-inverse-10)',
        'overlays-black-inverse-20': 'var(--color-overlays-black-inverse-20)',
        'overlays-black-inverse-30': 'var(--color-overlays-black-inverse-30)',
        'overlays-black-inverse-50': 'var(--color-overlays-black-inverse-50)',
        'overlays-black-inverse-60': 'var(--color-overlays-black-inverse-60)',
        'overlays-black-inverse-70': 'var(--color-overlays-black-inverse-70)',
        'overlays-black-inverse-75': 'var(--color-overlays-black-inverse-75)',
        'overlays-black-inverse-80': 'var(--color-overlays-black-inverse-80)',
        'overlays-black-inverse-90': 'var(--color-overlays-black-inverse-90)',
        'overlays-black-inverse-95': 'var(--color-overlays-black-inverse-95)',
        'overlays-black-inverse-100': 'var(--color-overlays-black-inverse-100)',

        // White Inverse Overlays
        'overlays-white-inverse-5': 'var(--color-overlays-white-inverse-5)',
        'overlays-white-inverse-10': 'var(--color-overlays-white-inverse-10)',
        'overlays-white-inverse-20': 'var(--color-overlays-white-inverse-20)',
        'overlays-white-inverse-30': 'var(--color-overlays-white-inverse-30)',
        'overlays-white-inverse-50': 'var(--color-overlays-white-inverse-50)',
        'overlays-white-inverse-60': 'var(--color-overlays-white-inverse-60)',
        'overlays-white-inverse-70': 'var(--color-overlays-white-inverse-70)',
        'overlays-white-inverse-75': 'var(--color-overlays-white-inverse-75)',
        'overlays-white-inverse-80': 'var(--color-overlays-white-inverse-80)',
        'overlays-white-inverse-90': 'var(--color-overlays-white-inverse-90)',
        'overlays-white-inverse-95': 'var(--color-overlays-white-inverse-95)',
        'overlays-white-inverse-100': 'var(--color-overlays-white-inverse-100)',

        // Warning Overlays
        'overlays-warning-5': 'var(--color-overlays-warning-5)',
        'overlays-warning-10': 'var(--color-overlays-warning-10)',
        'overlays-warning-20': 'var(--color-overlays-warning-20)',
        'overlays-warning-30': 'var(--color-overlays-warning-30)',
        'overlays-warning-50': 'var(--color-overlays-warning-50)',
        'overlays-warning-60': 'var(--color-overlays-warning-60)',
        'overlays-warning-70': 'var(--color-overlays-warning-70)',
        'overlays-warning-75': 'var(--color-overlays-warning-75)',
        'overlays-warning-80': 'var(--color-overlays-warning-80)',
        'overlays-warning-90': 'var(--color-overlays-warning-90)',
        'overlays-warning-95': 'var(--color-overlays-warning-95)',
        'overlays-warning-100': 'var(--color-overlays-warning-100)',

        // Success Overlays
        'overlays-success-5': 'var(--color-overlays-success-5)',
        'overlays-success-10': 'var(--color-overlays-success-10)',
        'overlays-success-20': 'var(--color-overlays-success-20)',
        'overlays-success-30': 'var(--color-overlays-success-30)',
        'overlays-success-50': 'var(--color-overlays-success-50)',
        'overlays-success-60': 'var(--color-overlays-success-60)',
        'overlays-success-70': 'var(--color-overlays-success-70)',
        'overlays-success-75': 'var(--color-overlays-success-75)',
        'overlays-success-80': 'var(--color-overlays-success-80)',
        'overlays-success-90': 'var(--color-overlays-success-90)',
        'overlays-success-95': 'var(--color-overlays-success-95)',
        'overlays-success-100': 'var(--color-overlays-success-100)',

        // Primary Overlays
        'overlays-primary-5': 'var(--color-overlays-primary-5)',
        'overlays-primary-10': 'var(--color-overlays-primary-10)',
        'overlays-primary-20': 'var(--color-overlays-primary-20)',
        'overlays-primary-30': 'var(--color-overlays-primary-30)',
        'overlays-primary-50': 'var(--color-overlays-primary-50)',
        'overlays-primary-60': 'var(--color-overlays-primary-60)',
        'overlays-primary-70': 'var(--color-overlays-primary-70)',
        'overlays-primary-75': 'var(--color-overlays-primary-75)',
        'overlays-primary-80': 'var(--color-overlays-primary-80)',
        'overlays-primary-90': 'var(--color-overlays-primary-90)',
        'overlays-primary-95': 'var(--color-overlays-primary-95)',
        'overlays-primary-100': 'var(--color-overlays-primary-100)',

        // Secondary Overlays
        'overlays-secondary-5': 'var(--color-overlays-secondary-5)',
        'overlays-secondary-10': 'var(--color-overlays-secondary-10)',
        'overlays-secondary-20': 'var(--color-overlays-secondary-20)',
        'overlays-secondary-30': 'var(--color-overlays-secondary-30)',
        'overlays-secondary-50': 'var(--color-overlays-secondary-50)',
        'overlays-secondary-60': 'var(--color-overlays-secondary-60)',
        'overlays-secondary-70': 'var(--color-overlays-secondary-70)',
        'overlays-secondary-75': 'var(--color-overlays-secondary-75)',
        'overlays-secondary-80': 'var(--color-overlays-secondary-80)',
        'overlays-secondary-90': 'var(--color-overlays-secondary-90)',
        'overlays-secondary-95': 'var(--color-overlays-secondary-95)',
        'overlays-secondary-100': 'var(--color-overlays-secondary-100)',

        // Info Overlays
        'overlays-info-5': 'var(--color-overlays-info-5)',
        'overlays-info-10': 'var(--color-overlays-info-10)',
        'overlays-info-20': 'var(--color-overlays-info-20)',
        'overlays-info-30': 'var(--color-overlays-info-30)',
        'overlays-info-50': 'var(--color-overlays-info-50)',
        'overlays-info-60': 'var(--color-overlays-info-60)',
        'overlays-info-70': 'var(--color-overlays-info-70)',
        'overlays-info-75': 'var(--color-overlays-info-75)',
        'overlays-info-80': 'var(--color-overlays-info-80)',
        'overlays-info-90': 'var(--color-overlays-info-90)',
        'overlays-info-95': 'var(--color-overlays-info-95)',
        'overlays-info-100': 'var(--color-overlays-info-100)',

        // Gray Overlays
        'overlays-gray-5': 'var(--color-overlays-gray-5)',
        'overlays-gray-10': 'var(--color-overlays-gray-10)',
        'overlays-gray-20': 'var(--color-overlays-gray-20)',
        'overlays-gray-30': 'var(--color-overlays-gray-30)',
        'overlays-gray-50': 'var(--color-overlays-gray-50)',
        'overlays-gray-60': 'var(--color-overlays-gray-60)',
        'overlays-gray-70': 'var(--color-overlays-gray-70)',
        'overlays-gray-75': 'var(--color-overlays-gray-75)',
        'overlays-gray-80': 'var(--color-overlays-gray-80)',
        'overlays-gray-90': 'var(--color-overlays-gray-90)',
        'overlays-gray-95': 'var(--color-overlays-gray-95)',
        'overlays-gray-100': 'var(--color-overlays-gray-100)',

        // Error Overlays
        'overlays-error-5': 'var(--color-overlays-error-5)',
        'overlays-error-10': 'var(--color-overlays-error-10)',
        'overlays-error-20': 'var(--color-overlays-error-20)',
        'overlays-error-30': 'var(--color-overlays-error-30)',
        'overlays-error-50': 'var(--color-overlays-error-50)',
        'overlays-error-60': 'var(--color-overlays-error-60)',
        'overlays-error-70': 'var(--color-overlays-error-70)',
        'overlays-error-75': 'var(--color-overlays-error-75)',
        'overlays-error-80': 'var(--color-overlays-error-80)',
        'overlays-error-90': 'var(--color-overlays-error-90)',
        'overlays-error-95': 'var(--color-overlays-error-95)',
        'overlays-error-100': 'var(--color-overlays-error-100)',

        // ===== BACKGROUND COLORS =====
        // Background Paper Elevations
        'background-paper-elevation-0': 'var(--color-background-paper-elevation-0)',
        'background-paper-elevation-1': 'var(--color-background-paper-elevation-1)',
        'background-paper-elevation-2': 'var(--color-background-paper-elevation-2)',
        'background-paper-elevation-3': 'var(--color-background-paper-elevation-3)',
        'background-paper-elevation-4': 'var(--color-background-paper-elevation-4)',
        'background-paper-elevation-5': 'var(--color-background-paper-elevation-5)',
        'background-paper-elevation-6': 'var(--color-background-paper-elevation-6)',
        'background-paper-elevation-7': 'var(--color-background-paper-elevation-7)',
        'background-paper-elevation-8': 'var(--color-background-paper-elevation-8)',
        'background-paper-elevation-9': 'var(--color-background-paper-elevation-9)',
        'background-paper-elevation-10': 'var(--color-background-paper-elevation-10)',
        'background-paper-elevation-11': 'var(--color-background-paper-elevation-11)',
        'background-paper-elevation-12': 'var(--color-background-paper-elevation-12)',
        'background-paper-elevation-13': 'var(--color-background-paper-elevation-13)',
        'background-paper-elevation-14': 'var(--color-background-paper-elevation-14)',
        'background-paper-elevation-15': 'var(--color-background-paper-elevation-15)',
        'background-paper-elevation-16': 'var(--color-background-paper-elevation-16)',
        'background-paper-elevation-17': 'var(--color-background-paper-elevation-17)',
        'background-paper-elevation-18': 'var(--color-background-paper-elevation-18)',
        'background-paper-elevation-19': 'var(--color-background-paper-elevation-19)',
        'background-paper-elevation-20': 'var(--color-background-paper-elevation-20)',
        'background-paper-elevation-21': 'var(--color-background-paper-elevation-21)',
        'background-paper-elevation-22': 'var(--color-background-paper-elevation-22)',
        'background-paper-elevation-23': 'var(--color-background-paper-elevation-23)',
        'background-paper-elevation-24': 'var(--color-background-paper-elevation-24)',

        // ===== SHADOW COLORS =====
        'shadow-subtle': 'var(--color-shadow-subtle)',
        'shadow-card-small': 'var(--color-shadow-card-small)',
        'shadow-card-large': 'var(--color-shadow-card-large)',

        // ===== SECONDARY COLORS =====
        'secondary-50': 'var(--color-secondary-50)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-900': 'var(--color-secondary-900)',

        // ===== SUCCESS COLORS =====
        'success-50': 'var(--color-success-50)',
        'success-100': 'var(--color-success-100)',
        'success-200': 'var(--color-success-200)',
        'success-300': 'var(--color-success-300)',
        'success-400': 'var(--color-success-400)',
        'success-500': 'var(--color-success-500)',
        'success-600': 'var(--color-success-600)',
        'success-700': 'var(--color-success-700)',
        'success-800': 'var(--color-success-800)',
        'success-900': 'var(--color-success-900)',

        // ===== INFO COLORS =====
        'info-50': 'var(--color-info-50)',
        'info-100': 'var(--color-info-100)',
        'info-200': 'var(--color-info-200)',
        'info-300': 'var(--color-info-300)',
        'info-400': 'var(--color-info-400)',
        'info-500': 'var(--color-info-500)',
        'info-600': 'var(--color-info-600)',
        'info-700': 'var(--color-info-700)',
        'info-800': 'var(--color-info-800)',
        'info-900': 'var(--color-info-900)',

        // ===== ERROR COLORS =====
        'error-50': 'var(--color-error-50)',
        'error-100': 'var(--color-error-100)',
        'error-200': 'var(--color-error-200)',
        'error-300': 'var(--color-error-300)',
        'error-400': 'var(--color-error-400)',
        'error-500': 'var(--color-error-500)',
        'error-600': 'var(--color-error-600)',
        'error-700': 'var(--color-error-700)',
        'error-800': 'var(--color-error-800)',
        'error-900': 'var(--color-error-900)',

        // ===== WARNING COLORS =====
        'warning-50': 'var(--color-warning-50)',
        'warning-100': 'var(--color-warning-100)',
        'warning-200': 'var(--color-warning-200)',
        'warning-300': 'var(--color-warning-300)',
        'warning-400': 'var(--color-warning-400)',
        'warning-500': 'var(--color-warning-500)',
        'warning-600': 'var(--color-warning-600)',
        'warning-700': 'var(--color-warning-700)',
        'warning-800': 'var(--color-warning-800)',
        'warning-900': 'var(--color-warning-900)',

        // ===== PAPER ELEVATION COLORS =====
        'paper-paper-elevation-0': 'var(--paper-paper-elevation-0)',
        'paper-paper-elevation-1': 'var(--paper-paper-elevation-1)',
        'paper-paper-elevation-2': 'var(--paper-paper-elevation-2)',
        'paper-paper-elevation-3': 'var(--paper-paper-elevation-3)',
        'paper-paper-elevation-4': 'var(--paper-paper-elevation-4)',
        'paper-paper-elevation-5': 'var(--paper-paper-elevation-5)',
        'paper-paper-elevation-6': 'var(--paper-paper-elevation-6)',
        'paper-paper-elevation-7': 'var(--paper-paper-elevation-7)',
        'paper-paper-elevation-8': 'var(--paper-paper-elevation-8)',
        'paper-paper-elevation-9': 'var(--paper-paper-elevation-9)',
        'paper-paper-elevation-10': 'var(--paper-paper-elevation-10)',
        'paper-paper-elevation-11': 'var(--paper-paper-elevation-11)',
        'paper-paper-elevation-12': 'var(--paper-paper-elevation-12)',
        'paper-paper-elevation-13': 'var(--paper-paper-elevation-13)',
        'paper-paper-elevation-14': 'var(--paper-paper-elevation-14)',
        'paper-paper-elevation-15': 'var(--paper-paper-elevation-15)',
        'paper-paper-elevation-16': 'var(--paper-paper-elevation-16)',
        'paper-paper-elevation-17': 'var(--paper-paper-elevation-17)',
        'paper-paper-elevation-18': 'var(--paper-paper-elevation-18)',
        'paper-paper-elevation-19': 'var(--paper-paper-elevation-19)',
        'paper-paper-elevation-20': 'var(--paper-paper-elevation-20)',
        'paper-paper-elevation-21': 'var(--paper-paper-elevation-21)',
        'paper-paper-elevation-22': 'var(--paper-paper-elevation-22)',
        'paper-paper-elevation-23': 'var(--paper-paper-elevation-23)',
        'paper-paper-elevation-24': 'var(--paper-paper-elevation-24)',

        // ===== CHIP COLORS =====
        'chip-default-background': 'var(--chip-default-background)',
        'chip-default-text': 'var(--chip-default-text)',
        'chip-primary-background': 'var(--chip-primary-background)',
        'chip-primary-text': 'var(--chip-primary-text)',
        'chip-success-background': 'var(--chip-success-background)',
        'chip-success-text': 'var(--chip-success-text)',
        'chip-warning-background': 'var(--chip-warning-background)',
        'chip-warning-text': 'var(--chip-warning-text)',
        'chip-error-background': 'var(--chip-error-background)',
        'chip-error-text': 'var(--chip-error-text)',
        'chip-info-background': 'var(--chip-info-background)',
        'chip-info-text': 'var(--chip-info-text)',
        'chip-accent-background': 'var(--chip-accent-background)',
        'chip-accent-text': 'var(--chip-accent-text)',
        'chip-disabled-background': 'var(--chip-disabled-background)',
        'chip-disabled-text': 'var(--chip-disabled-text)',
      },

      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Georgia', 'serif'],
      },

      // Font Sizes - Typography Tokens from styles.json
      fontSize: {
        'small': 'var(--font-size-small)',
        'large': 'var(--font-size-large)',
        'base': 'var(--font-size-base)',
        'subtitle': 'var(--font-size-subtitle)',
        'h4': 'var(--font-size-h4)',
        'h3': 'var(--font-size-h3)',
        'h2': 'var(--font-size-h2)',
        'h1': 'var(--font-size-h1)',
        'display': 'var(--font-size-display)',
        'label-xsmall': 'var(--font-size-label-xsmall)',
        'label-small': 'var(--font-size-label-small)',
        'label-medium': 'var(--font-size-label-medium)',
        'input-placeholder': 'var(--font-size-input-placeholder)',
        'input-value': 'var(--font-size-input-value)',
        'button-primary': 'var(--font-size-button-primary)',
        'button-secondary': 'var(--font-size-button-secondary)',
      },

      // Line Heights - Typography Tokens from styles.json
      lineHeight: {
        'small': 'var(--line-height-small)',
        'large': 'var(--line-height-large)',
        'base': 'var(--line-height-base)',
        'subtitle': 'var(--line-height-subtitle)',
        'h4': 'var(--line-height-h4)',
        'h3': 'var(--line-height-h3)',
        'h2': 'var(--line-height-h2)',
        'h1': 'var(--line-height-h1)',
        'display': 'var(--line-height-display)',
        'input-placeholder': 'var(--line-height-input-placeholder)',
        'input-value': 'var(--line-height-input-value)',
        'button-primary': 'var(--line-height-button-primary)',
        'button-secondary': 'var(--line-height-button-secondary)',
      },

      // Font Weights - Typography Tokens from styles.json
      fontWeight: {
        'small': 'var(--font-weight-small)',
        'large': 'var(--font-weight-large)',
        'base': 'var(--font-weight-base)',
        'subtitle': 'var(--font-weight-subtitle)',
        'h4': 'var(--font-weight-h4)',
        'h3': 'var(--font-weight-h3)',
        'h2': 'var(--font-weight-h2)',
        'h1': 'var(--font-weight-h1)',
        'display': 'var(--font-weight-display)',
        'label-xsmall': 'var(--font-weight-label-xsmall)',
        'label-small': 'var(--font-weight-label-small)',
        'label-medium': 'var(--font-weight-label-medium)',
        'input-placeholder': 'var(--font-weight-input-placeholder)',
        'input-value': 'var(--font-weight-input-value)',
        'button-primary': 'var(--font-weight-button-primary)',
        'button-secondary': 'var(--font-weight-button-secondary)',
      },

      // Letter Spacing - Typography Tokens from styles.json
      letterSpacing: {
        'small': 'var(--letter-spacing-small)',
        'large': 'var(--letter-spacing-large)',
        'base': 'var(--letter-spacing-base)',
        'subtitle': 'var(--letter-spacing-subtitle)',
        'h4': 'var(--letter-spacing-h4)',
        'h3': 'var(--letter-spacing-h3)',
        'h2': 'var(--letter-spacing-h2)',
        'h1': 'var(--letter-spacing-h1)',
        'display': 'var(--letter-spacing-display)',
        'label-xsmall': 'var(--letter-spacing-label-xsmall)',
        'label-small': 'var(--letter-spacing-label-small)',
        'label-medium': 'var(--letter-spacing-label-medium)',
        'input-placeholder': 'var(--letter-spacing-input-placeholder)',
        'input-value': 'var(--letter-spacing-input-value)',
        'button-primary': 'var(--letter-spacing-button-primary)',
        'button-secondary': 'var(--letter-spacing-button-secondary)',
      },

      // Spacing - Use responsive CSS variables
      spacing: {
        '0': 'var(--spacing-0)',
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '11': 'var(--spacing-11)',
        '12': 'var(--spacing-12)',
        '13': 'var(--spacing-13)',
        '14': 'var(--spacing-14)',
        '15': 'var(--spacing-15)',
        '16': 'var(--spacing-16)',
        '17': 'var(--spacing-17)',
        '18': 'var(--spacing-18)',
        '19': 'var(--spacing-19)',
        '20': 'var(--spacing-20)',
      },

      // Border Radius - Use responsive CSS variables
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'none': 'var(--radius-none)',
        'full': 'var(--radius-full)',
        'xxl': 'var(--radius-xxl)',
        'xxxl': 'var(--radius-xxxl)',
      },

      // Box Shadow - Shadow/Effect Tokens from styles.json
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'card-small': 'var(--shadow-card-small)',
        'card-large': 'var(--shadow-card-large)',
        'card-large-right': 'var(--shadow-card-large-right)',
        'floating-deep': 'var(--shadow-floating-deep)',
        'focus': 'var(--shadow-focus)',
        'neon-pink-glow': 'var(--shadow-neon-pink-glow)',
        'neon-cyan-glow': 'var(--shadow-neon-cyan-glow)',
        'neon-green-glow': 'var(--shadow-neon-green-glow)',
        'brand-purple-glow': 'var(--shadow-brand-purple-glow)',
        'brand-blue-glow': 'var(--shadow-brand-blue-glow)',
        'inset-soft-shadow': 'var(--shadow-inset-soft-shadow)',
      },

      // Background Images (Gradients) - ALL FROM design-tokens.css
      backgroundImage: {
        'gradient-sunset-1': 'var(--gradient-sunset-1)',
        'gradient-sunset-2': 'var(--gradient-sunset-2)',
        'gradient-aqua-1': 'var(--gradient-aqua-1)',
        'gradient-aqua-2': 'var(--gradient-aqua-2)',
        'gradient-ai-violet-1': 'var(--gradient-ai-violet-1)',
        'gradient-ai-violet-2': 'var(--gradient-ai-violet-2)',
        'gradient-cyber-glow-1': 'var(--gradient-cyber-glow-1)',
        'gradient-cyber-glow-2': 'var(--gradient-cyber-glow-2)',
        'gradient-magenta-pop': 'var(--gradient-magenta-pop)',
        'gradient-emerald-glow': 'var(--gradient-emerald-glow)',
        'gradient-danger-glow': 'var(--gradient-danger-glow)',
        'gradient-info-flow': 'var(--gradient-info-flow)',
        'gradient-neon-green-1': 'var(--gradient-neon-green-1)',
        'gradient-neon-green-2': 'var(--gradient-neon-green-2)',
        'gradient-purple-flame-1': 'var(--gradient-purple-flame-1)',
        'gradient-purple-flame-2': 'var(--gradient-purple-flame-2)',
        'gradient-sunset-3': 'var(--gradient-sunset-3)',
        'gradient-aqua-3': 'var(--gradient-aqua-3)',
        'gradient-magenta-candy': 'var(--gradient-magenta-candy)',
        'gradient-cyber-neon': 'var(--gradient-cyber-neon)',
        'gradient-brand-aurora': 'var(--gradient-brand-aurora)',
        'gradient-brand-aurora-10': 'var(--gradient-brand-aurora-10)',
        'gradient-brand-aurora-20': 'var(--gradient-brand-aurora-20)',
        'gradient-background-base': 'var(--gradient-background-base)',
      },

      // Icon Sizes - Use responsive CSS variables
      width: {
        'icon-xs': 'var(--icon-size-xs)',
        'icon-sm': 'var(--icon-size-sm)', 
        'icon-md': 'var(--icon-size-md)',
        'icon-lg': 'var(--icon-size-lg)',
        'icon-xl': 'var(--icon-size-xl)',

        // Touch Target Tokens - Use responsive variables
        'touch-target-button': 'var(--touch-target-button)',

        // Container Tokens - Use responsive variables
        'container-max-width': 'var(--container-max-width)',
        'container-min-width': 'var(--container-min-width)',
      },

      height: {
        'icon-xs': 'var(--icon-size-xs)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-md': 'var(--icon-size-md)', 
        'icon-lg': 'var(--icon-size-lg)',
        'icon-xl': 'var(--icon-size-xl)',

        // Touch Target Tokens - Use responsive variables
        'touch-target-button': 'var(--touch-target-button)',
      },

      // Breakpoints - Map to Tailwind's responsive system
      screens: {
        'sm': 'var(--breakpoint-mobile)',    // 320px
        'md': 'var(--breakpoint-tablet)',    // 768px  
        'lg': 'var(--breakpoint-laptop)',    // 1024px
        'xl': 'var(--breakpoint-desktop)',   // 1440px
      },

      // Grid - Use responsive variables
      gridTemplateColumns: {
        'container': 'repeat(var(--grid-columns), minmax(0, 1fr))',
      },

      gap: {
        'container': 'var(--grid-gap)',
      },

      padding: {
        'container-gutter': 'var(--container-gutter)',
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        '.dark': {
          // Dark theme CSS variables are already defined in design-tokens.css
          // Tailwind will automatically use them when darkMode: 'class' is set
        }
      })
    }
  ],
};