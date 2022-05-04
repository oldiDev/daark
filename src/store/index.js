import { types } from "mobx-state-tree";
import CalculationStore from "./calculationStore";
import { useContext, createContext } from "react";
import { AppData } from "../data/calculationData";
import createPersistentStore from "mst-persistent-store";

export const RootStore = types.model('RootStore', {
    calculation: types.optional(CalculationStore, {}),
})
    .actions((self) => ({
        setCalculation: (appType, projectType, uniqueScreen, degreeDevelopment, functions, services) => {
            self.calculation.appType = appType;
            self.calculation.projectType = projectType;
            self.calculation.uniqueScreen = uniqueScreen;
            self.calculation.degreeDevelopment = degreeDevelopment;
            self.calculation.functions = functions;
            self.calculation.services = services;
        }
    }));


export const [PersistentStoreProvider, usePersistentStore] = createPersistentStore (
    RootStore
)

