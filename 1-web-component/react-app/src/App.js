import "origami";

function App() {
  const options = ["Apple", "Banana", "Orange", "Pineapple", "Strawberry"];
  return (
    <div>
      <o-forms label="Fruits">
        <o-multi-select>
          <p>hi</p>
          <span className="o-multi-select" data-o-component="o-multi-select">
            <select id="fruits" name="fruits" multiple>
              {options.map((option) => {
                return <option value={option} key={option}>{option}</option>;
              })}
            </select>
          </span>
        </o-multi-select>
      </o-forms>
    </div>
  );
}

export default App;
