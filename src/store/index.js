import { types } from "mobx-state-tree";
import CalculationStore from "./calculationStore";

const RootStore = types.model('RootStore', {
    calculation: types.optional(CalculationStore, {}),
});

export default RootStore;