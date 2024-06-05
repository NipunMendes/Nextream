import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <h1 className="text-2x1 text-blue-800">NEXTREAM</h1>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  );
}
