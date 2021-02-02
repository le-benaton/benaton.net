import { IItem } from '../../scripts/build-data';

export const announcement: IItem = {
  selector: '<div class="announcement-container"></div>',
  template: `<section class="announcement">
                <div class="announcement-image"><img src="{{ image }}" alt=""></div>
                <div class="announcement-explain"><h5>{{ title }}</h5><p>{{ body }}</p></div>
             </section>`,
  data: [
    // 画像は300px * 300px程度のサイズにしてGitHubにアップロードください。あまりに大きいと表示に時間がかかります。
    // 以下がこのdataのスキームです。コピーして、コメントアウト（ // ）を外してご利用ください。
    // {
    //   image: 'images/announcement/104380ga10000003.jpg',
    //   title: 'クリスマス限定特別セットの予約受付をはじめました',
    //   body: 'クリスマスという特別な日に、ご家庭の食卓を華やかに彩る2～3人前のオードブルを予約限定で提供します。ブルゴーニュの定番料理「ジャンボン・ペルシエ」やミニサイズの鳥の丸焼きみたいな感じでライティングするんですがよく考えたらメニューわからないのでこんな感じです。電話にてご予約ください。',
    // },
  {
    image: 'images/announcement/IMG_0389.JPG',
    title: 'オードブル盛り合わせの販売をしております。',
    body: '前日までのご予約になります。<br>ご予算に応じて内容が変わります、2～4名様サイズとなります。<br>お電話にてご予算、苦手な食材などをお伝えください。<span class="center"><strong>1台5000円～</strong></span>',
  },
 ],
};
