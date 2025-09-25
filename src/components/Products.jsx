import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Battery, Zap, Shield, Gauge, Thermometer, Recycle, ShieldCheck} from 'lucide-react';
import {useToast} from '@/components/ui/use-toast';
import {Button} from "@/components/ui/button.jsx";

const Products = () => {
    const {toast} = useToast();

    const handleLearnMore = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://lekkerix.co.ke/api/inquiry/products');
                const res = await response.json();

                if (res.code === 200) {
                    setProducts(res.data || []);
                } else {
                    toast({
                        title: "Product acquisition failed",
                        description: res.msg || "Please try again later",
                        variant: "destructive"
                    });
                }
            } catch (err) {
                toast({
                    title: "Product acquisition failed",
                    description: err.message || "Please try again later",
                    variant: "destructive"
                });
            }
        };

        fetchProducts();
    }, [toast]);

    return (
        <section id="products" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        Our Product
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From home to industrial, we offer a full range of energy storage battery solutions to meet the
                        energy needs of different scenarios
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                            viewport={{once: true}}
                            whileHover={{y: -10}}
                            className="product-card rounded-2xl p-8 group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative mb-6">

                                <img
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    alt={`${product.name}Product image`}
                                    src={product.imgUrl}/>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-blue-400 text-lg font-semibold mb-4">{product.capacity}</p>


                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <Gauge className="h-5 w-5 text-blue-400 mx-auto mb-1"/>
                                    <p className="text-xs text-gray-400">Voltage current</p>
                                    <p className="text-sm font-semibold text-white">{product.voltage}</p>
                                </div>
                                <div className="text-center">
                                    <Recycle className="h-5 w-5 text-green-400 mx-auto mb-1"/>
                                    <p className="text-xs text-gray-400">Cycles</p>
                                    <p className="text-sm font-semibold text-white">{product.cycles}</p>
                                </div>
                                <div className="text-center">
                                    <ShieldCheck className="h-5 w-5 text-yellow-400 mx-auto mb-1"/>
                                    <p className="text-xs text-gray-400">Warranty</p>
                                    <p className="text-sm font-semibold text-white">{product.efficiency}</p>
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
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.6}}
                    viewport={{once: true}}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Why choose our energy storage batteries？</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div
                                    className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Battery className="h-6 w-6 text-blue-400"/>
                                </div>
                                <h4 className="font-semibold text-white mb-2">Advanced technology</h4>
                                <p className="text-gray-300 text-sm">It adopts the latest lithium battery technology to
                                    ensure efficient and stable performance</p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Shield className="h-6 w-6 text-green-400"/>
                                </div>
                                <h4 className="font-semibold text-white mb-2">Safe and reliable</h4>
                                <p className="text-gray-300 text-sm">Multiple security protection mechanisms, passed
                                    international safety certification standards</p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Zap className="h-6 w-6 text-purple-400"/>
                                </div>
                                <h4 className="font-semibold text-white mb-2">Intelligent management</h4>
                                <p className="text-gray-300 text-sm">Intelligent BMS system monitors battery status in
                                    real time and optimizes usage efficiency</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
