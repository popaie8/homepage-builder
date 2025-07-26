import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Card, Button } from '../ui';
import { mainPlan, additionalOptions } from '../../data/serviceData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分かりやすい一括料金。追加費用の心配なし。
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16"
        >
          <Card className="border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              おすすめ
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{mainPlan.name}</h3>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                ¥{mainPlan.price.toLocaleString()}
                <span className="text-lg text-gray-600 font-normal"> （税込）</span>
              </div>
              <p className="text-gray-600">初期費用のみ・追加料金なし</p>
            </div>
            
            <div className="space-y-3 mb-6">
              {mainPlan.features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">納期</span>
                <span className="font-semibold">{mainPlan.deliveryDays}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">無料修正回数</span>
                <span className="font-semibold">{mainPlan.revisions}回</span>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-6">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              このプランで申し込む
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">追加オプション</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <h4 className="font-semibold text-lg mb-2">{option.name}</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{option.price}</p>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold mb-4">よくある追加費用は一切なし！</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center">
              <FaTimes className="text-red-500 mr-2" />
              <span>ドメイン・サーバー代</span>
            </div>
            <div className="flex items-center justify-center">
              <FaTimes className="text-red-500 mr-2" />
              <span>SSL証明書</span>
            </div>
            <div className="flex items-center justify-center">
              <FaTimes className="text-red-500 mr-2" />
              <span>基本SEO対策</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            ※2年目以降のドメイン・サーバー更新費用（年間約15,000円）のみ別途必要です
          </p>
        </motion.div>
      </div>
    </section>
  );
};