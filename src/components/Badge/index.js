import React from "react";
import Badge from "@material-ui/core/Badge";

export default ({ value }) => (
  <div
    style={{
      position: "relative"
    }}
  >
    <Badge
      badgeContent={value}
      color="error"
      style={{
        position: "absolute",
        right: 0
      }}
    ></Badge>
  </div>
);
