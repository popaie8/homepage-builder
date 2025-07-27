import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaHandshake, FaDollarSign, FaComments, FaSitemap, FaPaintBrush, FaCode, FaCheckCircle } from 'react-icons/fa';
import { Card } from '../ui';
import { mainPlan, processFlow } from '../../data/serviceData';

export const ServiceSection: React.FC = () => {
  const features = [
    {
      icon: FaRocket,
      title: '最短10日で完成',
      description: 'スピーディーな制作で、すぐにビジネスを加速'
    },
    {
      icon: FaHandshake,
      title: '丸投げOK',
      description: '素材をお送りいただくだけで、プロが最適なサイトを制作'
    },
    {
      icon: FaDollarSign,
      title: '追加費用なし',
      description: '基本プラン内なら追加料金は一切かかりません'
    }
  ];
  
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サービス概要
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            テンプレートを活用し、低コストで高品質なホームページを実現。
            最大7ページの静的サイトを、レスポンシブ対応・基本SEO込みで制作します。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <feature.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">プランに含まれるもの</h3>
          <Card className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainPlan.features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-4">制作の流れ</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            戦略的なアプローチで、ビジネス成果に直結するWebサイトを構築
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* プログレスライン */}
              <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processFlow.slice(0, 3).map((step, index) => {
                  const iconMap = {
                    FaComments,
                    FaSitemap,
                    FaPaintBrush,
                    FaCode,
                    FaCheckCircle,
                    FaRocket
                  };
                  const IconComponent = iconMap[step.icon as keyof typeof iconMap] || FaRocket;
                  
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* ステップ番号 */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600">
                          {step.step}
                        </div>
                      </div>
                      
                      <Card className="pt-12 pb-6 px-6 h-full hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="text-3xl text-blue-600 mx-auto mb-4" />
                        <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                        <div className="text-xs text-blue-600 font-medium">
                          期間: {step.duration}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {processFlow.slice(3, 6).map((step, index) => {
                  const iconMap = {
                    FaComments,
                    FaSitemap,
                    FaPaintBrush,
                    FaCode,
                    FaCheckCircle,
                    FaRocket
                  };
                  const IconComponent = iconMap[step.icon as keyof typeof iconMap] || FaRocket;
                  
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* ステップ番号 */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600">
                          {step.step}
                        </div>
                      </div>
                      
                      <Card className="pt-12 pb-6 px-6 h-full hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="text-3xl text-blue-600 mx-auto mb-4" />
                        <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                        <div className="text-xs text-blue-600 font-medium">
                          期間: {step.duration}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};