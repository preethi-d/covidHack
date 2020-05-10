import React from 'react'
import {fabric} from 'fabric'

class Flow extends React.Component {
  constructor({title, nodes, width, height}) {
    super();
    this.title = title;
    this.nodes = nodes;
    this.width = width || 600;
    this.height = height || 800;
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
    console.log(this.width, this.height);
    canvas.setDimensions({width: this.width, height: this.height});
    // canvas.selection = false;

    canvas.on('mouse:over', ({e, target}) => {
      if (target && target.tooltip) {
        target.tooltip.set('visible', true);
        canvas.bringToFront(target.tooltip);
        canvas.renderAll();
      }
    });

    canvas.on('mouse:out', ({e, target}) => {
      if (target && target.tooltip && this.activeTooltip !== target) {
        target.tooltip.set('visible', false);
        canvas.renderAll();
      }

    });

    canvas.on('mouse:down', ({e, target}) => {
      if (target && target.tooltip) {
        console.log(target);
        if (target._objects.length > 2) {
          target._objects[2].set('visible', !target._objects[2].visible);
          canvas.renderAll();
        }
      }
      // if (this.activeTooltip) {
      //   this.activeTooltip.tooltip.set('visible', false);
      // }
      // if (target && target.tooltip) {
      //   this.activeTooltip = target;
      //   target.tooltip.set('visible', true);
      // }
      // canvas.renderAll();

    });

    const tooltips = [];
    const circlePropsArray = [];

    this.nodes.forEach(node => {
      const radius = node.size || 40;

      const circleProps = {
        top: node.position.y - radius,
        left: node.position.x - radius,
        scale: 2 * radius/200,
        radius,
        // width: radius,
        // height: radius,
        selectable: false,
        fill: 'white',
        name: node.name,
        node: node,
        star: node.type === 'goal',
      };

      const tooltipHeight = 200;
      const tooltipWidth = 200;
      const tooltipPadding = 10;
      const titleFontSize = 24;
      const descFontSize = 18;

      const tooltipTitle = new fabric.Textbox(node.title, {
        left: tooltipPadding,
        top: 5,
        width: tooltipWidth - 2 * tooltipPadding,
        height: tooltipHeight - tooltipPadding,
        selectable: false,
        fontSize: titleFontSize,
      });
      const tooltipDesc = new fabric.Textbox(node.desc, {
        left: 10,
        top: 34,
        width: tooltipWidth - 2 * tooltipPadding,
        height: tooltipHeight - titleFontSize - tooltipPadding,
        selectable: false,
        fontSize: descFontSize,
      });
      const tooltipRect = new fabric.Rect({
        width: tooltipWidth,
        height: tooltipHeight,
        stroke: 'black',
        fill: 'rgba(255, 255, 255, 0.9)',
        selectable: false,
      });

      const tooltip = new fabric.Group([tooltipRect, tooltipTitle, tooltipDesc], {
        top: node.position.y - radius,
        left: node.position.x + radius,
        visible: false,
        selectable: false,
      });

      circleProps.tooltip = tooltip;
      node.tooltip = tooltip;
      // canvas.add(circle);
      circlePropsArray.push(circleProps);
      // tooltips.push(tooltipRect);
      // tooltips.push(tooltipText);
      tooltips.push(tooltip);
      // canvas.add(tooltip);
    });

    this.edges.forEach(points => {
      const line = new fabric.Line(points, {
        stroke: 'rgba(0, 0, 0, 0.6)',
        strokeWidth: 2,
        selectable: false,
      });
      canvas.add(line);
    });

    circlePropsArray.forEach(props => {
      fabric.Image.fromURL('circle.png', circleImg => {
        fabric.Image.fromURL('tick.png', tickImg => {
          const bgCircle = new fabric.Circle(props);
          circleImg.scale(props.scale);
          circleImg.set(props);
          tickImg.scale(props.scale);
          tickImg.set(props);
          tickImg.set('visible', false);
          const nodeGroup = new fabric.Group([bgCircle, circleImg, tickImg], props);
          canvas.add(nodeGroup);
        });

      })
    });

    tooltips.forEach(tooltip => canvas.add(tooltip));
  }

  render() {
    return (
      <div className="flow" style={{minWidth: this.width}}>
        <h2 className="title">{this.title}</h2>
        <div className="flow-box">
          <canvas id={"flow-canvas"} width={this.width} height={this.height}/>
        </div>
      </div>
    )
  }
}

export default Flow
