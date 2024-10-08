import { Coordinate } from "../pathfinding/Coordinate";

export default class GridModel {
	private xSize: number = 0;
	private ySize: number = 0;

	private tiles: any = [];

	constructor(xSize: number, ySize: number) {
		this.xSize = xSize;
		this.ySize = ySize;

		this.tiles = this.initializeTiles();
	}

	initializeTiles() {
		const tiles: any = [];

		for (let i = 0; i < this.xSize; i++) {
			const row: any = [];
			for (let j = 0; j < this.ySize; j++) {
				const gridNode: any = { x: i, y: j, walkable: true };
				row.push(gridNode);
			}

			tiles.push(row);
		}

		return tiles;
	}

	clear() {
		this.tiles = this.initializeTiles();
	}

	toggleWalkable(x: number, y: number) {
		this.tiles[x][y].walkable = !this.tiles[x][y].walkable;
	}

	setWalkable(x: number, y: number, walkable: boolean) {
		this.tiles[x][y].walkable = walkable;
	}

	randomize(exceptionCoordinates: Coordinate[]) {
		for (let i = 0; i < this.xSize; i++) {
			for (let j = 0; j < this.ySize; j++) {
				let walkable: boolean = true;

				//only process the tile if it's not in the list of exceptions
				if (!this.containsCoordinate(exceptionCoordinates, i, j)) {
					this.tiles[i][j].walkable = Math.random() > 0.3;
				}
			}
		}
	}

	getNeighboringTiles(coordinate: any) {
		let neighbors: any = [];

		//horizontal + vertical
		if (this.isValidAndWalkable(coordinate.x - 1, coordinate.y))
			neighbors.push({ x: coordinate.x - 1, y: coordinate.y });
		if (this.isValidAndWalkable(coordinate.x, coordinate.y - 1))
			neighbors.push({ x: coordinate.x, y: coordinate.y - 1 });
		if (this.isValidAndWalkable(coordinate.x + 1, coordinate.y))
			neighbors.push({ x: coordinate.x + 1, y: coordinate.y });
		if (this.isValidAndWalkable(coordinate.x, coordinate.y + 1))
			neighbors.push({ x: coordinate.x, y: coordinate.y + 1 });

		//diagonals
		// if(this.isValidAndWalkable(coordinate.x-1, coordinate.y-1)) neighbors.push({x: coordinate.x-1, y:coordinate.y-1});
		// if(this.isValidAndWalkable(coordinate.x-1, coordinate.y+1)) neighbors.push({x: coordinate.x-1, y:coordinate.y+1});
		// if(this.isValidAndWalkable(coordinate.x+1, coordinate.y-1)) neighbors.push({x: coordinate.x+1, y:coordinate.y-1});
		// if(this.isValidAndWalkable(coordinate.x+1, coordinate.y+1)) neighbors.push({x:coordinate. x+1, y:coordinate.y+1});

		return neighbors;
	}

	getTiles() {
		return this.tiles.slice();
	}

	getTile(x: number, y: number) {
		return this.tiles[x][y];
	}

	containsCoordinate(coordinates: Coordinate[], x: number, y: number) {
		for (let i = 0; i < coordinates.length; i++) {
			if (coordinates[i].x === x && coordinates[i].y === y) return true;
		}

		return false;
	}

	isValidTileCoordinate(x: number, y: number) {
		if (x < 0 || x >= this.tiles.length) return false;
		if (y < 0 || y >= this.tiles[0].length) return false;

		return true;
	}

	isValidAndWalkable(x: number, y: number) {
		if (!this.isValidTileCoordinate(x, y)) return false;

		return this.tiles[x][y].walkable;
	}
}
