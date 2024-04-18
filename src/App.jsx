import { useState } from "react";

import Header from "./components/Header/Header.jsx";
// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedContent) => {
    //selectedContent => "component", "jsx", "props", "state"
    setSelectedTopic(selectedContent);
    // console.log(selectedTopic);
  };

  let tabContent = <p>please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept {...coreConcept} />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} 
  />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              components
            </TabButton>
            {/* <TabButton label="JSX" /> */}
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              state
            </TabButton>
          </menu>
          {/* {!selectedTopic ? <p>please select a topic</p> : null} an alternative approach for this is given below*/}
          {/* {!selectedTopic && <p>please select a topic</p>} */}
          {/* {selectedTopic && (
            // <div id="tab-content">
            //   <h3>{EXAMPLES[selectedTopic].title}</h3>
            //   <p>{EXAMPLES[selectedTopic].description}</p>
            //   <pre>
            //     <code>{EXAMPLES[selectedTopic].code}</code>
            //   </pre>
            // </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
