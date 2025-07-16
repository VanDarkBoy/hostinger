
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: '年行业经验', icon: Award },
    { number: '500+', label: '成功项目', icon: Target },
    { number: '50+', label: '专业团队', icon: Users },
    { number: '20+', label: '服务国家', icon: Globe }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: '技术创新',
      description: '持续投入研发，推动储能技术进步',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: '客户至上',
      description: '以客户需求为导向，提供优质服务',
      color: 'text-red-400'
    },
    {
      icon: Globe,
      title: '绿色环保',
      description: '致力于可持续发展，保护地球环境',
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
            关于我们
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            绿能科技成立于2014年，专注于储能电池技术的研发、生产和销售，是行业领先的储能解决方案提供商
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
              <h3 className="text-2xl font-bold text-white mb-4">我们的使命</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                致力于为全球客户提供高效、安全、可靠的储能电池解决方案，推动清洁能源的普及应用，为构建可持续发展的未来贡献力量。
              </p>
              <p className="text-gray-300 leading-relaxed">
                我们相信，通过先进的储能技术，可以让每个人都能享受到清洁、稳定的电力供应，同时为地球环境保护做出贡献。
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">发展历程</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-blue-400 font-semibold">2014年</p>
                    <p className="text-gray-300">公司成立，专注家用储能电池研发</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-green-400 font-semibold">2018年</p>
                    <p className="text-gray-300">拓展商用储能市场，获得多项技术专利</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-purple-400 font-semibold">2022年</p>
                    <p className="text-gray-300">进军工业级储能领域，业务覆盖全球</p>
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
              alt="绿能科技现代化生产车间"
             src="https://images.unsplash.com/photo-1680591483838-67a3fe473b93" />

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">核心价值观</h3>
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
          <h3 className="text-2xl font-bold text-white text-center mb-8">我们的成就</h3>
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
