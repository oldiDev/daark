import { types } from 'mobx-state-tree';

const AppType = types
    .model('AppType', {
        //  id: types.identifier,
        icon: types.string,
        name: types.string,
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

const AppStore = AppTypeStore.create({
    app: [
        {
            icon: '/Calculation/AppType/Apple.svg',
            name: 'Apple',
            isChoosen: false,
        },
        {
            icon: '/Calculation/AppType/Android.svg',
            name: 'Android',
            isChoosen: false,
        }
    ]
})

const CalculationStore = types.model('CalculationStore', {
    appType: types.maybe(types.array(AppType)),
})

export default CalculationStore;