import React, { useState } from 'react';
import Tracking from './Tracking';
import FlowChartNode from './FlowChartNode'; // Ensure you import this correctly

const FlowChart = ({ root }) => {
    const [prevNode, setPrevNode] = useState(null);
    const [currentNode, setCurrentNode] = useState(root);
    const [tracking, setTracking] = useState([]);
    const [nodes, setNodes] = useState([]);
    
    const handleSelect = (node) => {
        setTracking(prevTracking => [
            ...prevTracking,
            {
                id: currentNode.id,
                question: currentNode.question,
                answer: node.label
            }
        ]);
        setPrevNode(currentNode);
        setNodes(prevNodes => [...prevNodes, currentNode]);
        setCurrentNode(node);
       
    };

    const goToNode = (id) => {
        for(let i = nodes.length; i > 0; i--) {
            if(nodes[i-1].id === id) {
                setCurrentNode(nodes[i-1]);
                setPrevNode(nodes[i-2] ? nodes[i-2] : null)
                setNodes(prevNodes => prevNodes.slice(0, i-1));
                setTracking(prevTracking => prevTracking.slice(0, i-1));
                break;
            }
        }
    }

    const handleBack = () => {
        setCurrentNode(nodes[nodes.length-1]);
        setPrevNode(nodes[nodes.length - 2] ? nodes[nodes.length - 2] : null)
        setNodes(prevNodes => prevNodes.slice(0, -1));
        setTracking(prevTracking => prevTracking.slice(0, -1));        
    };

    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <Tracking tracking={tracking} handleClick={goToNode} />
            <div className="flex h-full w-full justify-center items-center p-6">
                <FlowChartNode node={currentNode} onSelect={handleSelect} onBack={handleBack} prevNode={prevNode} />
            </div>
        </div>
    );
};

export default FlowChart;
