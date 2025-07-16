
import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, Gauge, Thermometer, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "🚧 此功能尚未实现",
      description: "别担心！您可以在下一个提示中请求此功能！🚀",
    });
  };

  const products = [
    {
      id: 1,
      name: '家用储能电池系统',
      capacity: '10kWh - 20kWh',
      features: ['智能管理', '安全保护', '长寿命'],
      icon: Battery,
      color: 'from-blue-500 to-cyan-500',
      specs: {
        voltage: '48V',
        cycles: '6000+',
        efficiency: '95%'
      }
    },
    {
      id: 2,
      name: '商用储能解决方案',
      capacity: '50kWh - 500kWh',
      features: ['模块化设计', '远程监控', '快速响应'],
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      specs: {
        voltage: '400V',
        cycles: '8000+',
        efficiency: '96%'
      }
    },
    {
      id: 3,
      name: '工业级储能系统',
      capacity: '1MWh - 10MWh',
      features: ['高功率密度', '智能调度', '并网友好'],
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      specs: {
        voltage: '1000V',
        cycles: '10000+',
        efficiency: '97%'
      }
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            我们的产品
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            从家用到工业级，我们提供全方位的储能电池解决方案，满足不同场景的能源需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="product-card rounded-2xl p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <img  
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                  alt={`${product.name}产品图片`}
                 src="https://images.unsplash.com/photo-1680591483838-67a3fe473b93" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-blue-400 text-lg font-semibold mb-4">{product.capacity}</p>

              <div className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Gauge className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">电压</p>
                  <p className="text-sm font-semibold text-white">{product.specs.voltage}</p>
                </div>
                <div className="text-center">
                  <Recycle className="h-5 w-5 text-green-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">循环次数</p>
                  <p className="text-sm font-semibold text-white">{product.specs.cycles}</p>
                </div>
                <div className="text-center">
                  <Thermometer className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">效率</p>
                  <p className="text-sm font-semibold text-white">{product.specs.efficiency}</p>
                </div>
              </div>

              <Button
                onClick={handleLearnMore}
                className={`w-full bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300`}
              >
                了解更多
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">为什么选择我们的储能电池？</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Battery className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">先进技术</h4>
                <p className="text-gray-300 text-sm">采用最新的锂电池技术，确保高效稳定的性能表现</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">安全可靠</h4>
                <p className="text-gray-300 text-sm">多重安全保护机制，通过国际安全认证标准</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">智能管理</h4>
                <p className="text-gray-300 text-sm">智能BMS系统，实时监控电池状态，优化使用效率</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
