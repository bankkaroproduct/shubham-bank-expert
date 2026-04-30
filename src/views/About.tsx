"use client";
import { useEffect } from "react";
import { Link } from "@/components/Link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand.config";
import { Target, Users, Lightbulb, Heart, TrendingUp, Shield, Sparkles, CreditCard, BarChart3, Zap } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0f9ff] via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#E0F7F9] text-primary px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">About {brandConfig.name}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B7A8A] via-[#E0F7F9] to-[#0B7A8A] bg-clip-text text-transparent">
              Find Your Perfect Credit Card
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {brandConfig.name} helps you discover the ideal credit card based on your spending habits, lifestyle, and rewards preferences. Make informed decisions and maximize your benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="w-12 h-12 bg-[#E0F7F9] rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">AI Card Genius</h3>
                <p className="text-muted-foreground">
                  Answer a few questions about your spending and our AI recommends the perfect cards tailored to your lifestyle. No jargon, just smart matches.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Category Card Genius</h3>
                <p className="text-muted-foreground">
                  Find the best card for specific spending categories like dining, travel, fuel, or shopping. Maximize rewards where you spend the most.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="w-12 h-12 bg-[#E0F7F9] rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Beat My Card</h3>
                <p className="text-muted-foreground">
                  Already have a card? See if there's a better option out there. We compare your current card against alternatives and show you potential savings.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Card Discovery</h3>
                <p className="text-muted-foreground">
                  Browse our comprehensive database of 100+ credit cards. Filter by bank, fees, rewards, and more. Detailed breakdowns of every card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-[#E0F7F9] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make personal finance accessible, transparent, and actually useful. We believe everyone deserves to understand where their money goes and how to make it work harder for them.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where choosing financial products isn't stressful or confusing. Where you can make informed decisions in minutes, not hours. Where your money works as hard as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E0F7F9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Transparency First</h3>
                <p className="text-muted-foreground">
                  No hidden agendas. We show you the math, the fees, and the fine print. You deserve to know exactly what you're getting.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">User-Centric</h3>
                <p className="text-muted-foreground">
                  Built for real people, not finance experts. Simple language, clear comparisons, and recommendations that actually make sense.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#E0F7F9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Always Independent</h3>
                <p className="text-muted-foreground">
                  Our recommendations are based on data and your needs, not commissions. Your best interest is our only priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Find Your Perfect Card?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stop leaving money on the table. Whether you're looking for cashback, travel rewards, or fuel savings, we'll help you find the card that matches your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/card-genius"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Try Card Genius Now
                <TrendingUp className="w-5 h-5" />
              </Link>
              <Link
                to="/cards"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f0f9ff] transition-all"
              >
                Browse All Cards
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No hidden fees. No spam. Just honest recommendations that could save you thousands.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
