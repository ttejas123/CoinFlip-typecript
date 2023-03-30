import { useContext, useEffect } from "react";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Layout from "../components/UIcomponent/Layout";
import RecentTxns from "../components/LandingPage/RecentTxns";
import SelectFlipToken from "../components/LandingPage/SelectFlipToken";
import { ThemeContext } from "../context/ThemeContext";
import FAQ from "../components/UIcomponent/Models/FAQ";
import SuccessFullShotModel from "../components/UIcomponent/Models/SuccessFullShotModel";
import AgeVerificationModel from "../components/UIcomponent/Models/AgeVerificationModel";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const theame = useContext(ThemeContext);
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theame.theme);
  }, [theame.theme]);

  return (
    <div className="overflow-x-hidden">
      <AgeVerificationModel />
      <FAQ />
      <SuccessFullShotModel />
      <Layout>
        <div className="container rounded-2xl md:flex flex-row items-start justify-center gap-12 md:p-14 ">
          <div className="w-full md:w-2/3 ">
            <RecentTxns />
          </div>
          <div className="w-full md:w-1/3">
            <SelectFlipToken />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-2xl text-center text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
