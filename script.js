const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "dandilion.jpg";

//画像をキャンバス内に作成する
img.onload = function () {
  //外部データの画像の場合、canvasで描かれていないので、まずcanvasで描画する為に、drawImageする。
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  //画像の範囲をチェック
  console.log(`canvas size${canvas.width}: ${canvas.height}`);
  console.log(`img size${img.width}: ${img.height}`);

  //描画された後、にピクセルデータを取得 canvasではなく、ctx, getContextメソッドを使う
  // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // const data = imageData.data;
  // //ピクセルデータを確認
  // console.log(data);
};

//クリックすると、画像のデータを取得する
canvas.addEventListener("click", (e) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  console.log(data);
});
//配列を作り、配列の値を0-255にする

//RGBを取得する配列を作る

//左上から右下までのRGBの数値を取得する

//getImageData()メソッドで、指定した範囲のピクセルデータであるImageDataオブジェクトを取得する
