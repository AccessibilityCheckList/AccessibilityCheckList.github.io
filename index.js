$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

const vueapp = new Vue({
  el: '#main',
  data: {
    contents: [
      // {
      //   title: 'サイトを作る前に',

      // },
      {
        title: '戦略の作成',
        items: [
          {
            head: 'アクセシビリティについての合意形成ができているか？',
            body: 'プロジェクトメンバー内でアクセシビリティ方針が合意できていないと、適切な対応ができない、または終盤で覆る可能性がある。',
          },
        ]
          

        
      },
      {
        title: '要件定義',
      },
      {
        title: 'ナビゲーション設計',
      },
      {
        title: 'インタラクション設計',
      },
      {
        title: 'システム設計',
      },
      {
        title: 'コンテンツ設計',
      },
      {
        title: 'ビジュアルデザイン',
      },
      {
        title: '実装',
      },
    ]
  }
})