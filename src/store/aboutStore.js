import { types } from "mobx-state-tree";

const StackImg = types
    .model({
        img: types.string,
    })

const Team = types
    .model({
        avatar: types.string,
        name: types.string,
        position: types.string,
        stack: types.optional(types.array(StackImg), []),
    })

const TeamStore = types
    .model('TeamStore', {
        team: types.array(Team),
    })

export default TeamStore