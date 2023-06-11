import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "Assemble, configure, and deploy Opti in your browser.";
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>Auto Opti | AI automated complex problem solving and goal achievement</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="Auto Opti | AI automated complex problem solving and goal achievement"
        />
        <meta
          property="og:description"
          content="Auto Opti | AI automated complex problem solving and goal achievement"
        />
        <meta property="og:url" content="https://autoopti.getfractional.co/" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DottedGridBackground
        className={clsx("min-w-screen min-h-screen", props.className)}
      >
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
