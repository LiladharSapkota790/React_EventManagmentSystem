import { useRouteLoaderData, json } from 'react-router-dom';
import EventItem from '../../EventItem';

const EventDetail = () => {

  const data = useRouteLoaderData('event-detail');
  console.log("Data form " + data);

  return (
    <>
  
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Couldnot fetch ' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
