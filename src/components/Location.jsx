
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircleIcon } from 'lucide-react';

const Location = () => {
  const mapSrc =
    `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}` +
    `&q=-1.3486159003231244,36.903068869114094`;

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
              <iframe
                title="Company location map"
                src={mapSrc}
                className="w-full h-[400px] rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
