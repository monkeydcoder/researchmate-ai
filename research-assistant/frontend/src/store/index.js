import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Paper Analysis Slice
const paperAnalysisSlice = createSlice({
  name: 'paperAnalysis',
  initialState: {
    input: '',
    result: null,
    loading: false
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// Research Trends Slice
const researchTrendsSlice = createSlice({
  name: 'researchTrends',
  initialState: {
    input: '',
    result: null,
    loading: false
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// Citation Generator Slice
const citationGeneratorSlice = createSlice({
  name: 'citationGenerator',
  initialState: {
    input: '',
    result: null,
    loading: false,
    format: 'APA'
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFormat: (state, action) => {
      state.format = action.payload;
    }
  }
});

// Research Questions Slice
const researchQuestionsSlice = createSlice({
  name: 'researchQuestions',
  initialState: {
    input: '',
    result: null,
    loading: false
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// Literature Review Slice
const literatureReviewSlice = createSlice({
  name: 'literatureReview',
  initialState: {
    input: '',
    result: null,
    loading: false
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// Export actions
export const paperAnalysisActions = paperAnalysisSlice.actions;
export const researchTrendsActions = researchTrendsSlice.actions;
export const citationGeneratorActions = citationGeneratorSlice.actions;
export const researchQuestionsActions = researchQuestionsSlice.actions;
export const literatureReviewActions = literatureReviewSlice.actions;

// Configure store with all slices
export const store = configureStore({
  reducer: {
    paperAnalysis: paperAnalysisSlice.reducer,
    researchTrends: researchTrendsSlice.reducer,
    citationGenerator: citationGeneratorSlice.reducer,
    researchQuestions: researchQuestionsSlice.reducer,
    literatureReview: literatureReviewSlice.reducer
  }
});

export default store; 