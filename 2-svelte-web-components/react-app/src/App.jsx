import "origami";
import "./app.css";

function App() {
  const options = [
    "apple",
    "banana",
    "blueberry",
    "boysenberry",
    "cherry",
    "durian",
    "eggplant",
    "fig",
    "grape",
    "guava",
    "huckleberry",
  ];
  return (
    <>
      <o-forms label="fruits">
        <o-multi-select slot="o-forms-input">
          <span className="o-multi-select" data-o-component="o-multi-select">
            <select name="fruits" id="fruits" multiple>
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </span>
        </o-multi-select>
      </o-forms>
    </>
  );
}

export default App;
