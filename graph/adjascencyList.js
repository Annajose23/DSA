class Graph{

    constructor(){
        this.adjascencyList = {};
    }

    addVertex(vertex){
        if(!this.adjascencyList[vertex]){
            this.adjascencyList[vertex] = [];
        }
    }

    addEdge(v1,v2){
        this.adjascencyList[v1].push(v2);
        this.adjascencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        this.adjascencyList[v1] = this.adjascencyList[v1].filter(v => v!==v2);
        this.adjascencyList[v2] = this.adjascencyList[v2].filter(v=>v!==v1);
    }

    removeVertex(vertex){
        while(this.adjascencyList[vertex].length){
            const adjascentVertex = this.adjascencyList[vertex].pop();
            this.removeEdge(adjascentVertex,vertex);
        }
        delete this.adjascencyList[vertex];
    }

    dfs(start){
        const res = [];
        const visited= {};
        const adjacencyList = this.adjascencyList;
        (function helper(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            res.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return helper(neighbor)
                }
            });
        })(start);
        return res;
    }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Toronto");
g.addVertex("NewYork");
g.addVertex("Dallas");
g.addEdge("Tokyo","Toronto");
g.addEdge("Toronto", "NewYork");
g.addEdge("Dallas", "NewYork");
//console.log(g);
//g.removeEdge("Toronto","Tokyo");
//console.log(g);
//g.removeVertex("NewYork");
console.log(g.dfs("Toronto"));