import { useStoreDispatch } from 'app/store';
import { ActionType } from 'app/store/model/enums';
import { FC, FormEventHandler } from 'react';
import { useFetcher } from 'react-router-dom';
import {
  defaultQueryValue,
  queryParamName,
  searchQueryLocalStorageKey,
} from 'shared/constants';
import styles from './search.module.css';
import searchIconSrc from './ui/search-icon.svg';

export const Search: FC = () => {
  const fetcher = useFetcher();
  const dispatch = useStoreDispatch();
  const defaultValue =
    localStorage.getItem(searchQueryLocalStorageKey) ?? defaultQueryValue;

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const formDataEntryValue = formData.get(queryParamName);
      const submitValue = formDataEntryValue?.toString() ?? defaultQueryValue;
      dispatch({
        type: ActionType.ClickedSearchSubmit,
        searchValue: submitValue,
      });
    }
  };

  return (
    <fetcher.Form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Search…"
        className={styles.input}
        name={queryParamName}
        defaultValue={defaultValue}
        autoFocus={true}
        autoComplete={'off'}
      />
      <button className={styles.submit}>
        <img src={searchIconSrc} alt="search button" width={24} height={24} />
      </button>
    </fetcher.Form>
  );
};
