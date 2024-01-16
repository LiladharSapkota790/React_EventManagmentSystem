import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/Homepage/Homepage';
import Events from './components/Pages/Events/Events';
import { EventsLoader } from './components/Pages/Events/Events';
import RootLayout from './components/RootLayout/RootLayout';
import EventDetail, {
  loader as eventdetailsLoader,
} from './components/Pages/EventDetail/EventDetail';
import NewEvent, {action as newEventAction} from './components/Pages/NewEvent/NewEvent';
import EditEvent from './components/Pages/EditEvent/EditEvent';
import EventsRootLayout from './components/Pages/EventsRootLayout/EventsRootLayout';
import Error from './components/Pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            path: '',
            element: <Events />,
            loader: EventsLoader,
          },

          // here as we are going to need the loaded data inside the editform  we are sharing loader with parents to child
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventdetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: 'edit', element: <EditEvent /> },
            ],
          },

          { path: 'newevent', element: <NewEvent />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
