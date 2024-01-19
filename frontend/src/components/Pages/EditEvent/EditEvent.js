import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../../EventForm';

const EditEvent = () => {
  console.log('Event edit poage');
  const data = useRouteLoaderData('event-detail');

  const event = data.event;

  console.log('EDIT Events Event edit data', event);

  return (
    <>
      <h3> Event item </h3>
      <EventForm event={event} />;
    </>
  );
};

export default EditEvent;
