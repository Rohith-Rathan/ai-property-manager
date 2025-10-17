import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from '../components/ui/Card';
import Button from '../components/forms/Button';
import FormField from '../components/forms/FormField';
import Checkbox from '../components/forms/Checkbox';
import ThemeIcon from '../components/ui/ThemeIcon';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants
const loginLogoIcon = getAssetPath('login-logo-icon');
const googleIcon = getAssetPath('google-login-icon');
const microsoftIcon = getAssetPath('microsoft-login-icon');
const themeSwitchIcon = getAssetPath('theme-switch-icon');

// Login configuration
const LOGIN_CONFIG = {
  title: "Welcome back",
  subtitle: "Sign in to your account",
  emailLabel: "Email",
  passwordLabel: "Password",
  rememberMe: "Remember me",
  forgotPassword: "Forgot password?",
  signInButton: "Sign in",
  orDivider: "Or",
  socialButtons: [
    { provider: "google" as const, label: "Google", icon: googleIcon },
    { provider: "microsoft" as const, label: "Microsoft", icon: microsoftIcon }
  ]
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe });
    // Add your login logic here
    // For now, just redirect to dashboard
    navigate('/dashboard');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    // Add your social login logic here
    // For now, just redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="bg-gradient-background-base min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="sm"
          icon="none"
        onClick={toggleTheme}
          className="p-2"
        >
          <ThemeIcon 
            src={themeSwitchIcon} 
            alt="Theme toggle" 
            size="sm" 
            variant="default" 
          />
        </Button>
        </div>

      {/* Gradient Icon Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-brand-aurora rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-aqua-2 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-info-flow rounded-full opacity-5 blur-2xl"></div>
                </div>

      {/* Login Card */}
      <div className="w-full max-w-md">
        <Card className="p-8 space-y-6 shadow-card-large">
          {/* Logo and Title */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                {/* Gradient Background for Logo */}
                <div className="absolute inset-0 bg-gradient-brand-aurora rounded-full opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-brand-aurora p-4 rounded-full">
                  <ThemeIcon 
                    src={loginLogoIcon} 
                    alt="Logo" 
                    size="lg" 
                    variant="white" 
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-h2 font-bold text-primary">
                {LOGIN_CONFIG.title}
              </h1>
              <p className="text-base text-secondary">
                {LOGIN_CONFIG.subtitle}
                    </p>
                  </div>
                      </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            {/* Email Field */}
            <FormField
              label={LOGIN_CONFIG.emailLabel}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
              onChange={setEmail}
              icon="email"
              required
            />

            {/* Password Field */}
            <FormField
              label={LOGIN_CONFIG.passwordLabel}
              type="password"
                        placeholder="Enter your password"
                        value={password}
              onChange={setPassword}
              icon="password"
              showPasswordToggle={true}
              required
            />

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <Checkbox
                        checked={rememberMe}
                onChange={(checked) => setRememberMe(checked)}
                label={LOGIN_CONFIG.rememberMe}
              />
              <Button
                variant="ghost"
                size="sm"
                label={LOGIN_CONFIG.forgotPassword}
                onClick={() => console.log('Forgot password clicked')}
                className="text-sm p-0 h-auto text-brand-primary hover:text-accent-purple"
              />
                  </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              variant="primary"
              gradient="brand-aurora"
              fullWidth
              label={LOGIN_CONFIG.signInButton}
              onClick={handleLogin}
            />
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-overlays-white-inverse-10"></div>
            <span className="text-sm text-tertiary px-2">
              {LOGIN_CONFIG.orDivider}
            </span>
            <div className="flex-1 h-px bg-overlays-white-inverse-10"></div>
                </div>

          {/* Social Login Buttons */}
          <div className="flex flex-row gap-3">
            {LOGIN_CONFIG.socialButtons.map((social) => (
              <Button
                key={social.provider}
                variant="secondary"
                label={social.label}
                icon={social.provider}
                onClick={() => handleSocialLogin(social.provider)}
                className="flex-1"
              />
            ))}
          </div>

        </Card>
      </div>
    </div>
  );
};

export default Login;
