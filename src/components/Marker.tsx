import React, { useEffect, useState } from "react";

export const Marker: React.FC<any> = ({ text }: any) => {
  return (
    <div
      style={{
        color: "white",
        background: "rgb(44, 89, 235)",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );
};
