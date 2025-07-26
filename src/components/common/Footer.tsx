import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLine } from 'react-icons/fa';
import { companyInfo } from '../../data/companyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'サービス',
      links: [
        { label: 'ホームページ制作', href: '#service' },
        { label: '料金プラン', href: '#pricing' },
        { label: '制作実績', href: '#portfolio' },
      ]
    },
    {
      title: 'サポート',
      links: [
        { label: 'よくある質問', href: '#faq' },
        { label: 'お問い合わせ', href: '#contact' },
        { label: 'LINE相談', href: 'https://line.me/R/ti/p/@example' },
      ]
    },
    {
      title: '会社情報',
      links: [
        { label: '会社概要', href: '#company' },
        { label: 'プライバシーポリシー', href: '/privacy' },
        { label: '特定商取引法', href: '/legal' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLine, href: 'https://line.me/R/ti/p/@example', label: 'LINE' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-400 text-sm mb-4">
              初期一括69,800円で<br />
              最短10日完成のホームページ制作
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              {companyInfo.address}
            </p>
            <p className="mb-2">
              適格請求書発行事業者番号: {companyInfo.invoiceNumber}
            </p>
            <p>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};