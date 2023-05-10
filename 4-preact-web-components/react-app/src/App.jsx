import { Forms, MultiSelect } from "origami";

function App() {
  const options = [
    {
      label: "apple",
      selected: false,
    },
    {
      label: "banana",
      selected: false,
    },
  ]
  return (
    <>
      <Forms label="Fruits">
        <MultiSelect options-data={options} />
      </Forms>
    </>
  );
}

export default App;
