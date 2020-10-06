import React, { useState, useEffect, FormEvent } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  followers: string;
  following: string;
  email: string;
  bio: string;
  login: string;
  avatar_url: string;
}

const Main: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubApp:users');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@GithubApp:users', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite um usuário válido!');
      return;
    }

    try {
      const response = await api.get<Repository>(`users/${newUser}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por este usuário');
    }
  }

  return (
    <>
      <Form
        data-testid="user-form"
        hasError={!!inputError}
        onSubmit={handleAddRepository}
      >
        <input
          data-testid="input-user"
          placeholder="Digite o nome do usuário"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories data-testid="user-list">
        {repositories.map((repository) => (
          <Link key={repository.login} to={`/users/${repository.login}/repos`}>
            <img src={repository.avatar_url} alt={repository.login} />
            <div>
              <p>Followers: {repository.followers}</p>
              <p>Following: {repository.following}</p>
              <p>Email: {repository.email}</p>
              <br></br>
              <p>Bio: {repository.bio}</p>
              <button>Ver repositórios</button>
            </div>
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Main;
