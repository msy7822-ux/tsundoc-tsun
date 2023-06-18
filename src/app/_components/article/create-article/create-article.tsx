"use client";

import { User } from "@clerk/nextjs/dist/types/server";
import { useState } from "react";
import { ErrorBlock } from "../../common/error-block";
import { OpenCreateArticleButton } from "./buttons/open-create-article-button";
import { CreateArticleModal } from "./create-article-modal";

type Props = {
  user: User | null;
  isDisplay: boolean;
};

export function CreateArticle({ isDisplay, user }: Props) {
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);

  if (!isDisplay) return null;

  return (
    <>
      <ErrorBlock
        message={error ?? ""}
        isDisplay={!!error && error !== ""}
        close={() => setError(null)}
      ></ErrorBlock>

      <div className="mx-auto mb-10 w-full max-w-350 sm:max-w-5xl">
        <CreateArticleModal
          user={user}
          siteUrl={siteUrl}
          setSiteUrl={setSiteUrl}
          isDisplay={isDisplayModal}
          setError={setError}
          close={() => setIsDisplayModal(false)}
        ></CreateArticleModal>
      </div>

      <OpenCreateArticleButton
        handleOnClick={() => setIsDisplayModal(true)}
      ></OpenCreateArticleButton>
    </>
  );
}
