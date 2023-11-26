import { defaultQueryValue, queryParamName } from '@shared/constants'
import { FC, FormEventHandler } from 'react'
import { SearchIcon } from './ui/search-icon'

type Props = { submitValue: string; setSubmitValue: (value: string) => void }

export const Search: FC<Props> = ({ submitValue, setSubmitValue }) => {
  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target)
      const formDataEntryValue = formData.get(queryParamName)
      const submitValue = formDataEntryValue?.toString() ?? defaultQueryValue
      setSubmitValue(submitValue)
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="inline-flex h-12 w-full max-w-md"
    >
      <input
        type="search"
        name={queryParamName}
        placeholder="Search…"
        className="flex-grow rounded px-2 shadow-md ring-1 ring-inset ring-teal-400 focus:outline-none focus:ring-2 focus:ring-inset"
        defaultValue={submitValue}
        autoComplete="off"
      />
      <button className="aspect-square cursor-pointer rounded bg-teal-100 shadow-md ring-1 ring-inset ring-teal-400 hover:brightness-110 active:brightness-100">
        <SearchIcon
          className="m-auto"
          fill="teal"
        />
      </button>
    </form>
  )
}
