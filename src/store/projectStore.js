import { types } from "mobx-state-tree";

const TechonolgyType = types
    .model({
        img: types.string,
        name: types.string
    })

const SwiperType = types
    .model({
        img: types.string,
    })

const Projects = types
    .model({
        name: types.string,
        swiper: types.optional(types.array(SwiperType), []),
        techology: types.optional(types.array(TechonolgyType), []),
        cost: types.number
    })

const ProjectsStore = types
    .model({
        projects: types.array(Projects)
    })

export default ProjectsStore