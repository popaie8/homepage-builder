import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui';
import { companyInfo } from '../../data/companyData';

export const CompanySection: React.FC = () => {
  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            会社概要
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            私たちは、忙しい事業主様のパートナーとして、
            ビジネスの成長をサポートします。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-6">会社情報</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-600 mb-1">会社名</dt>
                  <dd className="font-medium">{companyInfo.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">所在地</dt>
                  <dd className="font-medium">{companyInfo.address}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">代表者</dt>
                  <dd className="font-medium">{companyInfo.representative}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">適格請求書発行事業者番号</dt>
                  <dd className="font-medium">{companyInfo.invoiceNumber}</dd>
                </div>
              </dl>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-6">代表メッセージ</h3>
              <div className="text-gray-700 space-y-4 whitespace-pre-line">
                {companyInfo.representativeMessage}
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-right text-gray-600">
                  {companyInfo.representative}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-blue-50">
            <h3 className="text-xl font-semibold mb-4">私たちの約束</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">透明性</div>
                <p className="text-gray-700">
                  料金は明確。<br />
                  追加費用の心配なし
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">スピード</div>
                <p className="text-gray-700">
                  最短10日で完成。<br />
                  ビジネスを加速
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">品質</div>
                <p className="text-gray-700">
                  プロの仕上がり。<br />
                  満足度98%の実績
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};