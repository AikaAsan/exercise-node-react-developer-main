import { useParams, Link } from 'react-router-dom';

function AdditionalInformation({ repositories }) {
  const { id } = useParams();
  console.log('id', id);
  console.log(repositories);
  console.log(repositories.filter((it) => it.id === +id));
  // const repo = repositories.filter((it) => it.id === id)[0];
  return (
    <>
      <div>Additional information</div>
      <Link to="/">Go home</Link>
    </>
  );
}

export default AdditionalInformation;
