import React from 'react';
import { motion } from 'framer-motion';
import { FaLine, FaArrowRight } from 'react-icons/fa';
import { Button } from '../ui';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9)), url(/images/hero-generated-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                忙しい事業主様へ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                初期一括
                <span className="text-blue-600">69,800円</span>
                <br />
                最短
                <span className="text-blue-600">10日</span>で
                <br />
                "丸投げ"完了
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                面倒な打ち合わせは最小限に。<br />
                素材をお送りいただければ、プロが最適なサイトを制作します。<br />
                修正2回無料・レスポンシブ対応・SEO対策込み
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                無料相談を申し込む <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://line.me/R/ti/p/@example', '_blank')}
              >
                <FaLine className="mr-2" /> LINE相談
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">制作実績</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">満足度</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10日</p>
                <p className="text-sm text-gray-600">平均納期</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/hero-mockup-generated.jpg"
                alt="ホームページ制作イメージ"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-generated-bg.jpg';
                }}
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
                期間限定価格
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};