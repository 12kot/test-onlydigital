import { useTranslation } from 'react-i18next';

import { Span } from 'shared/components';

import { SVGLeftArrow, SVGRightArrow } from 'assets';

import styles from './styles.module.scss';

interface Props {
  currentValue: number;
  maxValue: number;
  changePage: (i: number) => void
}

export const Control: React.FC<Props> = ({ currentValue, maxValue, changePage }) => {
  const { t } = useTranslation('home');

  return (
    <section className={styles.container}>
      <Span>{t('progress', { current: `0${currentValue}`, total: `0${maxValue}` })}</Span>
      <div className={styles.actions}>
        <button onClick={() => changePage(currentValue - 2)} disabled={currentValue - 1 === 0}>
          <SVGLeftArrow />
        </button>
        <button onClick={() => changePage(currentValue)} disabled={currentValue === maxValue}>
          <SVGRightArrow />
        </button>
      </div>
    </section>
  );
};
