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
            body: 'プロジェクトメンバー内でアクセシビリティ方針が合意できていないと、適切な対応ができない、または終盤で覆る可能性がある。まずは最低限の方針を決定しメンバーと共有する。',
            isOpen: true,
            isChecked: false,
          },
          {
            head: '適切な方針を設定できているか？',
            body: '方針(WCAGやJIS規格のどこまで準拠するか)、対象(PDFや動画は対象外とするか)、スケジュールなどを明確にする必要がある。スクリーンリーダーの読み上げなど特定環境に特化せず様々な環境でアクセスできるように配慮する。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '適切な方針を設定できているか？',
            body: '方針(WCAGやJIS規格のどこまで準拠するか)、対象(PDFや動画は対象外とするか)、スケジュールなどを明確にする必要がある。スクリーンリーダーの読み上げなど特定環境に特化せず様々な環境でアクセスできるように配慮する。',
            isOpen: false,
            isChecked: false,
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