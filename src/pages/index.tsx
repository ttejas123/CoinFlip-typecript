import { useEffect } from "react";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Layout from "../components/UIcomponent/Layout";
import RecentTxns from "../components/UIcomponent/RecentTxns";
import Smallmodal from "../components/UIcomponent/BaseComponents/Smallmodal";



const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  // useEffect(() => {
  //   const body = document.body;
  //   // const themeValue = localStorage.getItem("datatheme");
  //   body.setAttribute("data-theme", "lightBuild");
  // }, []);

  return (
    <div className="overflow-x-hidden">
      <Smallmodal />
      <Layout>
        <div className="container bg-white flex flex-row items-center justify-center gap-12 p-14 ">
          <div className="w-2/3 ">
            <RecentTxns />
          </div>
          <div className="w-1/3">
            <h1>test</h1>
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
