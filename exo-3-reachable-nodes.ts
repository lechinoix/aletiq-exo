export const reachableNodes = (
    edges: number[][],
    maxMoves: number,
    n: number
): number => {
    const graph = new Graph(edges);
};

type Edge = { distance: number; destination: GraphNode };

class GraphNode {
	isReached = false;
	siblings: GraphNode[];
	constructor(siblings: GraphNode[]) {
		this.siblings = siblings;
	}

	reach() {
		this.isReached = true;
}


}

class MainNode extends GraphNode {
    edges: Edge[];

    constructor(edges: Edge[]) {
        
    }
}

class Graph {
    nodes = new Map();

    constructor(edges: number[][]) {
        this.buildNode(0, edges);
    }

    private buildNode = (key: number, edges: number[][]): GraphNode => {
        const connectedEdges = (
            edges.filter((edge) => (edge[0] || edge[1]) === key) ?? []
        ).map((edge) => {
            const destinationKey = edge[0] === key ? edge[1] : edge[0];
            let destination = this.nodes.get(destinationKey);

            if (!destination) {
                const newNode = this.buildNode(destinationKey, edges);
                destination = newNode;
            }

            return {
                distance: edge[2],
                destination,
            };
        });

        const node = new MainNode(connectedEdges);

				this.nodes.set(key, node);

				return node;
    };
}
