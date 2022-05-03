import { types } from 'mobx-state-tree';

const AppType = types
    .model('AppType', {
        //  id: types.identifier,
        AppTypeIcon: types.string,
        AppTypeName: types.string,
        isChoosen: types.boolean,
    })
    .actions((self) => ({
        togle() {
            self.isChoosen = !self.isChoosen;
        }
    }))



const AppTypeStore = types.model('AppTypeStore', {
    app: types.array(AppType)
})

export const AppStore = AppTypeStore.create({
    app: [
        {
            AppTypeIcon: '/Calculation/AppType/Apple.svg',
            AppTypeName: 'Apple',
            isChoosen: false,
        },
        {
            AppTypeIcon: '/Calculation/AppType/Android.svg',
            AppTypeName: 'Android',
            isChoosen: false,
        }
    ]
})

const CalculationStore = types.model('CalculationStore', {
    appType: types.maybe(types.array(AppType)),
})

export default CalculationStore;