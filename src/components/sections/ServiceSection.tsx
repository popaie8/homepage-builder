import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaHandshake, FaDollarSign } from 'react-icons/fa';
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
          <h3 className="text-2xl font-bold text-center mb-8">制作の流れ</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* プログレスライン */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2 md:transform md:-translate-x-1/2" />
              
              {processFlow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:pr-8 ml-20 md:ml-0">
                    <Card className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h4 className="text-lg font-semibold mb-2">
                        <span className="hidden md:inline">{step.step}. </span>
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </Card>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {step.step}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};