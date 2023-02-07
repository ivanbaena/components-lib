import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    label: 'Can I use React on a Project',
    content: 'You can use React on any project you want',
    id: 1,
  },
  {
    label: 'Can I use Javascript on a Project',
    content: 'You can use Javascript on any project you want',
    id: 2,
  },
  {
    label: 'Can I use CSS on a Project',
    content: 'You can use CSS on any project you want',
    id: 3,
  }
]

function App() {
  return <Accordion items={items} />
}

export default App;
