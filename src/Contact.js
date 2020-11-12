import React from "react";

function Contact() {
  return (
    <>
      <div className="box8">
        <p className="yellowtitle" id="contact">
          CONTACT
        </p>
        <p className="explain explainone">お問い合わせ</p>

        <div className="box9">
          <table line-height="56px">
            <tbody>
              {/*名前  */}
              <th className="left">
                <p>名前</p>
              </th>
              <th className="right">
                <input type="text" size="30" />
              </th>
              {/* メールアドレス */}
              <tr>
                <th className="left">
                  <p>メールアドレス</p>
                </th>
                <th className="right">
                  <input type="text" size="30" />
                </th>
              </tr>
              {/* select */}
              <tr line-height="100px">
                <th className="left cheese">
                  <p>TourNaviを知ったきっかけ</p>
                </th>
                <th className="right">
                  <select width="500px">
                    <option value="0"></option>
                    <option value="1">google検索</option>
                    <option value="2">SNS</option>
                    <option value="3">紹介</option>
                    <option value="4">たまたま通りかかった</option>
                    <option value="5">その他</option>
                  </select>
                </th>
              </tr>
              {/* checkbox */}
              <tr>
                <th className="left">
                  <p>お気に入りのサービス</p>
                </th>
                <th className="right">
                  <label className="container">
                    <p>旅行の記録</p>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container">
                    <p>旅行プラン推奨</p>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container">
                    <p>コミュニテ</p>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container">
                    <p>事前予約</p>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </th>
              </tr>
              {/* textarea */}
              <tr className="area">
                <th className="left">
                  <p>詳細</p>
                </th>
                <th className="right">
                  <textarea row="100" size="80"></textarea>
                </th>
              </tr>
            </tbody>
          </table>

          {/* submit button */}
          <div className="submitbutton">
            <input className="submitbox soushin" type="submit" value="送信" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
