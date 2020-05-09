import React from 'react'

function Node({position, desc, title, type}) {
  return (
    <>
      <div className="node" style={{left: position.x, top: position.y}}>
        {/*{`${position.x}, ${position.y}`}<br/>*/}
        {/*{desc}<br/>*/}
        {title}<br/>
        {/*{type}<br/>*/}
      </div>
    </>
  )
}

function Flow({title, nodes}) {
  return (
    <div className="flow">
      <div className="title">{title}</div>
      <div className="flow-box">
        {nodes.map(item => (
          <Node {...item} />
        ))}
      </div>
    </div>
  )
}

export default Flow
