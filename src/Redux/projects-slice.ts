import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface projectData {
  id: string;
  customerName: string;
  projectId: string;
  address: string;
  rooms: {
    id: Number;
    name: string;
  }[];
  updated_timestmp: Number;
  totalProject: Number;
  projectState: string;
}

export interface projectsSliceState {
  data: projectData[];
}

const initialState: projectsSliceState = {
  data: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (
      state: projectsSliceState,
      action: PayloadAction<projectsSliceState>
    ) => {
      state.data = action.payload.data;
    },
  },
});

export const setProjects = projectsSlice.actions.setProjects;
