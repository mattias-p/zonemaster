(() => {

  mermaid.initialize({
    startOnLoad: true,
  });

  // Example usage
  const text = `
    graph TD;
    A[Start] --> B{Decision};
    B -->|Yes| C[End];
    B -->|No| D[Process];
  `;

  function prev(key) {
    const lastIndex = key.lastIndexOf('.');
    if (lastIndex === -1) return key;

    const prefix = key.slice(0, lastIndex);
    const suffix = Number(key.slice(lastIndex + 1));

    return suffix === 1 ? prefix : `${prefix}.${suffix - 1}`;
  }

  function versionSort(arr) {
    arr.sort((a, b) => {
      const aParts = a.split('.').map(Number);
      const bParts = b.split('.').map(Number);

      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
          const numA = aParts[i] || 0; // Default to 0 if undefined
          const numB = bParts[i] || 0;

          if (numA !== numB) {
              return numA - numB;
          }
      }
      return 0; // Versions are equal
    });
  }

  function getDepth(key) {
    return key.split('.').length;
  }

  async function renderList(node) {
    const text = node.textContent;

    const diagram = await mermaid.mermaidAPI.getDiagramFromText(text);
    const nodes = diagram.db.getVertices();

    const endNodes = new Set();
    for (const edge of diagram.db.getEdges()) {
      if (edge.end === "END") {
        endNodes.add(edge.start);
      }
    }

    const regex = /^[1-9][0-9]*([.][1-9][0-9]*)*$|^END$/;
    const keys = [...nodes.keys()];

    if ( keys.every(key => regex.test(key) && nodes.has(prev(key))) ) {
      versionSort(keys);

      const stack = [document.createElement("ol")];
      var oldDepth = 1;

      for (const key of keys) {
        if (key === "END") {
          continue
        }
        const newDepth = getDepth(key);

        if ( oldDepth < newDepth ) {
          const ol = document.createElement("ol");
          stack.at(-1).appendChild(ol);
          stack.push(ol);
          oldDepth = newDepth;
        }

        while ( oldDepth > newDepth ) {
          stack.pop();
          oldDepth--;
        }

        const li = document.createElement("li");
        li.textContent = nodes.get(key).text;
        stack.at(-1).appendChild(li);

        if (endNodes.has(key)) {
          const li = document.createElement("li");
          li.textContent = nodes.get("END").text;
          stack.at(-1).appendChild(li);
        }
      }

      const heading = document.createElement("h2");
      heading.textContent = "RENDERED";
      node.parentNode.insertBefore(heading, node);
      node.parentNode.insertBefore(stack.at(0), node);
    }
  }

  const definition = document.getElementsByTagName('pre')[0];
  if ( definition ) {
    renderList(definition);
  }
})();
