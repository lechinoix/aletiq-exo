/**
 Implementation :

	- Creation d'une structure de Graph de la forme :

	Graph {
		nodes: GraphNode[]
	}

	GraphNode {
		key?: number
		isReached: boolean
		siblings: GraphNode[]

		colorAllSiblings(reach: number) {
			this.isReached = true
			if (reach === 0) return
			for (const sibling of this.siblings) {
				sibling.colorAllSiblings(reach - 1)
			}
		}
	}

	export const reachableNodes = (
    edges: number[][],
    maxMoves: number,
    n: number
): number => {
	const graph = new Graph(edges)
	const root = graph.nodes.find(node => node.key === 0)

	root.colorAllSiblings(maxMoves)

	return graph.nodes.filter(node => node.isReached).length
};
 */
export const reachableNodes = (
    edges: number[][],
    maxMoves: number,
    n: number
): number => {
    const graph = new Graph(edges);
    const root = graph.nodes.find((node) => node.key === 0);

    if (!root) return 1;

    root.colorAllSiblings(maxMoves);

    return graph.nodes.filter((node) => node.isReached).length;
};

class GraphNode {
    key?: number;
    isReached = false;
    siblings: GraphNode[] = [];

    constructor(key?: number) {
        this.key = key;
    }

    addSibling(sibling: GraphNode) {
        this.siblings.push(sibling);
    }

    colorAllSiblings(reach: number) {
        this.isReached = true;
        if (reach === 0) return;
        for (const sibling of this.siblings) {
            sibling.colorAllSiblings(reach - 1);
        }
    }
}

class Graph {
    nodes: GraphNode[] = [];

    constructor(edges: number[][]) {
        for (const edge of edges) {
            this.addEdge(edge[0], edge[1], edge[2]);
        }
    }

    addEdge(startKey: number, endKey: number, subNodesLength: number) {
        let startNode = this.nodes.find((node) => node.key === startKey);
        let endNode = this.nodes.find((node) => node.key === endKey);

        if (!startNode) {
            startNode = new GraphNode(startKey);
            this.nodes.push(startNode);
        }
        if (!endNode) {
            endNode = new GraphNode(endKey);
            this.nodes.push(endNode);
        }

        const subNodes = [...Array(subNodesLength).keys()].map(
            () => new GraphNode()
        );

        const nodesToConnect = [startNode, ...subNodes, endNode];

        for (let i = 0; i < nodesToConnect.length; i++) {
            const currentNode = nodesToConnect[i];
            if (i > 0) {
                currentNode.addSibling(nodesToConnect[i - 1]);
            }
            if (i < nodesToConnect.length - 1) {
                currentNode.addSibling(nodesToConnect[i + 1]);
            }
        }

        this.nodes = this.nodes.concat(subNodes);
    }
}
