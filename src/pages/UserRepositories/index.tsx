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
}

const UserRepository: React.FC = () => {
  const [repository, setRepository] = useState<Repository[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api
      .get(`users/${params.repository}/repos`)
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

      {repository.map((repo) => (
        <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
          <RepositoryInfo>{repo.full_name}</RepositoryInfo>
        </Link>
      ))}
    </>
  );
};

export default UserRepository;
