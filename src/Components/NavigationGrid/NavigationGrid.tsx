import "../NavigationGrid/NavigationGrid.css";

import { useState } from "react";

//Logic imports
import Grid from "../../Logic/Pathfinding/Grid";
import GridNode from "../GridNode/GridNode";

import {IAction, DefaultAction, ToggleAction, StartAction, TargetAction, CalculateAction} from "../../Logic/Pathfinding/Action";
import { GridModel } from "../../Logic/Pathfinding/GridModel";

interface Props
{
  gridModel:GridModel;

  activeType:number;

  setType:(index:number) => void;
}

let activeAction:IAction = new DefaultAction();


let isMouseDown = false;

document.body.onmousedown = function() { 
  isMouseDown = true;
}
document.body.onmouseup = function() { 
  isMouseDown = false;
}

export default function NavigationGrid(props:Props) {
  const [tiles, setTiles] = useState(props.gridModel.grid.getTiles());
  const [start, setStart] = useState({x: -1, y: -1});
  const [target, setTarget] = useState({x: -1, y: -1});

  props.gridModel.attachObserver(setTiles);

  function drawGrid(grid:any)
  {
    setTiles(grid);
  }

  // function calculate()
  // {
  //   //Clean the animation statuses in the current grid
  //   props.grid.resetStatuses();
  //   setTiles(props.grid.getTiles());                    

  //   //Retrieve new data
  //   const data = props.calculate(props.grid, start, target);

  //   //Draw searched paths
  //   // for(let i=0;i<data.visitedNodes.length;i++)
  //   // {
  //   //   setTimeout(() => {
  //   //     props.grid.setVisited(data.visitedNodes[i].x, data.visitedNodes[i].y);
  //   //     setTiles(props.grid.getTiles());                    
  //   //   }, i*50);
  //   // }

  //   //Draw determined paths
  //   for(let i=0;i<data.path.length;i++)
  //   {
  //     setTimeout(() => {
  //       props.grid.setPath(data.path[i].x, data.path[i].y);
  //       setTiles(props.grid.getTiles());                    
  //     }, i*50);
  //   }
  // }

  function handleMouseDown(x:number, y:number)
  {
    activeAction.process(x, y);
  }

  function handleMouseEnter(x:number, y:number)
  {
    if(!isMouseDown) return;

    activeAction = new ToggleAction(props.gridModel)
    activeAction.process(x, y);
  }

  return (
    <div className="table-container">
        <table className="table">      
          {tiles.map((row: any[], xIndex: number) => (
            <tr>
              {row.map((item: any, yIndex: number) => (
                <td>
                  <GridNode
                      x={xIndex}
                      y={yIndex}

                      walkable={item.walkable}
                      status={item.status}

                      processMouseClick={handleMouseDown}
                      processMouseEnter={handleMouseEnter}
                  ></GridNode>      
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div> 
         
      /* <div>
      
        <button onClick={()=>activeAction = new ToggleAction(props.grid, drawGrid)}>
            Toggle
        </button>

        <button onClick={()=>activeAction = new StartAction(props.grid, drawGrid, setStart)}>
            Set Start
        </button>

        <button onClick={()=>activeAction = new TargetAction(props.grid, drawGrid, setTarget)}>
            Set Target
        </button>
      </div> */
  );
}