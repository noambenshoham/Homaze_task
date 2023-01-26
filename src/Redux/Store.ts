import { configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from "./projects-slice";

const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectProjects = (state: RootState) => state.projects;

export default store;
