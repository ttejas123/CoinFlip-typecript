import Image from "next/image";
import React from "react";
import coinFlipLogo from "../assets/img/coinflip-logo.png";
import coinAnim from "../assets/img/coin-anim.gif";

type Props = {};

export default function RecentTxns({}: Props) {
  const item = () => (
    <div className="mb-2 flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
      <div className="w-2/6">
        <img
          src="/images/person/2.jpeg"
          alt="person"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="w-3/6">
        <p className="text-sm text-gray-500">
          You have
          <span className="font-bold text-indigo-500">2</span>
          new messages
        </p>
      </div>
      <div className="w-1/6 text-right">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 1792 1792"
          className="h-6 w-6 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="border-default flex items-center justify-between rounded-2xl border py-5 px-6">
        <Image src={coinFlipLogo} alt="coinflip" />
        <Image src={coinAnim} alt="coin" className="w-20" />
      </div>
      <div className="border-default max-h-96 overflow-x-scroll rounded-2xl border p-4">
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
        {item()}
      </div>
    </div>
  );
}
