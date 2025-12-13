'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";


export default function Home() {

const [isDarkMode,setIsDarkMode]= useState(true);

useEffect(()=>{
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
  window.matchMedia('(prefers-color-scheme:dark)').matches)) {
    setIsDarkMode(true)
  }
  else{
    setIsDarkMode(false)
  }
},[])

useEffect(()=>{
  if(isDarkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }
},[isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Certificates isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <FAQ isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <WhatsAppButton/>
    </>
  );
}
