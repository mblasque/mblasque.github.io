import { FC } from "react";
import styled, { css, keyframes } from "styled-components";

import "./ProgressBar.scss";

type ProgressBarProps = {
  value: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ value }) => {
  var load = keyframes`
    0% { width: 0%; }
    100% { width: ${value}%; }
    `;

  const animation = css`
    ${load} 4s;
  `;

  const Bar = styled.div`
    width: ${value}%;
    height: 8px;
    background-color: blue;
    border-radius: 10px;
    animation: ${animation};
  `;

  return (
    <div className="bar">
      <Bar />
    </div>
  );
};

export default ProgressBar;
