import { Headings } from "@/components/common/components/Headings";
import { Icon } from "@/components/common/components/Icon";

export const AboutPresenter = () => {
  return (
    <div className="w-1/2 mx-auto py-3 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" />
      <div className="mx-auto my-6">
        <img src="profile.png" alt="mamenz752のイメージ画像" />
      </div>
      <div className="my-10">
        <h1 className="text-4xl font-zen-kaku font-bold tracking-widest text-mamenz-blue">
          サヤ
        </h1>
        <p className="text-2xl font-m-plus font-medium py-2 tracking-widest text-mamenz-blue">
          WEB DEVELOPER / STUDENT
        </p>
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
        <div className="my-4 font-zenkaku tracking-widest text-mamenz-blue">
          <p>広島県出身の大学3年生。</p>
          <p>Web開発が楽しくて仕方がない。</p>
          <p>将来的にはプロダクトを作りたいと考えている。</p>
        </div>
      </div>
      <Headings en="OTHER LINKS" ja="その他の関連リンク" size="S" />
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
