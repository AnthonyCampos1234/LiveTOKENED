"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  // Sample stream categories
  const categories = ["Gaming", "Sports", "Entertainment", "Crypto", "eSports"];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>LiveTOKENED<span className={styles.beta}>BETA</span></div>
        <nav className={styles.headerLinks}>
          <Link href="/streams" className={styles.headerLink}>Streams</Link>
          <Link href="/leaderboard" className={styles.headerLink}>Leaderboard</Link>
          <Link href="/about" className={styles.headerLink}>About</Link>
          <Link href="/faq" className={styles.headerLink}>FAQ</Link>
        </nav>
        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginButton}>Log In</Link>
          <Link href="/signup" className={styles.signUpButton}>Sign Up</Link>
        </div>
      </header>

      {/* Hero section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Real-time betting on any livestream</h1>
        <p className={styles.heroText}>Powered by AI to create betting moments from what's happening on stream</p>
        <div className={styles.heroButtons}>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading2}>How LiveTOKENED Works</h2>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.heading3}>Connect to Your Favorite Streams</h3>
              <p className={styles.paragraph}>Link your streaming accounts or browse popular live content across multiple platforms.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.heading3}>Our AI Predicts Key Moments</h3>
              <p className={styles.paragraph}>Our machine learning models analyze the stream in real-time to identify potential betting opportunities.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.heading3}>Place Your Bets</h3>
              <p className={styles.paragraph}>Bet on stream events like "Will they win this round?" or "Next headshot in 30 seconds?" with tokens.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.heading3}>Win & Earn</h3>
              <p className={styles.paragraph}>Get instant payouts when your predictions are correct and climb the leaderboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Showcase */}
      <section className={styles.aiTechShowcase}>
        <div className={styles.showcaseHeader}>
          <h2 className={styles.heading2}>Powered by Advanced AI</h2>
          <p className={styles.paragraph}>Our proprietary algorithms analyze live streams in real-time to create betting opportunities</p>
        </div>
        
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseCard}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Real-Time Detection</h3>
            <p className={styles.cardDesc}>Our AI system constantly monitors streams for key moments that could lead to betting opportunities.</p>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Predictive Analysis</h3>
            <p className={styles.cardDesc}>Machine learning models analyze stream content to accurately predict potential outcomes.</p>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Instant Betting</h3>
            <p className={styles.cardDesc}>Questions are generated and presented to users in milliseconds, with rapid resolution.</p>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Multi-Platform</h3>
            <p className={styles.cardDesc}>Works seamlessly across Twitch, YouTube, Kick, and all other major streaming platforms.</p>
          </div>
        </div>
        
        <div className={styles.showcaseStats}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>500ms</div>
            <div className={styles.statLabel}>Average Response Time</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98.5%</div>
            <div className={styles.statLabel}>Prediction Accuracy</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>System Availability</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <h2 className={styles.heading2}>Supported Categories</h2>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div key={category} className={styles.categoryItem}>
              {category}
            </div>
          ))}
        </div>
      </section>



      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.heading2}>Platform Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.heading3}>AI-Powered Predictions</h3>
            <p className={styles.paragraph}>Our advanced machine learning models analyze stream content to generate real-time betting opportunities</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.heading3}>Multi-Platform Support</h3>
            <p className={styles.paragraph}>Works with all major streaming platforms including Twitch, YouTube, Kick, and more</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.heading3}>Community Leaderboards</h3>
            <p className={styles.paragraph}>Compete with other bettors to climb global and stream-specific leaderboards</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.heading2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.heading3}>Is LiveTOKENED available worldwide?</h3>
            <p className={styles.paragraph}>Yes, LiveTOKENED is available to users globally. However, please ensure you comply with your local regulations regarding online prediction markets.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.heading3}>How accurate is the AI prediction system?</h3>
            <p className={styles.paragraph}>Our AI system is constantly learning and improving. It analyzes stream content and creates betting opportunities based on patterns and events it detects in real-time.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.heading3}>How do I get started with tokens?</h3>
            <p className={styles.paragraph}>New users receive 1,000 free tokens upon registration. Additional tokens can be purchased or earned through successful predictions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.paragraph}>© 2025 LiveTOKENED. All rights reserved.</p>
      </footer>
    </div>
  );
}
