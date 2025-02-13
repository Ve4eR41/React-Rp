import classNames from 'classnames';
import { JSX } from 'react';


interface PanelProps {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
  isWFull?: boolean;
  isCleanStyle?: boolean;
}

function Panel({ children, className, isWFull, isCleanStyle, ...rest }: PanelProps) {
  const classes = classNames(
    className,
    {
      'w-full': !isWFull,
      'border rounded shadow bg-white p-3 ': !isCleanStyle
    }
  );

  return <div {...rest} className={classes}>
    {children}
  </div>

}

export default Panel;
