import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>This page cannot be found.</h2>
      <p>
        Go Back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
