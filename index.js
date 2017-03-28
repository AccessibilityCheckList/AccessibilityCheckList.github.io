$(document).ready(function () {
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav();
  $('ul.pined li:first-child ul').css('display', 'block');
});



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
            body: '社内用語や曖昧な表現でユーザーが理解しづらいカテゴリー名になっていないか考える必要がある。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '提供するコンテンツと構成があっているか？',
            body: 'TwitterのタイムラインやPinterestのレイアウトなど目的に沿った構成にする必要がある。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '途中の階層ページはあるか？',
            body: '検索エンジンからユーザーが来た場合、カテゴリ毎に階層化されたページがなければ、他の類似のコンテンツを確認することができない',
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'ナビゲーションに一貫性があるか？',
            body: 'ナビゲーションの位置、スタイル、ラベルなど一貫性のあるデザインする必要がある。',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '現在地はわかるか？',
            body: 'ナビゲーションの中で、今自分がどの位置にいるかわかる必要がある',
            isOpen: false,
            isChecked: false,
          },
          {
            head: '手前や最初に戻る手段を提供しているか？行き止まりのページを作っていないか？',
            body: `ユーザーが迷った場合にトップページやカテゴリを手がかりに移動するが、
            トップページや最初のページへのリンクが見つからない場合に目的を達成できないことがある。
            また読み終わった後に行き先がわからないと、次のアクションを起こせない。
            検索結果に対してやり直す手段を提供する必要もある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'サイトマップやサイト内検索など情報到達への手段を複数準備しているか？',
            body: `
            ユーザーのニーズやリテラシーは様々で、メインのナビゲーションだけでは
            必要な情報に到達できない可能性がある。サイトマップ、サイト内検索など
            情報到達への手段を複数準備する必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
        ]
      },
      {
        title: 'インタラクション設計',
        items: [
          {
            head: 'デバイスに依存したUIになっていないか？',
            body: `
            マウスでの操作（クリック、マウスオーバーなど）しか想定していない、スワイプしか想定していないなど
            デバイスに依存したUIではユーザーがアクセスできない可能性がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '不要にスクロールを制御していないか？',
            body: `
            スクロールバーが消えたり、OS標準のもので無くなると、ユーザーはスクロールできることに気付きにくい。
            また地図などでインナースクロールの範囲が広すぎると全体をスクロールできないことがある。
            無限スクロールはスクリーンリーダーのユーザーはページが伸びていることに気づかないことがある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '新規タブやポップアップを開いてユーザー操作の邪魔になっていないか？',
            body: `
            外部リンクを新規タブで開く場合、タブが開いたことに気が付かないことがある。またユーザーやデバイスによっては新規タブを認識しないこともある。
            外部リンクはコンテンツ上に外部リンクであることを明記したり、新規タブ以外の手段で提供する必要がある。
            ポップアップはユーザー操作を妨げる可能性があるので、同一画面内で情報を提供できるようにしたり、ポップアップだと予見できるようにする。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '一定時間で勝手にページ遷移する仕様になってないか？',
            body: `
            意図しないページ遷移はユーザーに混乱を与えるため、中間ページは用意しない、またはユーザーの操作で遷移するよう設計する。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'ユーザーが動きをコントロールできない設計になっていないか？',
            body: `
            文書はユーザーによって読むスピードに違いがあるため、自動スクロールだと読むことができない可能性がある。
            また画面内で動くものを操作するしようとして誤操作を誘発することがある。
            動きがあるものはコンテンツの中でも絞り、可能な限りユーザーが自分で操作できるようにする。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '音声が勝手に再生されないか？',
            body: `
            ユーザーは音が再生されてよい場所で操作しているとは限らないため、
            自動で音が再生されるような仕様にはしない。音声を再生するかどうかはユーザーにゆだねるようにする。
            `,
            isOpen: false,
            isChecked: false,
          },
          
        ]
      },
      {
        title: 'システム設計',
        items: [
          {
            head: 'Under Construction',
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
            head: 'Under Construction',
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
            head: 'Under Construction',
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
            head: 'Under Construction',
            body: '',
            isOpen: false,
            isChecked: false,
          },
        ]
      },
    ]
  },
  methods: {
    openAll: function(){
      changeState(this.contents, "isOpen", true)
    },
    closeAll: function(){
      changeState(this.contents, "isOpen", false)
    },
    checkAll: function(){
      changeState(this.contents, "isChecked", true)
    },
    uncheckAll: function(){
      changeState(this.contents, "isChecked", false)
    },
  }
})

function changeState(ar, target, bool) {
    ar.map(function(group, index){
      group.items.map(function(item, index){
        item[target] = bool;
      })
    })
}
      
