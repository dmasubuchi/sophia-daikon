# だいこんのサイト（Azure の基礎のデモ）

GitHub の Repo のページを、Azure App Service の Web アプリ `daikon` で動かすデモです。AI は使いません。

- 公開先：https://daikon-hccwemg6hyeghvb9.westus3-01.azurewebsites.net/
- 中身：`index.html` の1枚だけ（プログラムは要りません）

## デモの手順

1. 公開先の URL を開く。ページの右上の版が「v1」
2. GitHub でこの Repo の `index.html` を開き、鉛筆のボタンで「v1」を「v2」に書き換えて、「Commit changes」
3. Azure ポータルで Web アプリ `daikon` →「デプロイ センター」→「同期」
4. 1分ほど待って、公開先の URL を再読み込みする。版が「v2」になる

## Azure の入れ子

サブスクリプション「上智学院様ハンズオン」→ リソースグループ `teamsaitama-rg` → App Service プラン `ASP-teamsaitamarg-b41b`（P0v4、West US 3）→ Web アプリ `daikon`

## 片付け

App Service プランは、Web アプリを止めても、あるあいだずっと料金がかかります。デモが終わったら、リソースグループ `teamsaitama-rg` の App Service プランごと消します。
