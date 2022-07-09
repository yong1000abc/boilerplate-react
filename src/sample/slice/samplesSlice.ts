import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SampleAgent} from 'src/sample/agent/SampleAgent';
import {Sample} from 'src/sample/model/Sample';
import {AppDispatch} from 'src/store/store';

export type SamplesState = {
    samples: Sample[];
    page: number;
    hasNextPage: boolean;
};

export const fetchSamples = createAsyncThunk<{samples: Sample[], page: number}, {page: number, query?: string}, {dispatch: AppDispatch}>(
  'samples/fetch',
  async ({page, query}) => {
    const {data: {list: samples}} = await SampleAgent.fetchSamples(page, 20, query);
    return {samples, page};
  },
);

const reducers = {
  addSamples: (state: SamplesState, action: PayloadAction<Sample[]>) => {
    state.samples = state.samples?.concat(action.payload);
  }
};

const samplesSlice = createSlice<SamplesState, typeof reducers>({
  name: 'samples',
  initialState: {samples: [], page: 0, hasNextPage: true},
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchSamples.pending, (state, action) => {
      //
    }).addCase(fetchSamples.fulfilled, (state, action) => {
      const {samples, page} = action.payload;
      state.page = page;
      state.samples = page > 1 ? state.samples.concat(samples) : samples;
      state.hasNextPage = samples?.length > 0;
    }).addCase(fetchSamples.rejected, (state, action) => {
      state.hasNextPage = false;
    });
  },
});

export const samplesActions = samplesSlice.actions;
export const samplesReducer = samplesSlice.reducer;
