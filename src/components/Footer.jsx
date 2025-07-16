
import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '产品系列',
      links: ['家用储能电池', '商用储能解决方案', '工业级储能系统', '智能管理系统']
    },
    {
      title: '服务支持',
      links: ['技术咨询', '安装指导', '维护服务', '培训支持']
    },
    {
      title: '关于我们',
      links: ['公司简介', '发展历程', '核心团队', '企业文化']
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+86 755-8888-9999' },
    { icon: Mail, text: 'info@greenenergy.com' },
    { icon: MapPin, text: '深圳市南山区科技园南区' },
    { icon: Globe, text: 'www.greenenergy.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border border-blue-400/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-green-400/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Battery className="h-8 w-8 text-blue-400" />
                <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                绿能科技
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              专注于储能电池技术研发与生产，为全球客户提供高效、安全、可靠的储能解决方案。
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              <span>© {currentYear} 绿能科技有限公司. 保留所有权利.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">隐私政策</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">服务条款</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">网站地图</span>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-xs">
            粤ICP备12345678号 | 营业执照 | 环保认证 | ISO9001质量管理体系认证
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
