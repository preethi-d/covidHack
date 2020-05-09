import React from 'react'
import {fabric} from 'fabric'

class Flow extends React.Component {
  constructor({title, nodes}) {
    super();
    this.title = title;
    this.nodes = nodes;
    this.nodesMap = {};
    this.edges = [];
    this.nodes.forEach(node => {
      this.nodesMap[node.name] = node;
      this.edges = this.edges.concat((node.links || []).map(dest => [node.name, dest]));
    });

    this.edges = this.edges.map(([srcName, destName]) => {
      const srcNode = this.nodesMap[srcName];
      const destNode = this.nodesMap[destName];
      return [srcNode.position.x, srcNode.position.y, destNode.position.x, destNode.position.y];
    });

    this.activeTooltip = undefined;
  }

  componentDidMount() {
    const canvas = new fabric.Canvas('flow-canvas');
    canvas.hoverCursor = 'pointer';
    // canvas.selection = false;

    canvas.on('mouse:over', ({e, target}) => {
      if (target && target.tooltip) {
        console.log('over', target);
        // target.tooltip.visible = true;
        target.tooltip.set('visible', true);
        // target.tooltip.set('dirty', true);
        // target.set('fill', 'red');
        canvas.renderAll();
        // target.tooltip.render();
      }
    });

    canvas.on('mouse:out', ({e, target}) => {
      if (target && target.tooltip) {
        console.log('out');
        // target.tooltip.visible = false;
        target.tooltip.set('visible', false);
        // target.tooltip.set('dirty', true);
        canvas.renderAll();
        // target.tooltip.render();
      }

    });

    canvas.on('mouse:down', ({e, target}) => {
      console.log(target);
      if (target && target.tooltip) {
        console.log('down');
        // target.tooltip.set('visible', true);
        // target.tooltip.set('dirty', true);
        // target.tooltip.visible = true;
      }

    });
    //
    // canvas.on('mouse:move', ({e, target}) => {
    //
    // });

    const tooltips = [];
    const circles = [];

    this.nodes.forEach(node => {
      const radius = node.size || 25;

      const circle = new fabric.Circle({
        top: node.position.y - radius,
        left: node.position.x - radius,
        radius,
        selectable: false,
        fill: 'dodgerblue',
        name: node.name,
        node: node,
      });

      const tooltipTitle = new fabric.Textbox(node.title, {
        width: 200,
        height: 100,
        selectable: false,
        fontSize: 24,
      });
      const tooltipDesc = new fabric.Textbox(node.desc, {
        top: 24,
        width: 200,
        height: 76,
        selectable: false,
        fontSize: 18,
      });
      const tooltipRect = new fabric.Rect({
        width: 200,
        height: 100,
        stroke: 'black',
        fill: 'rgba(30, 30, 30, 0.7)',
        selectable: false,
      });

      const tooltip = new fabric.Group([tooltipRect, tooltipTitle, tooltipDesc], {
        top: node.position.y - radius,
        left: node.position.x + radius,
        visible: false,
      });

      circle.tooltip = tooltip;
      node.tooltip = tooltip;
      // canvas.add(circle);
      circles.push(circle);
      // tooltips.push(tooltipRect);
      // tooltips.push(tooltipText);
      tooltips.push(tooltip);
      // canvas.add(tooltip);
    });

    this.edges.forEach(points => {
      const line = new fabric.Line(points, {
        stroke: 'dodgerblue',
        strokeWidth: 2,
        selectable: false,
      });
      canvas.add(line);
    });
    tooltips.forEach(tooltip => canvas.add(tooltip));
    circles.forEach(circle => canvas.add(circle));

  }

  render() {
    return (
      <div className="flow">
        <div className="title">{this.title}</div>
        <div className="flow-box">
          <canvas id={"flow-canvas"} width={window.innerWidth} height={window.innerHeight}/>
        </div>
      </div>
    )
  }
}

export default Flow
