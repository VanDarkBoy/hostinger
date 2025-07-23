
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years of industry experience', icon: Award },
    { number: '500+', label: 'Successful projects', icon: Target },
    { number: '50+', label: 'Professional team', icon: Users },
    { number: '20+', label: 'Serve the country', icon: Globe }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: 'Technological innovation',
      description: 'Continue to invest in research and development to promote the progress of energy storage technology',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Customer first',
      description: 'Guided by customer needs, provide high-quality services',
      color: 'text-red-400'
    },
    {
      icon: Globe,
      title: 'Green and environmentally friendly',
      description: 'Committed to sustainable development and protection of the global environment',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            About us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2014, Lekkerix focuses on the R&D, production and sales of energy storage battery technology, and is an industry-leading provider of energy storage solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                It is committed to providing efficient, safe, and reliable energy storage battery solutions to global customers, promoting the popularization and application of clean energy, and contributing to building a sustainable future.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that through advanced energy storage technology, everyone can enjoy a clean and stable power supply while contributing to the protection of the earth's environment.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Development History</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-blue-400 font-semibold">2014</p>
                    <p className="text-gray-300">The company was established to focus on the research and development of household energy storage batteries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-green-400 font-semibold">2018</p>
                    <p className="text-gray-300">Expand the commercial energy storage market and obtain a number of technology patents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-purple-400 font-semibold">2022</p>
                    <p className="text-gray-300">Entered the field of industrial-grade energy storage, with a global coverage</p>
                  </div>
                </div>
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
            <img  
              className="w-full h-64 object-cover rounded-2xl" 
              alt="Lekkerix现代化生产车间"
             src="https://images.unsplash.com/photo-1680591483838-67a3fe473b93" />

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0`}>
                      <value.icon className={`h-5 w-5 ${value.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
