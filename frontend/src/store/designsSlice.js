import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentImageIndex: [],
  isTransitioning: false,
  showTooltip: null,
  tooltipTimeout: null,
  isHomepage: false, // Add isHomepage to the initial state
};

const designsSlice = createSlice({
  name: 'designs',
  initialState,
  reducers: {
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
    setIsTransitioning: (state, action) => {
      state.isTransitioning = action.payload;
    },
    setShowTooltip: (state, action) => {
      state.showTooltip = action.payload;
    },
    setTooltipTimeout: (state, action) => {
      state.tooltipTimeout = action.payload;
    },
    setIsHomepage: (state, action) => {
      state.isHomepage = action.payload; // Add a reducer to set isHomepage
    },
  },
});

export const {
  setCurrentImageIndex,
  setIsTransitioning,
  setShowTooltip,
  setTooltipTimeout,
  setIsHomepage, // Export the new action
} = designsSlice.actions;

export default designsSlice.reducer;