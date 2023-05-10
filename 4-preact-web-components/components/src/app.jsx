import { Forms } from "./forms";
import { MultiSelect } from "./multi-select/multi-select";
export function App() {
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
        <MultiSelect options-data={options}></MultiSelect>
      </Forms>
    </>
  );
}
