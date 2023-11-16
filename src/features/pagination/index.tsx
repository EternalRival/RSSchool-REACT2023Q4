import { FC } from 'react';
import { Form } from 'react-router-dom';
import styles from './pagination.module.css';

type PaginationProps = {
  count: number;
  pageSizeOptions: number[];
  page: number;
  pageSize: number;
  defaultPageSize: number;
  setPage: (value: number) => void;
  setPageSize: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  count,
  pageSizeOptions,
  page,
  pageSize,
  defaultPageSize,
  setPage,
  setPageSize,
}) => {
  const currentPage = Math.max(1, page);
  const currentPageSize = pageSizeOptions.includes(pageSize)
    ? pageSize
    : defaultPageSize;

  const [min, max] = [1, Math.ceil(count / currentPageSize)];
  const [prevPage, nextPage] = [
    Math.max(min, currentPage - 1),
    Math.min(currentPage + 1, max),
  ];

  return (
    <Form className={styles.container}>
      {[
        { label: '«', value: min, alt: 'go to first' },
        { label: '‹', value: prevPage, alt: 'go to prev' },
        { label: `${currentPage}`, value: currentPage, alt: 'current page' },
        { label: '›', value: nextPage, alt: 'go to next' },
        { label: '»', value: max, alt: 'go to last' },
      ].map(({ label, value, alt }) => (
        <button
          type="button"
          key={label}
          aria-label={alt}
          className={styles.button}
          disabled={currentPage === value}
          onClick={() => setPage(value)}
        >
          {label}
        </button>
      ))}
      <select
        className={styles.select}
        aria-label="items per page select element"
        defaultValue={currentPageSize}
        onChange={(e) => setPageSize(+e.target.value)}
      >
        {pageSizeOptions.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </Form>
  );
};
