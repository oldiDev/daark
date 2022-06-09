import { types } from "mobx-state-tree";
import createPersistentStore from "mst-persistent-store";
import CalculationStore from "./calculationStore";
import data from "../assets/data/teamData.json";
import projectData from '../assets/data/projectData.json'
import TeamStore from "./aboutStore";
import ProjectsStore from "./projectStore";
import calculationData from '../assets/data/calculationData.json'


export const RootStore = types.model('RootStore', {
    calculation: types.optional(CalculationStore, {}),
    team: types.optional(TeamStore, {}),
    projects: types.optional(ProjectsStore, {})
})
    .actions((self) => ({
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
        calculation: calculationData,
        projects: projectData,
    },
)

