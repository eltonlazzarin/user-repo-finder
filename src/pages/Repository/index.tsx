import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>
                <a
                  href={`https://github.com/${repository.full_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repository.full_name}
                </a>{' '}
                {repository.full_name}
              </strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
    </>
  );
};

export default Repository;
