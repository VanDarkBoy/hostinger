
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Lekkerix - 专业储能电池解决方案</title>
        <meta name="description" content="Lekkerix专注于储能电池技术研发与生产，提供高效、安全、可靠的储能解决方案。联系我们获取专业咨询服务。" />
      </Helmet>
      
      <Header />
      <Hero />
      <Products />
      <About />
      <Location />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
