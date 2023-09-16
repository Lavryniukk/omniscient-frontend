import { useState, useRef } from "react";
import { treenode } from "@/app/shared/types/node";
import { Tree, TreeNode } from "react-organizational-chart";

type Props = {
  setShowSideBar: (e: boolean) => void;
  tree: Array<treenode>;
  setSelectedNode: (node: treenode) => void;
};

const GraphComponent = ({ setShowSideBar, setSelectedNode, tree }: Props) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const initialMousePos = useRef({ x: 0, y: 0 });
  const mainDivRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let target = event.target as HTMLElement;
    if (!target.closest(".node-circle")) {
      setIsDragging(!isDragging);
      initialMousePos.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isDragging) {
      const deltaX = event.clientX - initialMousePos.current.x;
      const deltaY = event.clientY - initialMousePos.current.y;
      setCoordinates((prevCoordinates) => ({
        x: prevCoordinates.x + deltaX,
        y: prevCoordinates.y + deltaY,
      }));
      initialMousePos.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const minZoom = 50; // Minimum zoom level
    const maxZoom = 150; // Maximum zoom level
    const delta = e.deltaY;
    const zoomFactor = delta > 0 ? -10 : 10; // Adjust the zoom factor based on scroll direction

    if (
      zoomLevel + zoomFactor >= minZoom &&
      zoomLevel + zoomFactor <= maxZoom
    ) {
      setZoomLevel((prevZoom) => prevZoom + zoomFactor);
    }
  };

  // Function to generate a tree branch with the current zoom level applied
  const generateTreeBranch = (treeBranch: treenode) => {
    const { id, name, displayChildren, children } = treeBranch;

    const result = (
      <TreeNode
        className="w-fit mx-auto text-center"
        key={id}
        label={
          <div className="flex flex-col rotate-180 w-24 p-1 h-24 mx-auto text-center justify-between">
            <div
              className="node-circle"
              onClick={() => {
                setShowSideBar(true);
                setSelectedNode(treeBranch);
              }}
            />
            <div className="node">{name}</div>
          </div>
        }
      >
        {children &&
          displayChildren &&
          children.map((child: treenode) => (
            <TreeNode key={child.id} label="">
              {generateTreeBranch(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );

    return result;
  };
  const treeStyle = {
    transform: `scale(${zoomLevel / 100})`,
    top: `${coordinates.y}px`,
    left: `${coordinates.x}px`,
  };
  // Function to generate the whole tree with the current zoom level
  const generateTree = () => {
    return tree.map((nodeTreeBranch) => generateTreeBranch(nodeTreeBranch));
  };
  return (
    <div
      style={treeStyle}
      onMouseMove={(e) => handleMouseMove(e)}
      className={`w-full h-screen  flex items-center absolute`}
      ref={mainDivRef}
    >
      <div
        onClick={(e) => handleClick(e)}
        className={`rotate-180 w-fit mx-auto block`}
        onWheel={(e) => {
          handleScroll(e);
        }} // Listen for wheel events on the container for scroll-based zoom
      >
        <Tree
          lineWidth={"1.5px"}
          lineColor={"gray"}
          lineHeight={"20px"}
          nodePadding="5px"
          lineStyle="solid"
          lineBorderRadius={"10px"}
          label={"Become investor"}
        >
          {generateTree()} {/* Render the generated tree structure */}
        </Tree>
        {/* <div className="w-full bg-background absolute bottom-full translate-y-4 z-10 h-4" /> */}
      </div>
    </div>
  );
};

export default GraphComponent;
