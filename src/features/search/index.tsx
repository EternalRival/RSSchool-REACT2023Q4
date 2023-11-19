import { useAppDispatch } from 'app/redux/hooks'
import { setSearchValue } from 'app/redux/slices/search-value-slice'
import { FC, FormEventHandler } from 'react'
import { useFetcher, useSearchParams } from 'react-router-dom'
import {
  defaultPageValue,
  defaultQueryValue,
  pageParamName,
  queryParamName,
  searchQueryLocalStorageKey,
} from 'shared/constants'
import styles from './search.module.css'
import searchIconSrc from './ui/search-icon.svg'

export const Search: FC = () => {
  const fetcher = useFetcher()
  const [, setSearchParams] = useSearchParams()
  const defaultValue =
    localStorage.getItem(searchQueryLocalStorageKey) ?? defaultQueryValue

  const searchValueDispatch = useAppDispatch()

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target)
      const formDataEntryValue = formData.get(queryParamName)
      const submitValue = formDataEntryValue?.toString() ?? defaultQueryValue
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev.entries()),
        [pageParamName]: defaultPageValue.toString(),
      }))
      searchValueDispatch(setSearchValue(submitValue))
    }
  }

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
  )
}
