"use client";

// import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { toast, ToastContainer } from "react-toastify";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";

export function SignupComponent() {
  // const router = useRouter();
  const { signUp } = useSignUp();
  const notify = () => toast("新規登録に失敗しました。");

  const handleSignup = async (strategy: OAuthStrategy) => {
    try {
      if (signUp) {
        await signUp.authenticateWithRedirect({
          strategy: strategy,
          redirectUrl: "/sso-callback",
          redirectUrlComplete: "/",
        });
      }
    } catch (error) {
      console.error(error);
      notify();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <ToastContainer></ToastContainer>
      <div className="w-full flex justify-center gap-4">
        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup("oauth_google")}
        >
          Googleアカウントで新規登録
        </button>

        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup("oauth_github")}
        >
          GitHubアカウントで新規登録
        </button>
      </div>

      <div className="text-xs w-full text-center">
        新規登録できない場合は、すでにアカウントが存在している可能性があります。
        <div>
          その場合は、
          <Link
            href="/auth/login"
            className="cursor-pointer text-sky-800 font-bold font-sans"
          >
            こちらからログイン
          </Link>
          してください
        </div>
      </div>
    </div>
  );
}
