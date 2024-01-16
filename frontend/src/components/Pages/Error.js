import { useRouteError } from 'react-router-dom';
import PageContent from './PageContent/PageContent';
import MainNavigation from '../MainNavigation';
const Error = () => {
  const error = useRouteError();

  let title = 'An Error occured!';

  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Oops, page not found!';
    message = 'Resources not found ';
  
  }

  return (
    <>
    <MainNavigation />
      <PageContent title={title}>
        {' '}
        <p> {message} </p>{' '}
      </PageContent>
    </>
  );
};

export default Error;
