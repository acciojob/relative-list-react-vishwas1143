import React from "react";

const App = () => {
  const relatives = [
    { key: "relativeListItem1", name: "Rajesh" },
    { key: "relativeListItem2", name: "Vishwas" },
    { key: "relativeListItem3", name: "Chotu" },
  ];
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((ele) => {
          return <li key={ele.key}>{ele.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
