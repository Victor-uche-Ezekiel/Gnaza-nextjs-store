"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        {children}
      </SkeletonTheme>
    </Provider>
  );
}
