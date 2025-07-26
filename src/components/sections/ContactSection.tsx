import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaLine, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Card, Button, Modal } from '../ui';
import type { ContactForm } from '../../types';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>();
  
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // FormrunへのAPI送信をシミュレート
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      
      // 成功後の処理
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            まずは無料相談から。お気軽にお問い合わせください。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('name', { required: 'お名前を入力してください' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'メールアドレスを入力してください',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: '有効なメールアドレスを入力してください'
                        }
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      ご予算
                    </label>
                    <select
                      {...register('budget')}
                      id="budget"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="基本プランのみ">基本プラン（69,800円）のみ</option>
                      <option value="10万円以内">10万円以内</option>
                      <option value="20万円以内">20万円以内</option>
                      <option value="それ以上">それ以上</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      希望納期
                    </label>
                    <select
                      {...register('timeline')}
                      id="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="最短で">最短で（10営業日）</option>
                      <option value="1ヶ月以内">1ヶ月以内</option>
                      <option value="2ヶ月以内">2ヶ月以内</option>
                      <option value="相談したい">相談したい</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message', { required: 'お問い合わせ内容を入力してください' })}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="制作したいホームページの内容、現在のお悩みなどをお聞かせください"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-[200px]"
                  >
                    {isSubmitting ? '送信中...' : '無料相談を申し込む'}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-green-50 border-green-200">
              <div className="text-center">
                <FaLine className="text-4xl text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">LINE相談も可能</h3>
                <p className="text-gray-600 text-sm mb-4">
                  お友達追加で、チャットで簡単相談
                </p>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => window.open('https://line.me/R/ti/p/@example', '_blank')}
                  className="bg-green-500 hover:bg-green-600"
                >
                  LINEで相談する
                </Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">電話でのお問い合わせ</p>
                    <p className="text-gray-600">03-1234-5678</p>
                    <p className="text-sm text-gray-500">平日 10:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">メールでのお問い合わせ</p>
                    <p className="text-gray-600">info@example.com</p>
                    <p className="text-sm text-gray-500">24時間受付</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-blue-50">
              <h3 className="text-lg font-semibold mb-3">よくあるご相談</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 既存サイトのリニューアル</li>
                <li>• スマホ対応していないサイトの改修</li>
                <li>• 予算内でできる範囲の相談</li>
                <li>• 納期についての相談</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="送信完了"
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-2">お問い合わせを受け付けました</p>
          <p className="text-gray-600 mb-4">
            2営業日以内にご連絡させていただきます。
          </p>
          <p className="text-sm text-gray-500 mb-6">
            お急ぎの場合は、LINEまたはお電話でもお気軽にご連絡ください。
          </p>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccessModal(false);
              window.open('https://line.me/R/ti/p/@example', '_blank');
            }}
          >
            LINEで相談する
          </Button>
        </div>
      </Modal>
    </section>
  );
};