import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {SampleView} from 'src/sample/view/SampleView';
import {store} from 'src/store/store';
import {ServiceWorkerController} from 'src/sw/ServiceWorkerController';

ServiceWorkerController.init();

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <BrowserRouter>
      <Provider store={store}>
        <SampleView/>
      </Provider>
    </BrowserRouter>
  );
}