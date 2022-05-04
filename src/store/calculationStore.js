import { types } from 'mobx-state-tree';

const AppType = types
    .model('AppType', {
        //  id: types.identifier,
        AppTypeIcon: types.string,
        AppTypeName: types.string,
        isSelected: types.boolean,
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const ProjectType = types
    .model('ProjectType', {
        ProjectTypeIcon: types.string,
        ProjectTypeName: types.string,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const UniqueScreen = types
    .model('UniqueScreen', {
        UniqueScreenIcon: types.string,
        UniqueScreenName: types.string,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const DegreeDevelopment = types
    .model('DegreeDevelopment', {
        DegreeDevelopmentIcon: types.string,
        DegreeDevelopmentName: types.string,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const Functions = types
    .model('Functions', {
        FunctionsIcon: types.string,
        FunctionsName: types.string,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const Services = types
    .model('Services', {
        ServicesIcon: types.string,
        ServicesName: types.string,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        }
    }))

const CalculationStore = types.model('CalculationStore', {
    appType: types.maybe(types.array(AppType)),
    projectType: types.maybe(types.array(ProjectType)),
    uniqueScreen: types.maybe(types.array(UniqueScreen)),
    degreeDevelopment: types.maybe(types.array(DegreeDevelopment)),
    functions: types.maybe(types.array(Functions)),
    services: types.maybe(types.array(Services))
})
    .actions((self) => ({
        setAppType(array) {
            self.appType = array;
        }
    }))

export default CalculationStore;