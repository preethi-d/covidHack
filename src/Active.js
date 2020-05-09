import React from 'react';
import Flow from "./Flow";

const nodes = [
    {
        title: "Root 1",
        desc: "Root node",
        name: "root1",
        type: "root",
        position: {
            x: 200,
            y: 50
        },
        links: []
    },
    {
        title: "Root 2",
        desc: "Root node",
        name: "root2",
        type: "root",
        position: {
            x: 300,
            y: 50
        },
        links: []
    },
    {
        title: "Int 1",
        desc: "Intermediate",
        name: "int1",
        type: "node",
        position: {
            x: 200,
            y: 150
        },
        links: ["root1"]
    }
];

export const Active = (props) => (
    <>
    <Flow nodes={nodes} />
    </>
)
