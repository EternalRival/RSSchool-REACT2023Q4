import { useGetListByTitleQuery } from 'app/redux/api/myshows.service';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { setItemsPerPage } from 'app/redux/slices/items-per-page-slice';
import { setListFlags } from 'app/redux/slices/list-flags-slice';
import { CardList } from 'features/card-list';
import { Pagination } from 'features/pagination';
import { Skeleton } from 'features/skeleton';
import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  defaultLanguage,
  defaultPageSizeValue,
  defaultPageValue,
  pageParamName,
} from 'shared/constants';
import styles from './bottom-section.module.css';

export const BottomSection: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = useAppSelector(({ searchValue }) => searchValue.value);
  const pageSize = useAppSelector(({ itemsPerPage }) => itemsPerPage.value);
  const dispatch = useAppDispatch();

  const page = +(searchParams.get(pageParamName) ?? defaultPageValue);

  const {
    currentData,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    isUninitialized,
  } = useGetListByTitleQuery({
    params: {
      search: { query: searchValue },
      page: page - 1,
      pageSize,
    },
    lang: defaultLanguage,
  });
  const list = currentData?.list ?? [];
  const count = currentData?.count ?? 0;

  useEffect(() => {
    dispatch(
      setListFlags({
        isFetching,
        isLoading,
        isError,
        isSuccess,
        isUninitialized,
      })
    );
  }, [dispatch, isError, isFetching, isLoading, isSuccess, isUninitialized]);

  return (
    <Skeleton enabled={isFetching}>
      <div className={`${styles.tvShowListSection} scrollbar`}>
        <CardList list={list} />
      </div>
      <div className={styles.paginationSection}>
        <Pagination
          count={count}
          pageSizeOptions={[5, 10, 20, 30, 50]}
          page={page}
          pageSize={pageSize}
          defaultPageSize={defaultPageSizeValue}
          setPage={(value) => {
            setSearchParams((prev) => ({
              ...Object.fromEntries(prev.entries()),
              [pageParamName]: value.toString(),
            }));
          }}
          setPageSize={(value) => {
            setSearchParams((prev) => ({
              ...Object.fromEntries(prev.entries()),
              [pageParamName]: defaultPageValue.toString(),
            }));
            dispatch(setItemsPerPage(value));
          }}
        />
      </div>
    </Skeleton>
  );
};
