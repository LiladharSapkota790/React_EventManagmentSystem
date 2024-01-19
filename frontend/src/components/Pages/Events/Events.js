import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../../EventsList';

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// this loader execute in browsere

export async function EventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  console.log('Responese from event', response);

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'could not fetch data' }), {
    //   status: 500,
    // });
    throw json(
      {
        message: 'Could not fetch data',
      },
      {
        status: 500,
      }
    );
    //
  } else {
    // const resData = await response.json();
    // //
    // return resData.events;
    // with the help of loader we can return response directly
    return response;
  }
}
