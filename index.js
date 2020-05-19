import {createGitgraph, templateExtend} from "@gitgraph/js";

// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// set the options

const options = {
  template: templateExtend("metro", {
    colors: ["grey", "orange", "blue", "green", "purple"],
  }),
};

// Instantiate the graph.
const gitgraph = createGitgraph(graphContainer, options);

const master = gitgraph.branch("master");
master.commit({
  author: "Jody <jody@census>",
  subject: "Initial Commit",
})

const v35 = master.branch({
      name: "BRANCH initial-draft-a",
    },
)
v35.commit({
  author: "Jody <jody@census>",
  subject: "Add 3.5.0 CSV files and docs",
})

master.merge({
  branch: v35,
  commitOptions: {
    author: "Jody <jody@census>",
    subject: "Merge 3.5.0 into master",
  }
})
master.tag("TAG 3.5.0")
const v40 = master.branch("BRANCH 3.5.0-draft-a")
v40.commit({
  author: "Jody <jody@census>",
  subject: "Add 4.0.0 CSV files and docs",
})
master.merge({
  branch: v40,
  commitOptions: {
    author: "Jody <jody@census>",
    subject: "Merge 4.0.0 into master",
  }
})
master.tag("TAG 4.0.0")

const v410 = master.branch("BRANCH 4.0.0-draft-a")
v410.commit({
  author: "Stephen <stephen@census>",
  subject: "QWI specific data changes",
})

const v420 = master.branch("BRANCH 4.0.0-draft-b")
v420.commit({
  author: "Stephen <stephen@census>",
  subject: "PSEO specific data changes",
})
v410.commit({
  author: "Jody <jody@census>",
  subject: "Modify asciidoc to for QWI",
})
v420.commit({
  author: "Jody <jody@census>",
  subject: "Modify asciidoc for PSEO",
})
v410.commit({
  author: "Jody <jody@census>",
  subject: "QWI corrections",
})

master.merge({
  branch: v410,
  commitOptions: {
    author: "Jody <jody@census>",
    subject: "Merge 4.1.0 Master",
  }
})
master.tag("TAG 4.1.0")

v420.commit({
  author: "Jody <jody@census>",
  subject: "PSEO Corrections",
})

v410.tag("TAG 4.0.0-draft-a")
v420.tag("TAG 4.0.0-draft-b")

master.merge({
  branch: v420,
  commitOptions: {
    author: "Jody <jody@census>",
    subject: "Merge 4.1.1 to Master",
  }
})
master.tag("TAG 4.2.0")

