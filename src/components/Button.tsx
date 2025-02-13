import classNames from 'classnames';
import { JSX } from 'react';
import { GoSync } from 'react-icons/go';



interface ButtonProps {
  loading?: boolean;
  secondary?: boolean;
  success?: boolean;
  circle?: boolean;
  rounded?: boolean;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> ;
}



function Button({
  children,
  loading,
  secondary,
  success,
  circle,
  rounded,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    className,
    'flex justify-center items-center border hover:opacity-80',
    {
      'opacity-80 bg-gray': loading,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'h-full w-full rounded-full px-0 py-0 ': circle,
      'px-3 py-1.5': !circle,
      'rounded-full': rounded,
    },
  );

  return <button {...rest} disabled={loading} className={classes} onClick={onClick}>
    {loading ? <GoSync className='animate-spin' /> : children}
  </button>
    ;
}


export default Button;
