import React from 'react';
import Flow from "./Flow";

const nodes = [
    {
        title: "Hanging",
        desc: "Passive Hangs (15s)\nActive Hangs alternating (10s)",
        name: "hanging",
        type: "root",
        position: {
            x: 400,
            y: 50
        },
        links: ['resistance', 'reverse']
    },
    {
        title: "Resistance",
        desc: "3 sets of 3 aided pull ups",
        name: "resistance",
        type: "node",
        position: {
            x: 300,
            y: 150
        },
        links: ['resistance2']
    },
    {
        title: "Resistance II",
        desc: "5 sets of 3 aided pull ups",
        name: "resistance2",
        type: "node",
        position: {
            x: 300,
            y: 250
        },
        links: ['freepullup']
    },
    {
        title: "Reverse",
        desc: "3 sets of 5 reverse pull ups",
        name: "reverse",
        type: "node",
        position: {
            x: 500,
            y: 150
        },
        links: ['freepullup']
    },
    {
        title: "Free Pull Ups",
        desc: "3 sets of 5 free (unaided) pull ups",
        name: "freepullup",
        type: "goal",
        position: {
            x: 400,
            y: 350
        }
    },
];

export const Active = (props) => (
    <>
    <Flow nodes={nodes} title={"Pull Up"}/>
    <img src={"circle.png"} style={{display: "none"}} id={"circle"}/>
    </>
);
