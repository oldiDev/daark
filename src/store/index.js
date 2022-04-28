import { types } from "mobx-state-tree";
import CalculationStore from "./calculationStore";

const RootStore = types.model('RootStore', {
    calculation: CalculationStore,
});

export default RootStore;