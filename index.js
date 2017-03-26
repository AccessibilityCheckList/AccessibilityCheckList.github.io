$(document).ready(function () {
  $('.scrollspy').scrollSpy();
  $('ul.pined li:first-child ul').css('display', 'block');
});

$(".button-collapse").sideNav();


$(window).scroll(function(){

  var $li = $('ul.pined li')

  $li.each(function(index){

    var text = $(this).find('a.active').text();

    if(text === '') {
      $(this).find('ul').css('display', 'none');
    } else {
      $(this).find('ul').css('display', 'block');
    }
    
  })    
})

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
            head: '関係者の中でアクセシビリティの対応方針の合意ができているか？',
            body: 'プロジェクトメンバー内でアクセシビリティ方針が合意できていないと、適切な対応ができない、または終盤で覆る可能性がある。まずは最低限の方針を決定しメンバーと共有する。',
            isOpen: true,
            isChecked: false,
          },
          {
            head: '適応範囲やスケジュールなど方針を決定しているか？',
            body: '方針(WCAGやJIS規格のどこまで準拠するか)、対象(PDFや動画は対象外とするか)、スケジュールなどを明確にする必要がある。スクリーンリーダーの読み上げなど特定環境に特化せず様々な環境でアクセスできるように配慮する。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '手段が目的になり目に見えやすい施策だけ取り入れようとしていないか？',
            body: '文字サイズの変更、読み上げ、動画のテキスト版など取り込み安い施策を取り込むだけでは、本当にアクセシビリティが向上しているとは言えない。アクセシビリティ確保の目的を明確にする必要がある。',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: '要件定義',
        items: [
          {
            head: 'CAPTCHAを導入する場合は別の手段を用意しているか？',
            body: 'CAPTCHAはロボットによる自動アクセスを排除するための仕組みだが、画像が見えないユーザーへのアクセシビリティ低下につながる。画像だけでなく、音声で利用できるようにしたり、電話による連絡の手段を用意する。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'ブラウザやOSの機能を妨げないか？',
            body: '右クリック禁止、戻るボタン禁止、キーボード禁止などユーザー操作を抑止した場合、その機能に頼ってアクセスしているユーザーのアクセシビリティ低下を招く',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '文字サイズ拡大ボタンなど冗長なアクセシビリティを提供していないか？',
            body: 
            `文字サイズ拡大ボタンは、画像の拡大に対応していなかったり、スクリーンリーダーの邪魔になる。ブラウザ自体に文字の拡大機能はついているのでそちらで代替することができる。\n
             音声読み上げ版のコンテンツは、操作自体ができず、リンクもたどれない。支援技術のスクリーンリーダーで代替できる。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '動画コンテンツにアクセスできるか？',
            body: 
            `動画コンテンツは、音声と映像両方にアクセスできなければ動画を理解できあに可能性がある。
            字幕やテキスト版を用意するなどして対応する。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '紙媒体のコンテンツを利用する場合、アクセシブルか？',
            body: 
            `紙媒体をWebに利用する場合、PDF化して利用する可能性があるが、スクリーンリーダーでアクセスできない。Webとして再構築する必要がある。`,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'CMS導入時にアクセシビリティを考慮しているか？',
            body: 
            `CMSでアクセシビリティ上望ましくないHTMLが出力されることがある。
            例えば、画像の代替テキストが指定できない、表以外の箇所でtableとしてマークアップされるなど。
            CMS選定にアクセシビリティの観点を入れる必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'ナビゲーション設計',
        items: [
          {
            head: '分類や並び順が提供側都合になっていないか？',
            body: '事業部毎の分類になっていないか、ユーザーが欲しい情報が先頭に並んでいるか？など提供側の都合で決めずにユーザー視点で考える。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '分類を一種類に限定してないか？',
            body: 'ユーザーは、並び順を「人気順」「日付順」「安い順」など複数の切り口でみたい。並び替えを複数の方法で行えるように提供する。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'カテゴリー名はわかりやすいか？',
            body: '社内用語や曖昧な表現でユーザーが理解しづらいカテゴリー名になっていないか。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '提供するコンテンツと構成があっているか？',
            body: 'TwitterのタイムラインやPinterestのイメージレイアウトなど目的に沿った構成にすべき。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '途中の階層ページはあるか？',
            body: '検索エンジンからユーザーが来た場合、カテゴリ毎に階層化されたページがなければ、他の類似のコンテンツを確認することができない',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'インタラクション設計',
        items: [
          {
            head: '',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'システム設計',
        items: [
          {
            head: '',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'コンテンツ設計',
        items: [
          {
            head: '',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'ビジュアルデザイン',
        items: [
          {
            head: '',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: '実装',
        items: [
          {
            head: '',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
    ]
  }
})