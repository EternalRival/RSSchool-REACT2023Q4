import { useAppSelector } from 'app/redux/hooks';
import { FC } from 'react';
import styles from './demo.module.css';

export const Demo: FC = () => {
  type Flags = {
    isFetching: boolean;
    isUninitialized: boolean;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
  };
  const parseFlags = ({
    isFetching,
    isUninitialized,
    isError,
    isLoading,
    isSuccess,
  }: Flags): string => {
    return [
      `F:${+isFetching}`,
      `U:${+isUninitialized}`,
      `E:${+isError}`,
      `L:${+isLoading}`,
      `S:${+isSuccess}`,
    ].join(' | ');
  };
  const detailsFlags = useAppSelector(({ detailsFlags }) =>
    parseFlags(detailsFlags)
  );
  const listFlags = useAppSelector(({ listFlags }) => parseFlags(listFlags));
  const itemsPerPage = useAppSelector((state) => state.itemsPerPage.value);
  const searchValue = useAppSelector((state) => state.searchValue.value);

  return (
    <dl className={styles.demo}>
      <dt>DetailsFlags</dt>
      <dd>{detailsFlags}</dd>
      <dt>ListFlags</dt>
      <dd>{listFlags}</dd>
      <dt>ItemsPerPage</dt>
      <dd>{JSON.stringify(itemsPerPage)}</dd>
      <dt>SearchValue</dt>
      <dd>{JSON.stringify(searchValue)}</dd>
    </dl>
  );
};
