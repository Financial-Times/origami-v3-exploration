import { OFormsTSX, OMultiSelectTSX } from "origami";

function App() {
  const options = ["Apple", "Banana", "Strawberry"];
  return (
    <>
      <OFormsTSX label="Fruits">
        <OMultiSelectTSX slot="o-forms-input" baseId="fruits">
          <span className="o-multi-select" data-o-component="o-multi-select">
            <select name="fruits" id="fruits" multiple>
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </span>
        </OMultiSelectTSX>
      </OFormsTSX>
    </>
  );
}

export default App;
