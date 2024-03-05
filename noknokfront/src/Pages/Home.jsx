import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'
import useAuth from '../hooks/useAuth';
import CategorySection from '../components/CategorySection';

export default function Home() {

  return (
    <div>

<HeroSection/>
  <CardSection/>
  <CategorySection/>
    </div>
  )
}
