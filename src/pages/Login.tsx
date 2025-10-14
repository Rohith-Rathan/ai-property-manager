import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeIcon from '../components/ui/ThemeIcon';

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const imgIcon = "/assets/login-logo-icon.svg";
  const imgIcon1 = "/assets/email-input-icon.svg";
  const imgIcon2 = "/assets/password-input-icon.svg";
  const imgEye = "/assets/show-password-icon.svg";
  const imgEyeOff = "/assets/hide-password-icon.svg";
  const imgLoginScreen = "/assets/google-login-icon.svg";
  const imgLoginScreen1 = "/assets/microsoft-login-icon.svg";

  return (
    <div className="bg-gradient-background-base min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-surface-primary border border-overlays-white-inverse-10 shadow-card-small hover:shadow-card-large transition-all duration-200"
        aria-label="Toggle theme"
      >
        <div className="w-icon-sm h-icon-sm text-text-primary">
          {theme === 'light' ? '🌙' : '☀️'}
        </div>
      </button>
      
      <div className="content-stretch flex items-center justify-center relative size-full max-w-7xl mx-auto" data-name="Login" data-node-id="189:9753">
        <div className="bg-paper-paper-elevation-2 border border-overlays-white-inverse-10 border-solid w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl relative rounded-xxxl shadow-card-small" data-name="Card" data-node-id="189:9754">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-4 items-start min-w-inherit p-4 sm:p-6 lg:p-8 relative w-full">
            <div className="content-stretch flex flex-col gap-6 items-center relative shrink-0 w-full" data-name="CardHeader" data-node-id="189:9755">
              <div className="bg-gradient-brand-aurora content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-16 h-16" data-name="LoginScreen" data-node-id="189:9756">
                <ThemeIcon src={imgIcon} alt="Logo" size="lg" variant="default" />
              </div>
              <div className="content-stretch flex flex-col gap-1 items-center not-italic relative shrink-0 text-center text-nowrap w-full whitespace-pre" data-name="LoginScreen" data-node-id="189:9765">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-h4 relative shrink-0 text-text-primary text-h4" data-node-id="189:9766">
                  AI Property Manager
                </p>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-base relative shrink-0 text-text-secondary text-base tracking-normal" data-node-id="189:9767">
                  Sign in to your account
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-6 items-center relative shrink-0 w-full" data-name="CardContent" data-node-id="189:9768">
              <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="LoginScreen" data-node-id="189:9769">
                <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="189:9770">
                  <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="189:9771">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-text-primary text-small text-nowrap tracking-normal whitespace-pre" data-node-id="189:9772">
                      Email
                    </p>
                  </div>
                  <div className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center p-3 relative rounded-lg shrink-0 w-full" data-name="Container" data-node-id="189:9773">
                    <div className="content-stretch flex gap-2 items-center relative shrink-0" data-node-id="240:5751">
                      <ThemeIcon src={imgIcon1} alt="Email" size="sm" variant="secondary" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="font-['Inter:Regular',_sans-serif] font-normal leading-normal not-italic relative shrink-0 text-text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="189:9778">
                  <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="189:9779">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-text-primary text-small text-nowrap tracking-normal whitespace-pre" data-node-id="189:9780">
                      Password
                    </p>
                  </div>
                  <div className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-3 relative rounded-lg shrink-0 w-full" data-name="Container" data-node-id="189:9781">
                    <div className="content-stretch flex gap-2 items-center relative shrink-0" data-node-id="189:9782">
                      <ThemeIcon src={imgIcon2} alt="Password" size="sm" variant="secondary" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="font-['Inter:Regular',_sans-serif] font-normal leading-normal not-italic relative shrink-0 text-text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="content-stretch flex h-4 items-start relative shrink-0 cursor-pointer"
                      data-name="Button" 
                      data-node-id="189:9787"
                    >
                      <ThemeIcon src={showPassword ? imgEyeOff : imgEye} alt="Toggle Password" size="sm" variant="secondary" />
                    </button>
                  </div>
                </div>
                <div className="content-stretch flex h-5 items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="189:9791">
                  <div className="h-5 relative shrink-0 w-auto" data-name="Container" data-node-id="189:9792">
                    <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center relative w-auto">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="border border-overlays-white-inverse-10 border-solid relative rounded-md shrink-0 w-4 h-4 cursor-pointer"
                        data-name="Primitive.button" 
                        data-node-id="189:9793"
                      />
                      <div className="basis-0 grow h-5 min-h-px min-w-px relative shrink-0" data-name="Primitive.label" data-node-id="189:9794">
                        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-text-primary text-small text-nowrap tracking-normal whitespace-pre" data-node-id="189:9795">
                            Remember me
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-5 relative rounded-[10px] shrink-0 w-auto" data-name="Button" data-node-id="189:9796">
                    <button
                      type="button"
                      onClick={() => alert('Forgot password clicked')}
                      className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center justify-center relative w-auto cursor-pointer"
                    >
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-primary-500 text-small text-nowrap tracking-normal whitespace-pre" data-node-id="189:9797">
                        Forgot password?
                      </p>
                    </button>
                  </div>
                </div>
                <button 
                  className="bg-gradient-brand-aurora box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible px-4 py-3 relative rounded-lg shrink-0 w-full" 
                  data-name="Button" 
                  data-node-id="766:9004"
                  onClick={() => alert(`Logging in with Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`)}
                >
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-small not-italic relative shrink-0 text-small text-nowrap text-static-white whitespace-pre" data-node-id="766:9008">
                    Sign In
                  </p>
                </button>
              </div>
              <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full" data-name="LoginScreen" data-node-id="189:9800">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="189:9801">
                  <div className="absolute border-[1px_0px_0px] border-overlays-white-inverse-10 border-solid h-px left-0 top-2 w-full max-w-sm" data-name="Container" data-node-id="189:9802" />
                  <div className="bg-paper-paper-elevation-2 box-border content-stretch flex gap-2 items-center justify-center px-2 py-0 relative shrink-0" data-name="Text" data-node-id="189:9803">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small text-nowrap uppercase whitespace-pre" data-node-id="189:9804">
                      Or continue with
                    </p>
                  </div>
                </div>
                <div className="content-start flex flex-col sm:flex-row gap-4 items-start relative shrink-0 w-full" data-name="Container" data-node-id="189:9805">
                  <button 
                    className="w-full sm:flex-1 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-3 relative rounded-lg cursor-pointer" 
                    data-name="Button" 
                    data-node-id="766:9012"
                    onClick={() => alert('Google login clicked')}
                  >
                    <ThemeIcon src={imgLoginScreen} alt="Google Login" size="sm" variant="default" />
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-text-primary text-small text-center text-nowrap whitespace-pre" data-node-id="766:9016">
                      Google
                    </p>
                  </button>
                  <button 
                    className="w-full sm:flex-1 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-3 relative rounded-lg cursor-pointer" 
                    data-name="Button" 
                    data-node-id="766:9024"
                    onClick={() => alert('Microsoft login clicked')}
                  >
                    <ThemeIcon src={imgLoginScreen1} alt="Microsoft Login" size="sm" variant="default" />
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-normal not-italic relative shrink-0 text-text-primary text-small text-center text-nowrap whitespace-pre" data-node-id="766:9030">
                      Microsoft
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
