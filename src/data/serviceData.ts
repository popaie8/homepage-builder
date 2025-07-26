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
    title: "お申し込み",
    description: "フォームまたはLINEからお申し込み"
  },
  {
    step: 2,
    title: "素材のご提出",
    description: "写真・テキスト・ロゴなどをご提供"
  },
  {
    step: 3,
    title: "初稿のご提出",
    description: "5営業日以内に初稿をお見せします"
  },
  {
    step: 4,
    title: "修正対応",
    description: "2回まで無料で修正いたします"
  },
  {
    step: 5,
    title: "公開",
    description: "最終確認後、本番環境へ公開"
  }
];