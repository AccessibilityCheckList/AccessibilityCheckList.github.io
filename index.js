$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

const vueapp = new Vue({
  el: '#main',
  data: {
    contents: [
      {
        title: 'サイトを作る前に',
      },
      {
        title: '戦略の作成',
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