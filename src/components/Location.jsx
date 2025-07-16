
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 动态加载 Leaflet
    const loadMap = async () => {
      try {
        const L = await import('leaflet');
        
        if (mapRef.current && !mapRef.current._leaflet_id) {
          // 深圳市坐标
          const map = L.map(mapRef.current).setView([22.5431, 114.0579], 13);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // 自定义标记图标
          const customIcon = L.divIcon({
            html: `<div style="background: linear-gradient(45deg, #3b82f6, #10b981); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>`,
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          });

          L.marker([22.5431, 114.0579], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
              <div style="text-align: center; padding: 10px;">
                <strong style="color: #1f2937;">绿能科技总部</strong><br>
                <span style="color: #6b7280;">深圳市南山区科技园</span>
              </div>
            `);
        }
      } catch (error) {
        console.error('地图加载失败:', error);
      }
    };

    loadMap();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: '公司地址',
      content: '深圳市南山区科技园南区高新南七道12号',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '+86 755-8888-9999',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: '邮箱地址',
      content: 'info@greenenergy.com',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周五 9:00-18:00',
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
            我们的位置
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            欢迎来到我们位于深圳科技园的总部，体验最新的储能技术和解决方案
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
              <h3 className="text-2xl font-bold text-white mb-6">联系信息</h3>
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

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">交通指南</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">地铁</h4>
                  <p>地铁1号线高新园站A出口，步行5分钟</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">公交</h4>
                  <p>高新园地铁站、科技园站多路公交可达</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">自驾</h4>
                  <p>大楼地下停车场，访客停车位充足</p>
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
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">位置地图</h3>
              <div 
                ref={mapRef}
                className="leaflet-container rounded-lg"
                style={{ height: '400px' }}
              />
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">周边环境</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-300">科技园核心区域</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="text-sm text-gray-300">临近高新技术企业</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-300">交通便利</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-300">配套设施完善</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
