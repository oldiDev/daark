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



export const AppTypeStore = types.model('AppTypeStore', {
    app: types.array(AppType)
})

export const CalculationStore = types.model('CalculationStore', {
    appType: types.maybe(types.array(AppType)),
})
    .actions((self) => ({
        setAppType(array) {
            
        }
    }))

export default CalculationStore;