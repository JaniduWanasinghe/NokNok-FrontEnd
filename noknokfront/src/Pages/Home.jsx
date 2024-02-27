import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'
import useAuth from '../hooks/useAuth';

export default function Home() {
  useAuth();

  return (
    <div>

<HeroSection/>
  <CardSection/>
    </div>
  )
}
