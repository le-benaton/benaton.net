import { IItem } from '../../scripts/build-data';

export const news: IItem = {
  selector: '<ul class="list-news"></ul>',
  template: '<li><label class="form-label">{{ title }}</label><p>{{ body }}</p></li>',
  data: [
    {
      title: 'コロナ感染症予防対策',
      body: 'コロナ感染症予防対策として、空気の入れ替え、間隔に余裕のある席へのご案内、アクリル板等、接客スタッフのマスク着用などの対応をしてお客様をお迎えいたします。<br>当店は、新型コロナウイルス対策認証店です。<br>2時間程度でのお食事をお願いいたします。',
    },
    {
      title: '2021年12月のおやすみ',
      body: '12月1日（水）、8日（水）、15日（水）、22日（水）、29日（水）～1月1日（土）',
    },
    {
      title: '年末年始のおやすみ',
      body: '12月29日（水）から2022年1月1日（土）までお休みを頂戴いたします。<br>31日は年末オードブルのお引き渡のみ。',
    },
    {
      title: '2022年1月のおやすみ',
      body: '1月1日（土）、5日（水）、12日（水）、19日（水）、26日（水）',
    },
  ],
};
