import {
  ClockIcon,
  PencilIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import type { NextPage } from "next";
import Head from "next/head";
import { Events } from "../components/Events/Events";
import { Logo } from "../components/Logo";
import githubSvg from "../public/images/github.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Toyama.rb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4">
        <section>
          <div className="w-full py-4">
            <Logo />
          </div>
          <div className="flex items-end text-[16px]">
            <h2 className="text-gray-500">
              <div>Regional Ruby Community in Toyama</div>
              <div className="text-[16px]">
                <span>Organizer</span>
                <span className="mx-1">:</span>
                <a
                  href="https://twitter.com/mugi_uno"
                  target="_blank"
                  rel="noreferrer"
                >
                  @mugi_uno
                </a>
              </div>
            </h2>
          </div>
        </section>

        <Events />

        <hr className="mt-8" />

        <section className="mt-8">
          <h2 className="text-[20px] font-bold flex items-center mb-2">
            <PencilIcon className="h-5 w-5 mr-1" />
            なにをするコミュニティ？
          </h2>
          <p>
            <a href="http://d.hatena.ne.jp/keyword/%A4%E2%A4%AF%A4%E2%A4%AF%B2%F1">
              もくもく会
            </a>
            をメインに活動しています。
          </p>
          <p>
            もくもくと好きな作業をしつつ、参加者同士での交流を深めましょう！というのが目的です。
          </p>
          <p>不定期にLT大会などのイベントも開催しています。</p>
          <p>任意参加での懇親会もやっています。</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[20px] font-bold flex items-center mb-2">
            <ClockIcon className="h-5 w-5 mr-1" />
            いつやってるの？
          </h2>
          <p>毎月第２土曜日の日中に開催しています。</p>
          <p>
            ２〜３週間前に <a href="https://toyamarb.connpass.com/">connpass</a>{" "}
            にイベントページが作成されます。
          </p>
        </section>

        <hr className="mt-8" />

        <section className="mt-8">
          <h2 className="text-[20px] font-bold flex items-center mb-2">
            <SpeakerphoneIcon className="h-5 w-5 mr-1" />
            Code of Conduct / 行動規範
          </h2>
          <div className="text-[12px]">
            <p>
              Toyama.rbが参加者にとって有益であり、身体的・心理的に安全である環境を保つため、幾つかのルールを設けています。
            </p>
            <ul className="pl-2 my-2">
              <li>
                ・ 自身と異なる意見に対しても、尊敬と尊重を持って接しましょう。
              </li>
              <li>
                ・ 個人に対する煽り・攻撃・挑発的な行動・言動は慎みましょう。
              </li>
              <li>
                ・
                性別、年齢、人種、障碍の有無、出身国、外見、宗教、などに対するハランスメント行為は許容しません。
              </li>
            </ul>

            <p>
              これらに反する行為が見られた場合、イベントからの退場および、今後のイベントへの参加を禁止することがあります。また、これらの適用範囲はイベント中の行動・言動だけではなく、
              Toyama.rbが関連する全ての場（発表資料・チャット・SNSでの発言など）に及びます。
            </p>
            <p>
              違反行為を受けた場合、もしくは見つけた場合には
              <a href="https://twitter.com/mugi_uno">主催者</a>
              までお声がけください。
            </p>
          </div>

          <div className="mt-4 text-[12px]">
            <p>※この行動規範は以下を参考にしています。</p>
            <p>・https://ja.confcodeofconduct.com/</p>
            <p>
              ・https://github.com/sf-jp-engineers/code-of-conduct/blob/master/code_of_conduct.md
            </p>
            <p>・https://railsgirls.jp/code-of-conduct</p>
          </div>
        </section>
      </main>

      <footer className="mt-16 py-12 flex flex-col items-center justify-center border-t-[1px]">
        <div>@Toyama.rb</div>
        <div className="mt-4">
          <a href="https://github.com/toyamarb">
            <img src="/images/github.svg" alt="github" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
