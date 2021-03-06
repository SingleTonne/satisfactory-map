import styled, { css } from "../../themes/styled";
import { readableColor } from "polished";
import { Paragraph } from "../T/T.style";

export const Root = styled.div`
  & .leaflet-container {
    width: 100%;
    height: 100%;
    transform: translate(0);
    background-color: #474747;

    & .leaflet-popup-content p {
      margin: 0;
    }

    & .leaflet-marker-icon {
      ${Paragraph};
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid #fff; */
      /* position: relative; */

      filter: drop-shadow(white 0px 2px 0px) drop-shadow(white 0px -2px 0px)
        drop-shadow(white 2px 0px 0px) drop-shadow(white -2px 0px 0px);

      &.iron {
        ${generateIcon("#959aa8")}
      }
      &.copper {
        ${generateIcon("#ad2d1f")}
      }
      &.limestone {
        ${generateIcon("#b2ad9e")}
      }
      &.coal {
        ${generateIcon("#4d4a43")}
      }
      &.oil {
        ${generateIcon("#711f13")}
      }
      &.sulphur {
        ${generateIcon("#c3b43b")}
      }
      &.caterium {
        ${generateIcon("#7b550a")}
      }
      &.sam {
        ${generateIcon("#150320")}
      }
      &.quartz {
        ${generateIcon("#922a52")}
      }
      &.beauxite {
        ${generateIcon("#be9880")}
      }
      &.uranium {
        ${generateIcon("#679219")}
      }
    }
  }

  width: 100%;
  height: 100%;
  position: relative;
`;

export const HoverPosWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  background: #f69e28;
`;

function generateIcon(color: string) {
  const ICON_SIZE = 40;

  return css`
    background-color: ${color};
    color: ${readableColor(color)};

    &.pure {
      height: 25px !important;
      margin-top: -14px !important;

      &:before {
        content: "";
        position: absolute;
        top: -${ICON_SIZE / 4}px;
        left: 0;
        width: 0;
        height: 0;
        border-left: ${ICON_SIZE / 2}px solid transparent;
        border-right: ${ICON_SIZE / 2}px solid transparent;
        border-bottom: ${ICON_SIZE / 4}px solid ${color};
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -${ICON_SIZE / 4}px;
        left: 0;
        width: 0;
        height: 0;
        border-left: ${ICON_SIZE / 2}px solid transparent;
        border-right: ${ICON_SIZE / 2}px solid transparent;
        border-top: ${ICON_SIZE / 4}px solid ${color};
      }
    }

    &.normal {
      background: none;

      & > div {
        padding-top: 6px;
      }

      &:before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 20px;
        box-sizing: content-box;
        border-width: 21px 10px 0;
        border-style: solid;
        border-color: ${color} transparent;
        z-index: -1;
      }

      &:after {
        content: "";
        position: absolute;
        height: 0;
        top: 0;
        left: 0;
        border-width: 0 20px 19px;
        border-style: solid;
        border-color: transparent transparent ${color};
        z-index: -1;
      }
    }

    &.impure {
      background: none;

      & > div {
        padding-top: 9px;
      }

      &:before {
        content: "";
        z-index: -1;
        position: absolute;
        width: 0;
        height: 0;
        top: 0px;
        border-left: ${ICON_SIZE / 2}px solid transparent;
        border-right: ${ICON_SIZE / 2}px solid transparent;
        border-bottom: ${ICON_SIZE}px solid ${color};
      }
    }
  `;
}
