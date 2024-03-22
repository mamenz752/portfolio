import { Headings } from "@/components/common/components/Headings";
import { Icon } from "@/components/common/components/Icon";

export const AboutPresenter = () => {
  return (
    <div className="w-2/3 m-auto flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" />
      <div className="section-title">
        <h1 className="section-ttl-en">ABOUT ME</h1>
        <h2 className="section-ttl-jp">私について</h2>
      </div>
      <div className="my-img">
        <img src="profile.png" alt="mamenz752のイメージ画像" />
      </div>
      <h3 className="my-name">サヤ</h3>
      <p className="my-title">DATA SCIENCE STUDENT</p>
      <ul className="sns-link">
        <li className="sns-link-item" id="git-hub">
          <a
            href="https://github.com/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="fa-github" />
          </a>
        </li>
        <li className="sns-link-item" id="instagram">
          <a
            href="https://instagram.com/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li className="sns-link-item" id="x">
          <a
            href="https://x.com/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
      </ul>
      <div className="description">
        <p>広島県出身の現役情報系大学3年生。</p>
        <p>
          中学生の時にScratchを始めたことがきっかけで、
          <br />
          プログラミングの勉強を開始。
        </p>
        <p>
          大学ではデータサイエンスを専攻しているが、
          <br />
          WEBデザインも得意である。
        </p>
        <p>最近力を入れていることは、</p>
        <p>
          <b>Kaggleのコンぺで入賞するための勉強</b>と<br />
          <b>AtCoderの茶色コーダーへ昇格するための勉強</b>
        </p>
        <p>である。</p>
      </div>
      <div className="child-title">
        <h3 className="child-ttl-en">OTHER LINKS</h3>
        <h4 className="child-ttl-jp">その他の関連リンク</h4>
      </div>
      <ul className="sns-link2">
        {/* <!-- TODO: add Blog Link --> */}
        <li className="sns-link-item2">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li className="sns-link-item2">
          <a
            href="https://qiita.com/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qiita
          </a>
        </li>
        <li className="sns-link-item2">
          <a
            href="https://www.kaggle.com/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaggle
          </a>
        </li>
        <li className="sns-link-item2">
          <a
            href="https://atcoder.jp/users/mamenz752"
            target="_blank"
            rel="noopener noreferrer"
          >
            AtCoder
          </a>
        </li>
      </ul>
    </div>
  );
};
