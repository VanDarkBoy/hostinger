
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircleIcon } from 'lucide-react';

const Location = () => {
  const [mapError, setMapError] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const ak = import.meta.env.VITE_BAIDU_MAPS_AK;

    if (typeof window === 'undefined') {
      return undefined;
    }

    if (!mapContainerRef.current || isMapInitialized) {
      return undefined;
    }

    if (!ak) {
      setMapError('Baidu Maps access key is missing.');
      return undefined;
    }

    const initMap = () => {
      if (!mapContainerRef.current || !window.BMapGL) {
        setMapError('Failed to load Baidu Maps API.');
        return;
      }

      try {
        setMapError('');
        const map = new window.BMapGL.Map(mapContainerRef.current);
        const point = new window.BMapGL.Point(36.903068869114094, -1.3486159003231244);

        map.centerAndZoom(point, 18);
        map.enableScrollWheelZoom(true);
        map.addControl(new window.BMapGL.ZoomControl());
        map.addControl(new window.BMapGL.ScaleControl());
        map.addControl(new window.BMapGL.NavigationControl3D());

        const marker = new window.BMapGL.Marker(point);
        map.addOverlay(marker);

        const infoWindow = new window.BMapGL.InfoWindow(
          'Lekkerix Headquarters<br/>Unit 00, Floor 00, KC ARORA COMPLEX<br/>Plot 15130, Mombasa Road, Embakasi, Nairobi',
          { width: 260 },
        );

        map.openInfoWindow(infoWindow, point);
        setIsMapInitialized(true);
      } catch (error) {
        console.error(error);
        setMapError('Unable to initialize Baidu Map.');
      }
    };

    const existingScript = document.querySelector('script[data-bmapgl-loader]');

    if (window.BMapGL) {
      initMap();
      return undefined;
    }

    if (existingScript) {
      const handleExistingLoad = () => initMap();
      const handleExistingError = () => {
        setMapError('Failed to load Baidu Maps API script.');
      };

      existingScript.addEventListener('load', handleExistingLoad);
      existingScript.addEventListener('error', handleExistingError);

      return () => {
        existingScript.removeEventListener('load', handleExistingLoad);
        existingScript.removeEventListener('error', handleExistingError);
      };
    }

    const script = document.createElement('script');
    script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}`;
    script.async = true;
    script.defer = true;
    script.dataset.bmapglLoader = 'true';

    const handleLoad = () => {
      initMap();
    };

    const handleError = () => {
      setMapError('Failed to load Baidu Maps API script.');
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [isMapInitialized]);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Company address',
      content: 'Physical address:\n' +
          'Unit:00,Floor:00,KC ARORA COMPLEX,\n' +
          'Plot:15130,Mombasa road,Embakasi,EmbakasiEast,Nairobi',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Contact number',
      content: '+254 718327580',
      color: 'text-green-400'
    },
    {
      icon: MessageCircleIcon,
      title: 'Whatsup',
      content: '+254 718327580',
      color: 'text-green-200'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'lekkerix@gmail.com,simon@lekkerix.co.ke',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday to Friday 8:00am-5:00pm|Saturday 8:00am-12:00am',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="location" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Our Location
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to our headquarters in Mombasa to experience the latest energy storage technologies and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Location map</h3>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <div ref={mapContainerRef} className="w-full h-full" />
              </div>
              {mapError && (
                <p className="mt-4 text-sm text-red-400">{mapError}</p>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
