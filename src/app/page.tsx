import { Suspense } from "react";
import { TopArticles } from "./_shared/template/top-articles";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export const revalidate = 60;

export default async function Home() {
  return (
    <main className="relative h-screen-without-header">
      <Suspense fallback={<>Loading...</>}>
        {/* @ts-expect-error Server Component */}
        <TopArticles></TopArticles>
      </Suspense>
    </main>
  );
}
