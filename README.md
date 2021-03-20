# Study_Javascript


## getElementById
### Overview
getElementByIdとは、指定したid値を持つ要素をElementオブジェクトとして返すメソッドです。
HTMLタグの中から指定したidを取得して何らかの処理をしたい場合などに使用されます。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>emo </title>
  </head>
  <body>
    <p id="text"></p>
    <script>
      document.getElementById("text").innerHTML = "OUT";
    </script>
  </body>
```
> OUT
id = text の.innerHTMLに"OUT"を代入後表示