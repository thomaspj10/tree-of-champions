import React, { useState } from "react";
import styled from "styled-components";
import { pick } from "lodash";
import shallow from "zustand/shallow";

import { formatNumber } from "../shared/utils";
import useStore from "../store";

export function ChampionTree() {
  const champions = useStore(s => pick(s.champions, [
  ]), shallow);

  return <Page>
    <h2>Champion Tree</h2>

  </Page>;
}

const Page = styled.div`
  width: 800px;
`;