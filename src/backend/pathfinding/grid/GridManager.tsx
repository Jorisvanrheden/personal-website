import GridModel from "./GridModel";
import {
	PathfindingStrategy,
	PathfindingResult,
} from "../pathfinding/Pathfinder";
import { AStar } from "../pathfinding/Astar";
import { BFS } from "../pathfinding/BFS";

import { IAction, DefaultAction } from "../actions/Action";
import { Animator, InstantAnimator } from "../animation/Animator";
import { Coordinate } from "../pathfinding/Coordinate";
import { WalkableAction } from "../actions/WalkAction";
import { StartAction } from "../actions/StartAction";
import { TargetAction } from "../actions/TargetAction";
import { PathAnimator } from "../animation/PathAnimator";

export class GridManager {
	grid: GridModel = new GridModel(30,30);

	pathTypes: PathfindingStrategy[] = [new BFS(), new AStar()];
	activePathIndex: number = 0;

	activeAction: IAction = new DefaultAction();
	activeAnimation: Animator = new InstantAnimator();

	start: Coordinate = new Coordinate(-1, -1);
	target: Coordinate = new Coordinate(-1, -1);

	path: Coordinate[] = [];
	visitedNodes: Coordinate[] = [];

	observers: any[] = [];

	calculateOnChange: boolean = true;

	constructor() {}

	setPathfindingIndex(index: number) {
		if (index < 0 || index >= this.pathTypes.length) return;

		this.activePathIndex = index;

		this.processChange();
	}

	setActionIndex(index: number) {
		switch (index) {
			case 0:
				this.activeAction = new WalkableAction(this, true);
				break;
			case 1:
				this.activeAction = new WalkableAction(this, false);
				break;
			case 2:
				this.activeAction = new StartAction(this);
				break;
			case 3:
				this.activeAction = new TargetAction(this);
				break;
			default:
				break;
		}
	}

	setEnableAnimation(enableAnimation: boolean) {
		this.activeAnimation.stop();

		if (enableAnimation) {
			this.activeAnimation = new PathAnimator();
		} else {
			this.activeAnimation = new InstantAnimator();
		}

		this.processChange();
	}

	processAction(x: number, y: number) {
		this.activeAction.process(x, y);
	}

	setAction(action: IAction) {
		this.activeAction = action;
	}

	clearGrid() {
		//clear the grid
		this.grid.clear();

		//clear start and end positions
		this.start = new Coordinate(-1, -1);
		this.target = new Coordinate(-1, -1);

		//clear paths
		this.path = [];
		this.visitedNodes = [];

		this.processChange();
	}

	randomizeGrid() {
		let exceptions: Coordinate[] = [];
		exceptions.push(new Coordinate(this.start.x, this.start.y));
		exceptions.push(new Coordinate(this.target.x, this.target.y));

		this.grid.randomize(exceptions);

		this.processChange();
	}

	calculatePath() {
		if (!this.grid.isValidTileCoordinate(this.start.x, this.start.y)) return;
		if (!this.grid.isValidTileCoordinate(this.target.x, this.target.y)) return;

		let start = this.grid.getTile(this.start.x, this.start.y);
		let target = this.grid.getTile(this.target.x, this.target.y);

		let data: PathfindingResult = this.pathTypes[
			this.activePathIndex
		].calculatePath(this.grid, start, target);

		//Cancel the previous animation if one was being executed
		this.activeAnimation.stop();

		//Trigger the new animation
		this.activeAnimation.animate(data.path, data.visitedNodes, this);
	}

	displayPath(path: any[], visitedNodes: any[]) {
		this.path = path;
		this.visitedNodes = visitedNodes;

		this.notifyObservers();
	}

	toggleWalkable(x: number, y: number) {
		this.grid.toggleWalkable(x, y);

		this.processChange();
	}

	setWalkable(x: number, y: number, walkable: boolean) {
		this.grid.setWalkable(x, y, walkable);

		this.processChange();
	}

	setStart(x: number, y: number) {
		if (!this.grid.isValidAndWalkable(x, y)) return;

		this.start = new Coordinate(x, y);

		this.processChange();
	}

	setTarget(x: number, y: number) {
		if (!this.grid.isValidAndWalkable(x, y)) return;

		this.target = new Coordinate(x, y);

		this.processChange();
	}

	processChange() {
		//Only recalculate the path if the setting explicity mentions it
		if (this.calculateOnChange) {
			this.calculatePath();
		} else {
			//clean the path + visitedNodes
			this.path = [];
			this.visitedNodes = [];

			this.activeAnimation.stop();
		}

		this.notifyObservers();
	}

	attachObserver(observer: any) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
		}
	}

	notifyObservers() {
		let tiles = this.grid.getTiles();

		this.observers.forEach((callback) => {
			callback(tiles);
		});
	}
}
export { Coordinate };
