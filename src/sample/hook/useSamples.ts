import {useEffect} from 'react';
import {fetchSamples, SamplesState} from 'src/sample/slice/samplesSlice';
import {useTypedDispatch, useTypedSelector} from 'src/store';

export function useSamples() {
  const {samples, page} = useTypedSelector<SamplesState>(state => state.samples);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchSamples({page: page + 1, query: undefined}));
  }, []);

  return {samples};
}