import ShareTarget from './ShareTarget.js'
import SCMA from './SCMA.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('サービスワーカーの登録成功');
  }).catch(function(err) {
    console.log('サービスワーカーの登録ができませんでした：', err);
  });
}

ShareTarget.setInputValue()
SCMA.addOnClick()
