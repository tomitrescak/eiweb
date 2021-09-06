import * as React from "react";

import {
  DiagramEngine,
  LinkModel,
  PointModel,
} from "@projectstorm/react-diagrams";

import { CanvasWidget as DiagramWidget } from "@projectstorm/react-canvas-core";

import { Entity } from "../ei/entity_model";
import { EntityDiagramModel } from "./model/entity/entity_diagram_model";
import styled from "@emotion/styled";

interface Props {
  engine: DiagramEngine;
  diagram: EntityDiagramModel;
}

export const Container = styled.div<{ color: string; background: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.background};
  background-size: 50px 50px;
  display: flex;
  > * {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      ${(p) => p.color} 25%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      ${(p) => p.color} 25%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    );
`;

export class DiagramView extends React.Component<Props> {
  static displayName = "DiagramView";

  timeout: any;

  // checkDelete = () => {
  //   // we do nothing if we have just update monaco
  //   if (global._monaco_updated && Date.now() - global._monaco_updated < 500) {
  //     return;
  //   }
  //   let selected = this.props.diagram.getSelectedEntities();
  //   for (let element of selected) {
  //     // only delete items which are not locked
  //     if (!element) {
  //       if (
  //         element instanceof Entity ||
  //         element instanceof LinkModel ||
  //         selected.every((e) => e instanceof PointModel)
  //       ) {
  //         element.remove();
  //       }
  //     }
  //   }
  // };

  // onKeyUp = (event: any) => {
  //   // delete elements but only if we are not deleting stuff in inputs or textboxes
  //   if (
  //     event.target.nodeName.toLowerCase() === "body" &&
  //     (event.keyCode === 8 || event.keyCode === 46)
  //   ) {
  //     if (this.timeout) {
  //       clearTimeout(this.timeout);
  //     }
  //     this.timeout = setTimeout(this.checkDelete, 50);
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("keyup", this.onKeyUp, false);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keyup", this.onKeyUp);
  // }

  render() {
    // this.props.engine.setModel(this.props.diagram);
    return (
      <Container
        background={"rgb(60, 60, 60)"}
        color={"rgba(255,255,255, 0.05)"}
      >
        <DiagramWidget engine={this.props.engine} />
      </Container>
    );
  }
}
