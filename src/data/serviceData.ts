import type { ServicePlan, AdditionalOption } from '../types';

export const mainPlan: ServicePlan = {
  name: "スタティックプラン",
  price: 69800,
  features: [
    "最大7ページまで対応",
    "レスポンシブ対応（スマホ・タブレット・PC）",
    "基本SEO対策込み",
    "お問い合わせフォーム実装",
    "修正2回まで無料",
    "SSL対応",
    "Googleマップ埋め込み",
    "SNSリンク設置"
  ],
  deliveryDays: "7-10営業日",
  revisions: 2
};

export const additionalOptions: AdditionalOption[] = [
  {
    name: "ブログ機能導入",
    price: "10,000円〜30,000円",
    description: "更新可能なブログ機能を追加"
  },
  {
    name: "追加ページ制作",
    price: "8,000円/ページ",
    description: "8ページ目以降の追加ページ"
  },
  {
    name: "多言語対応",
    price: "20,000円/言語",
    description: "英語・中国語など多言語化"
  },
  {
    name: "ECカート機能",
    price: "50,000円〜",
    description: "商品販売機能の追加"
  },
  {
    name: "写真撮影",
    price: "30,000円〜",
    description: "プロカメラマンによる撮影"
  },
  {
    name: "ロゴデザイン",
    price: "20,000円〜",
    description: "オリジナルロゴの制作"
  }
];

export const processFlow = [
  {
    step: 1,
    title: "戦略的ヒアリング",
    description: "ビジネス目標とターゲット層を明確化し、最適なサイト構成をご提案",
    duration: "30分〜1時間",
    icon: "FaComments"
  },
  {
    step: 2,
    title: "コンテンツ設計",
    description: "ブランドアイデンティティを活かした情報設計と導線の最適化",
    duration: "2営業日",
    icon: "FaSitemap"
  },
  {
    step: 3,
    title: "デザイン制作",
    description: "最新のUIトレンドと高いユーザビリティを両立したデザイン提案",
    duration: "3営業日",
    icon: "FaPaintBrush"
  },
  {
    step: 4,
    title: "開発・実装",
    description: "高速表示とSEO最適化を実現する最新技術での実装",
    duration: "2営業日",
    icon: "FaCode"
  },
  {
    step: 5,
    title: "品質保証",
    description: "マルチデバイス検証とパフォーマンステストで品質を担保",
    duration: "1営業日",
    icon: "FaCheckCircle"
  },
  {
    step: 6,
    title: "納品・運用開始",
    description: "セキュアな本番環境への展開と運用マニュアルのご提供",
    duration: "1営業日",
    icon: "FaRocket"
  }
];