import { IMenu } from '../config/types';

export const launch: IMenu[] = [
  {
    title: 'Aコース',
    subTitle: 'lunch only',
    image: 'assets/images/lunch1.jpg',
    price: '¥4,290（税込、サービス料5%別途）',
    option: '12月1日より¥4,620',
    menu: ['アミューズ', '前菜（数種類からお選びいただけます）', 'メイン料理（本日のお魚又はお肉料理）', 'デザート', 'パン、コーヒー'],
  },
  {
    title: 'Bコース',
    subTitle: 'lunch only',
    image: 'assets/images/lunch2.jpg',
    price: '¥5,830（税込、サービス料5%別途）',
    option: '12月1日より¥6,050',
    menu: [
      'アミューズ',
      '前菜（数種類からお選びいただけます）',
      'お魚料理（数種類からお選びいただけます）',
      'お肉料理（数種類からお選びいただけます）',
      'デザート',
      'パン、コーヒー',
    ],
  },
  {
    title: 'Cコース・Dコース',
    subTitle: 'lunch only',
    image: 'assets/images/lunch3.jpg',
    price: '¥7,150 / ¥11,000 （税込、サービス料5%別途）',
    option: '12月1日より¥7,590／¥12,100',
    menu: ['アミューズ、前菜、メイン（お肉、魚介）を、その日の食材でお料理を組み立てさせていただきます', 'デザート', 'パン、コーヒー'],
  },
];
