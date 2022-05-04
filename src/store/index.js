import { types } from "mobx-state-tree";
import CalculationStore from "./calculationStore";
import { useContext, createContext } from "react";

export const RootStore = types.model('RootStore', {
    calculation: types.optional(CalculationStore, {}),
})
;
const store = RootStore.create({ calculation: {} });

export const StoreContext = createContext(store);
export function useStore() {
    return useContext(StoreContext);
}