import { IItem } from '../../scripts/build-data';

export const news: IItem = {
  selector: '<ul class="list-news"></ul>',
  template: '<li><label class="form-label">{{ title }}</label><p>{{ body }}</p></li>',
  data: [
    {
      title: '飲食店等に対する営業時間短縮の要請について',
      body: '兵庫県より神戸市、尼崎市、西宮市、芦屋市に営業時間の短縮の要請が令和３年１月１２日（火）～２月７日（日）【２７日間】の期間、出ることになりました。当店の営業時間も変更し、ディナー18：00～19：00(L.O)、21：00閉店とさせて頂きます。<br>ご迷惑をお掛け致しますが、ご理解のほどよろしくお願いいたします。',
    },
        {
      title: 'コロナ感染症予防対策',
      body: 'コロナ感染症予防対策として、間隔に余裕のある席へのご案内、接客スタッフのマスク着用などの対応をしてお客様をお迎えいたします。',
    },
    {
      title: '新年あけましておめでとうございます。',
      body: '1月2日より通常営業しております。<br>皆様に楽しんでいただけます様にたくさんの食材をご用意してお待ちしております。',
    },
    {
      title: '2021年1月のおやすみ',
      body: '1月1日（金）、6日（水）、13日（水）、20日（水）、27日（水）',
    },
    {
      title: '2021年2月のおやすみ',
      body: '2月3日（水）、10日（水）、17日（水）、24日（水）',
    },
  ],
};
