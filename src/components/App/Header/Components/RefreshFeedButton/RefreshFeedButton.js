import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";
import SyncIcon from "@material-ui/icons/Sync";
import { StyledIconButton } from "../../HeaderStyle";

export default function RefreshFeedButton() {
  const [enabled, setEnabled] = useState(false);
  const onClick = () => {
    if (enabled === true) return;
    setEnabled(true);

    //   Api.forceRefresh().then((result) => {
    //     console.log(result);
    //   });
    //   Api.getHeadlines(date, month, year).then((result) => {
    //     if (result.data) {
    //       if (result.data.headline.length === 0) setHeadlines(false);
    //       else setHeadlines(result.data.headline);
    //     }
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);

    setTimeout(() => {
      setEnabled(false);
    }, 750);
  };
  return (
    <Tooltip title="Refresh feeds">
      <StyledIconButton enabled={enabled ? 1 : 0} onClick={onClick}>
        <SyncIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
