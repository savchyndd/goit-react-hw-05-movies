import { useState } from 'react';
import { InputSearch, ButtonSearch } from './Form.module';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <ButtonSearch type="submit" disabled={!query}>
        Search
      </ButtonSearch>
    </form>
  );
};

export default Form;
