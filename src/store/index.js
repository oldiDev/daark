import { types } from "mobx-state-tree";
import createPersistentStore from "mst-persistent-store";
import CalculationStore from "./calculationStore";
import data from "../assets/data/teamData.json"
import TeamStore from "./aboutStore";


export const RootStore = types.model('RootStore', {
    calculation: types.optional(CalculationStore, {}),
    team: types.optional(TeamStore, {}),
})
    .actions((self) => ({
        setCalculation: (appType, projectType, uniqueScreen, degreeDevelopment, functions, services) => {
            self.calculation.appType = appType;
            self.calculation.projectType = projectType;
            self.calculation.uniqueScreen = uniqueScreen;
            self.calculation.degreeDevelopment = degreeDevelopment;
            self.calculation.functions = functions;
            self.calculation.services = services;
        },
        removeAnySelection: () => {
            self.calculation.appType?.forEach((e) => e.removeSelection());
            self.calculation.projectType?.forEach((e) => e.removeSelection());
            self.calculation.uniqueScreen?.forEach((e) => e.removeSelection());
            self.calculation.degreeDevelopment?.forEach((e) => e.removeSelection());
            self.calculation.functions?.forEach((e) => e.removeSelection());
            self.calculation.services?.forEach((e) => e.removeSelection());
        },
        removePojectTypeSelection: () => {
            self.calculation.projectType?.forEach((e) => e.removeSelection());
        }
    }))


export const [PersistentStoreProvider, usePersistentStore] = createPersistentStore(
    RootStore,
    {
        team: data,
        calculation: {},
    },
)

