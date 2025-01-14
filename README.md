# CartShare

詳しいコードは https://github.com/jphacks/os_2405/tree/develop

[![IMAGE ALT TEXT HERE](https://jphacks.com/wp-content/uploads/2024/07/JPHACKS2024_ogp.jpg)](https://www.youtube.com/watch?v=DZXUkEj-CSI)

## 製品概要
私たちが作成したのは、買い物リスト共有アプリ「CartShare」です。
家族や友人と手軽に買い物リストを共有することで、重複購入や買い忘れをなくすことが期待されます。
また、買うべき商品をメモ帳という単位でグループ分けすることで、個人で利用する買い物リストとしても使いやすいアプリとなっています。

### 背景(製品開発のきっかけ、課題等）
製品開発のきっかけは、大学の研究室でのBBQでの経験でした。
多人数が参加するイベントであったので、購入する物品についても相談を重ねたにも関わらず、飲み物等に不足が出てしまったのです。
自分自身の買い物ならよいですが、頼まれた買い物や分担した買い物を忘れることはなるべく避けたいと考える人がほとんどでしょう。
そこで私たちは、簡単に買い物リストが共有できる便利なアプリがあればと考え、今回のJPHackで開発に取り組みました。
私たちが課題としたのは手軽さです。デバイスを立ち上げることさえ回数を重ねれば億劫となります。
その上、UIが複雑だったり、共有したい人が全員同一のアプリをインストールする必要があったりするとユーザーは更なるめんどくささを感じることでしょう。
そこで、最小限の構成だからこそ便利で使いやすいアプリケーションを目指しました。

### 製品説明（具体的な製品の説明）
### 特長
#### 1. メモ帳によるグループ化
個人・集団のどちらで使用する場合においても、データのグルーピングは必要不可欠です。
本アプリでは物品を「メモ帳」という単位で管理しており、誰かが作成したメモ帳を共有することができます。

#### 2. 物品追加が容易
買い物アプリを使用する際に、物品情報の入力は大変な手間になります。
本アプリでは、期限と個数という最小限の情報に絞ることで、低ストレスで情報の入力を行うことができます。

#### 3. 特長3

### 解決出来ること
SNS等で、テキストだけで買い物の頼み事をすると、欲しいものの情報がわかりにくくになってしまいます。
そこで，視認性を向上させるために，UIに力を入れ，パッと見てわかりやすいWebアプリを目指しました。

- 買ってきてほしいものをメモ単位で管理
- 買い物に必要な情報をわかりやすく一括で閲覧できる

### 今後の展望
- 現在は，データベースの中身が更新された際に。一度画面のリロードをかけないと情報が反映されないという問題があります。そのため、firebaseのリアルタイムリスナーを用いて、よりリアルタイム更新を可能にし、より、実際のアプリに近くしたいです。
- 買ってきて欲しいものに担当者情報を設定できるようにし、チーム内でより使いやすいようにしたいです。


### 注力したこと（こだわり等）
- 物品情報の表示のUIはシンプルイズベストにしました。一覧画面では「名前と期限のみ」を表示、詳細は各々のアイテムをクリックして表示する見せ方にしました。
- メモで物品をまとめて管理できるようにしました、
- コンポーネント設計を工夫し、複数回使うコンポーネントは再利用性を高めました。
  - ex)入力フィールド，物品情報
- Storybookを活用し，単体コンポーネントでのテストを可能にしました。
- Firebase Authenticationを用いて、ユーザ認証を実装しました。

- 開発の中ではFigmaでプロトタイプを作成し、メンバーとイメージの共有がしやすいようにしました。
<img width="664" alt="image" src="https://github.com/user-attachments/assets/2967f926-afba-465c-b219-03da1570c795">


## 開発技術
### 活用した技術

#### フレームワーク・ライブラリ・モジュール
* Vue.js
* Firebase Authentication
* Firestore
* Storybook

#### ハッカソンで開発した独自機能・技術
- 買ってきてほしいものの作成機能
  - 個数，期限を紐づけられる
- メモのグルーピング機能
  - ex)カレーのメモには「じゃがいも」「人参」「牛肉」など 
