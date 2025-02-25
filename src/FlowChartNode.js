import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const FlowChartNode = ({ node, onSelect, onBack, prevNode }) => (
    <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        {/* Go Back Button */}
        {prevNode && (
            <button
                onClick={onBack}
                className="top-4 left-4 px-4 py-1 mb-2 bg-gray-400 text-white font-semibold rounded hover:bg-gray-500"
            >
              <ArrowBackIcon></ArrowBackIcon>
            </button>
        )}
        
        {/* Main Content */}
        {node.children.length > 1 ? (
            <div>
                <p className="text-2xl font-semibold mb-4">{node.question}</p>
                <div className="flex flex-col gap-4">
                    {node.children.map((child) => (
                        <button
                            key={child.id}
                            onClick={() => onSelect(child)}
                            className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg"
                        >
                            {child.label}
                        </button>
                    ))}
                </div>
            </div>
        ) : (
            <div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 shadow-md rounded-lg whitespace-pre-line">
                <p className="text-lg font-semibold formatted-label">
                    {node.children[0].label}
                </p>
                <button
                    onClick={() => { window.location.reload(); }}
                    className="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600"
                >
                    Finish
                </button>
            </div>
        )}
    </div>
);

export default FlowChartNode;
