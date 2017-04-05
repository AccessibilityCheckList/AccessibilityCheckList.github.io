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
            head: '入力フォームの文脈がわかるか？',
            body: `
            タイトルや説明がなく唐突にフォームが出現していないか？スマートフォンだと画面全体を見渡すことができない
            可能性もあるため入力フォームの目的を明示する必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '入力フォームの全体像がつかめるか？',
            body: `
            入力フォームのステップがなければ、全体像を把握することができず、入力にかかる時間や手間を予見できず不安になる。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'フォームの入力に必要な準備を促しているか？',
            body: `
            あらかじめ入力に必要な情報をユーザーに伝えておかなければ、ユーザーは入力中に書類等を探すことになり、時間がかかってしまう。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'ユーザーが目的を果たすのに、入力フローが長すぎないか？',
            body: `
            予約システムなど長い入力フローの結果、最後にユーザーが目的を果たせない仕様になっていると、ユーザーは目的を達成する前にあきらめる可能性がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '一度に求める入力量は適切か？',
            body: `
            初期登録時などに、住所やクレジットカード番号など詳細な情報を入力させるのはユーザーに負担となる。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '必須に指定している項目は適切か？',
            body: `
            システム制約上必須にしている項目は、ユーザーにとって適切か考慮する必要がある。
            初期値で問題なけば、初期値をあらかじめ登録するなどしてユーザーの負担を減らす必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '補完できる内容を手入力させていないか？',
            body: `
            生年月日と年齢など、生年月日の情報があればシステム上登録できるものはユーザーに入力させないようにする必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'メールアドレスを２回入力させていないか？また @ の前後で分割して入力させていないか？',
            body: `
            メールアドレスを２回入力させる以外の方法でユーザーに間違いがないか確認してもらう方法を提供する。
            そもそもユーザーは入力ミスを防ぐためにコピー&ペーストを利用しているので @ の前後で分割した場合、
            ユーザーにとって使いにく、また手入力によるミスを誘発する。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '入力項目にラベルはあるか？入力項目の条件に関する説明は足りているか？',
            body: `
            入力項目にラベルがなければ、なんのために入力しているかユーザーが分からなくなる。プレースホルダーはラベルとして利用してはならない。
            パスワードは英数半角8文字以内など、ユーザーに入力項目の条件をあらかじめわかるようにしておく必要がある。
            必須項目は明確にし、ボタンは具体的な動作がわかるようにラベルを付ける必要がある。
            入力欄は縦にならべ十分なマージンを設ける必要がある。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '入力文字種を限定しすぎていないか？',
            body: `
          　半角と全角の違いがわからないユーザーや利用するディバイスが、全角英数入力困難な場合がある。
            入力は柔軟に受け入れ、システム側で文字変換を行うようにする。
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'セレクトボックスの選択肢はユーザービリティーを考慮できているか？',
            body: `
            年月日をセレクトボックスで選ぶ場合、100以上から選ぶためユーザーは探しにくい。
            また都道府県を選ぶ場合、名前順にソートしてあると探すのに時間がかかる（北海道→沖縄などのユーザーがイメージしやすい選択肢を提供すべき）
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: 'ミスを誘発するフォームになっていないか？',
            body: `
            リセットボタンなど、入力内容が消えるようなボタンを送信ボタンの近くに配置していないか？
            フォーカスが意図せず移動し誤入力を引き起こさないか？
            `,
            isOpen: false,
            isChecked: false,
          },
          {
            head: '無効な選択肢を選択できるようにしていないか？',
            body: `
            選択できない日付を提示するなど、あらかじめエラーとなるような選択肢は与えないよう設計する必要がある。
            `,
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
      
