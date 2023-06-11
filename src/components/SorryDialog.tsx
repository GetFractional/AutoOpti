import React from "react";
import Dialog from "./Dialog";
import { Trans, useTranslation } from "next-i18next";

export interface SorryDialogProps {
  show: boolean;
  close: () => void;
}

export const SorryDialog = ({ show, close }: SorryDialogProps) => {
  const { t } = useTranslation("chat");
  return (
    <Dialog header={`${t("sorry")} 😭`} isShown={show} close={close}>
      <Trans i18nKey="sorry-tips" ns="chat">
        <p>
          Due to costs, we had to momentarily disable web search
          <br />
          <p>But you can still use it on your site.</p>
          <br />
          <a
            className="link"
            href="https://autogpt-next-web.gitbook.io/autogpt-next-web/"
            target="_blank"
            rel="noreferrer"
          >
            More Details
          </a>
        </p>
      </Trans>
    </Dialog>
  );
};
