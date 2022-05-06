import { remove } from 'mobx';
import { types } from 'mobx-state-tree';

const AppType = types
    .model('AppType', {
        //  id: types.identifier,
        AppTypeIcon: types.string,
        AppTypeName: types.string,
        price: types.number,
        isSelected: types.boolean,
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
        }
    }))

const ProjectType = types
    .model('ProjectType', {
        ProjectTypeIcon: types.string,
        ProjectTypeName: types.string,
        price: types.number,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
        }
    }))

const UniqueScreen = types
    .model('UniqueScreen', {
        UniqueScreenIcon: types.string,
        UniqueScreenName: types.string,
        price: types.number,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
        }
    }))

const DegreeDevelopment = types
    .model('DegreeDevelopment', {
        DegreeDevelopmentIcon: types.string,
        DegreeDevelopmentName: types.string,
        price: types.number,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
        }
    }))

const Functions = types
    .model('Functions', {
        FunctionsIcon: types.string,
        FunctionsName: types.string,
        price: types.number,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
        }
    }))

const Services = types
    .model('Services', {
        ServicesIcon: types.string,
        ServicesName: types.string,
        price: types.number,
        isSelected: types.boolean
    })
    .actions((self) => ({
        togle() {
            self.isSelected = !self.isSelected;
        },
        removeSelection(){
            self.isSelected = false;
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
        },

    }))

export default CalculationStore;