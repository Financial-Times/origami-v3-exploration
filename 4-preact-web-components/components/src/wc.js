import register from "preact-custom-element";

import { Forms } from "./forms";
import { MultiSelect } from "./multi-select/multi-select";



register(Forms, "o-forms", ["label"], { shadow: false });
register(MultiSelect, "o-multi-select", [], { shadow: false });
