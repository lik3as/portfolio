import { Stage } from "react-konva";
import styled from "styled-components";

export default styled(Stage)`
  position: absolute;
  left: 0;
  top: 62px;
  width: 100vw;
  height: calc(100vh - var(--header-height))
  z-index: 1;
`;
