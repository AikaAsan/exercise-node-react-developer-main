import { useState } from 'react';
import { Link } from 'react-router-dom';

function Repo({ repositories }) {
  const [language, setLanguage] = useState('');
  const handleClick = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      <div>
        <button value="" onClick={handleClick}>
          All languages
        </button>
        {repositories
          .reduce((acc, rec) => {
            return acc.includes(rec.language) ? acc : [...acc, rec.language];
          }, [])
          .map((item, index) => {
            return (
              <button value={item} key={index} onClick={handleClick}>
                {item}
              </button>
            );
          })}
      </div>
      {repositories
        .filter((item) => (language === '' ? true : language === item.language))
        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .map((repo) => {
          return (
            <div key={repo.id}>
              <Link to={`/${repo.id}`}>Repository Name: {repo.name}</Link>
              <p>Description: {repo.description}</p>
              <p>Languange: {repo.language}</p>
              <p>forks: {repo.forks}</p>
              <p>Created at: {repo.created_at}</p>
            </div>
          );
        })}
    </>
  );
}

export default Repo;
