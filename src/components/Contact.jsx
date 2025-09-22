import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Send, User, Mail, MessageSquare, Building, Phone} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useToast} from '@/components/ui/use-toast';

const Contact = () => {
    const {toast} = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "请填写必填字段",
                description: "姓名、邮箱和留言内容为必填项",
                variant: "destructive"
            });
            return;
        }

        const apiData = {
            email: formData.email,
            first_name: formData.name,
            company: formData.company,
            your_message: formData.message
        };

        try {
            const response = await fetch('http://lekkerix.co.ke/api/inquiry/receive', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(apiData)
            });
            const res = await response.json();

            if (res.code === 200) {

                toast({
                    title: "询盘提交成功！",
                    description: "我们会在24小时内回复您的询盘，感谢您的关注！",
                });

                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                // 接口有响应但不是成功
                toast({
                    title: "提交失败",
                    description: res.msg || "请稍后重试",
                    variant: "destructive"
                });
            }
        } catch (err) {
            // 网络或其它异常
            toast({
                title: "提交失败",
                description: err.message || "请稍后重试",
                variant: "destructive"
            });
        }
    };

    const inputFields = [
        {
            name: 'name',
            label: 'Your Name',
            type: 'text',
            icon: User,
            required: true,
            placeholder: ''
        },
        {
            name: 'email',
            label: 'Your Email',
            type: 'email',
            icon: Mail,
            required: true,
            placeholder: ''
        },
        {
            name: 'company',
            label: 'Company name',
            type: 'text',
            icon: Building,
            required: false,
            placeholder: ''
        },
        {
            name: 'phone',
            label: 'Contact number',
            type: 'tel',
            icon: Phone,
            required: false,
            placeholder: ''
        }
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        Contact us
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have any questions or needs about energy storage batteries? Please feel free to contact us, our
                        professional team will provide you with the best quality service
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="space-y-8"
                    >
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Why choose us？</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Professional team',
                                        desc: 'Technical experts with more than 10 years of industry experience'
                                    },
                                    {title: 'Quick response', desc: 'Reply your inquiry within 24 hours'},
                                    {title: 'Customized solutions', desc: 'Tailored solutions tailored to your needs'},
                                    {title: 'After-sales guarantee', desc: 'Perfect after-sales service system'}
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: index * 0.1}}
                                        viewport={{once: true}}
                                        className="flex items-start space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-gray-300 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Scope of services:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Technical advice',
                                    'Scheme design',
                                    'Product selection',
                                    'Installation Instructions',
                                    'Maintenance services',
                                    'Training support'
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, scale: 0.8}}
                                        whileInView={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, delay: index * 0.1}}
                                        viewport={{once: true}}
                                        className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg p-3 text-center"
                                    >
                                        <span className="text-white font-medium">{service}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Inquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {inputFields.map((field, index) => (
                                        <motion.div
                                            key={field.name}
                                            initial={{opacity: 0, y: 20}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5, delay: index * 0.1}}
                                            viewport={{once: true}}
                                            className={field.name === 'name' || field.name === 'email' ? 'md:col-span-1' : 'md:col-span-1'}
                                        >
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                {field.label} {field.required &&
                                                <span className="text-red-400">*</span>}
                                            </label>
                                            <div className="relative">
                                                <field.icon
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"/>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    placeholder={field.placeholder}
                                                    required={field.required}
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/*<motion.div*/}
                                {/*  initial={{ opacity: 0, y: 20 }}*/}
                                {/*  whileInView={{ opacity: 1, y: 0 }}*/}
                                {/*  transition={{ duration: 0.5, delay: 0.4 }}*/}
                                {/*  viewport={{ once: true }}*/}
                                {/*>*/}
                                {/*  <label className="block text-sm font-medium text-gray-300 mb-2">*/}
                                {/*    Message*/}
                                {/*  </label>*/}
                                {/*  <div className="relative">*/}
                                {/*    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />*/}
                                {/*    <input*/}
                                {/*      type="text"*/}
                                {/*      name="subject"*/}
                                {/*      value={formData.subject}*/}
                                {/*      onChange={handleInputChange}*/}
                                {/*      placeholder="请输入询盘主题（可选）"*/}
                                {/*      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"*/}
                                {/*    />*/}
                                {/*  </div>*/}
                                {/*</motion.div>*/}

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.5}}
                                    viewport={{once: true}}
                                >
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message content <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Please describe your needs in detail, including application scenarios, capacity requirements, budget range, etc..."
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.6}}
                                    viewport={{once: true}}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 energy-glow"
                                    >
                                        <Send className="h-5 w-5 mr-2"/>
                                        Send Inquiry
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
