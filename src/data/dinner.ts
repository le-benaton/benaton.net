import { IMenu } from '../config/types';

export const dinnerPrefix: IMenu[] = [
  {
    title: 'ヴォルネイコース',
    subTitle: 'Volnay',
    image: 'assets/images/dinner1.jpg',
    price: '¥7,920（税込、サービス料10%別途）',
    menu: [
      'アミューズ',
      '前菜（数種類からお選びいただけます）',
      'お魚料理',
      'お肉料理（数種類からお選びいただけます）',
      'チーズ又は、小さなサラダ',
      'デザート(数種類からお選びいただけます)',
      'パン、コーヒー',
    ],
  },
  {
    title: 'ボーヌコース',
    subTitle: 'Beaune',
    image: 'assets/images/dinner2.jpg',
    price: '¥11,000（税込、サービス料10%別途）',
    menu: [
      'アミューズ',
      '前菜２種（数種類からお選びいただけます）',
      'ボキャルドオマール（オマール海老のスープ仕立)',
      'メイン料理（数種類のお肉の中からお選びいただけます)',
      'チーズ又は、小さなサラダ',
      'デザート(数種類からお選びいただけます)',
      'パン、コーヒー',
    ],
  },
];

export const dinnerChief: IMenu[] = [
  {
    title: 'ムルソーコース',
    subTitle: 'Meursault',
    image: 'assets/images/dinner3.jpg',
    price: '¥15,400（税込、サービス料10%別途）',
    menu: [],
  },
  {
    title: 'モンラッシェコース',
    subTitle: 'Montrachet',
    image: 'assets/images/dinner4.jpg',
    price: '¥22,000（税込、サービス料10%別途）',
    menu: [],
  },
  {
    title: 'コルトンコース',
    subTitle: 'Corton',
    image: 'assets/images/dinner5.jpg',
    price: '¥28,600（税込、サービス料10%別途）',
    menu: [],
  },
];
