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
    throw new Error("Not implemented");
};
