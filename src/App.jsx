import React, { useState } from 'react';
import { 
  Gift, 
  TrendingUp, 
  Users, 
  Zap, 
  Award, 
  Crown,
  UserPlus,
  Wallet,
  Network,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import WelcomeSection from './components/Welcome';
import BusinessPlanTable from './components/BusinessPlan';
import WalletSection from './components/Wallet';
import AboutSection from './components/About';
import CustomerSupport from './components/CustomerSupport';
import Footer from './components/Footer';
import AuthModal from './components/Auth';

import { 
  IncomeCard, 
  SocialCard, 
  AchieverCard, 
  StepCard, 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  TelegramIcon 
} from './components/Cards';

import './index.css';

export default function App() {
  // Auth state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [user, setUser] = useState(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (userData, successMessage) => {
    setUser(userData);
    showToast(successMessage);
  };

  const handleLogout = () => {
    setUser(null);
    showToast('Logged out successfully');
  };

  // 6 Income Plan Categories
  const incomePlans = [
    { title: 'JOIN BONUS', highlight: '$1', Icon: Gift },
    { title: 'ROI INCOME', highlight: '0.5%', badge: 'DAILY', Icon: TrendingUp },
    { title: 'REFERRAL INCOME', highlight: '15%', Icon: Users },
    { title: 'BOOSTER INCOME', highlight: '15%', Icon: Zap },
    { title: 'RANK / ACHIEVEMENT BONUS', highlight: '', Icon: Award },
    { title: 'LEADERSHIP MONTHLY BONUS', highlight: '', Icon: Crown },
  ];

  const socialBonuses = [
    { platform: 'INSTAGRAM', amount: '$0.25', iconColor: '#E1306C', bgGlow: 'rgba(225, 48, 108, 0.1)', Icon: InstagramIcon },
    { platform: 'FACEBOOK', amount: '$0.25', iconColor: '#1877F2', bgGlow: 'rgba(24, 119, 242, 0.1)', Icon: FacebookIcon },
    { platform: 'YOUTUBE', amount: '$0.25', iconColor: '#FF0000', bgGlow: 'rgba(255, 0, 0, 0.1)', Icon: YoutubeIcon },
    { platform: 'TELEGRAM', amount: '$0.25', iconColor: '#0088CC', bgGlow: 'rgba(0, 136, 204, 0.1)', Icon: TelegramIcon },
  ];

  const topAchievers = [
    {
      name: 'John Smith',
      rank: 'GOLD',
      business: '$35,000',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Emily Rose',
      rank: 'PLATINUM',
      business: '$50,000',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Lee',
      rank: 'DIAMOND',
      business: '$100,000',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const howItWorksSteps = [
    { stepNumber: '1', title: 'REGISTER', description: 'Create your account', Icon: UserPlus },
    { stepNumber: '2', title: 'DEPOSIT', description: 'Make minimum deposit', Icon: Wallet },
    { stepNumber: '3', title: 'PARTICIPATE', description: 'Join programs & build network', Icon: Network },
    { stepNumber: '4', title: 'EARN & TRACK', description: 'Track income & withdraw', Icon: BarChart3 },
  ];

  return (
    <div className="app-main">
      {/* Top Header Navigation */}
      <Navbar 
        onOpenAuth={handleOpenAuth} 
        user={user} 
        onLogout={handleLogout} 
      />

      {/* Hero Section */}
      <HeroSection onJoinNow={() => handleOpenAuth('register')} />

      {/* Welcome Section */}
      <WelcomeSection 
        onRegister={() => handleOpenAuth('register')} 
        onLogin={() => handleOpenAuth('login')} 
      />

      {/* Income Plan Overview Section */}
      <section id="income-plan" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>OUR <span>INCOME PLAN</span></h2>
            <p>Multiple income opportunities to build your future</p>
          </div>

          <div className="grid-3">
            {incomePlans.map((plan, index) => (
              <IncomeCard 
                key={index}
                title={plan.title}
                highlight={plan.highlight}
                badge={plan.badge}
                Icon={plan.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Join Bonus Section */}
      <section style={{ padding: '40px 0', background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <div className="section-title">
            <h2>SOCIAL MEDIA <span>JOIN BONUS – $1</span></h2>
            <p>Earn $0.25 for joining each platform</p>
          </div>

          <div className="grid-4">
            {socialBonuses.map((item, index) => (
              <SocialCard 
                key={index}
                platform={item.platform}
                amount={item.amount}
                iconColor={item.iconColor}
                bgGlow={item.bgGlow}
                Icon={item.Icon}
                link="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <BusinessPlanTable />

      {/* Top Achievers Leaderboard Section */}
      <section id="achievers" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>TOP <span>ACHIEVERS</span></h2>
          </div>

          <div className="grid-3">
            {topAchievers.map((achiever, index) => (
              <AchieverCard 
                key={index}
                name={achiever.name}
                rank={achiever.rank}
                business={achiever.business}
                avatarUrl={achiever.avatarUrl}
              />
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="achievers-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* How It Works Process Section */}
      <section style={{ padding: '60px 0', background: 'rgba(255, 184, 0, 0.015)' }}>
        <div className="container">
          <div className="section-title">
            <h2>HOW IT <span>WORKS</span></h2>
          </div>

          <div className="how-it-works-grid">
            {howItWorksSteps.map((step, index) => (
              <React.Fragment key={index}>
                <StepCard 
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  Icon={step.Icon}
                />
                {index < howItWorksSteps.length - 1 && (
                  <div className="step-arrow-connector">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet & Payment Methods Section */}
      <WalletSection />

      {/* About Corporate Section */}
      <AboutSection onReadMore={() => showToast('Unity Nivo is a premier global networking platform founded in 2024.')} />

      {/* 24/7 Customer Support Banner */}
      <CustomerSupport onContactUs={() => showToast('Support team available 24/7 at support@unitynivo.com')} />

      {/* Footer */}
      <Footer />

      {/* Login & Register Modal Dialog */}
      <AuthModal 
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={20} color="#ffb800" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

