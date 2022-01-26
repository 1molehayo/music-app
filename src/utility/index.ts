import Toastify from 'toastify-js';

export const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return '';
  }

  return `${str.substr(0, 1).toUpperCase()}${str.substr(1).toLowerCase()}`;
};

const getToasterStyles = (type: string) => {
  switch (type) {
    case 'error':
      return 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))';

    case 'warn':
      return 'linear-gradient(to right, rgb(255 244 113), rgb(150, 201, 61))';

    default:
      return 'linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))';
  }
};

type INotify = {
  type: string;
  message: string;
};

export const notify = ({ type, message }: INotify) => {
  return Toastify({
    text: message,
    duration: 3000,
    close: true,
    style: {
      background: getToasterStyles(type),
      color: '#fff',
      'font-size': '16px'
    }
  }).showToast();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateObject = (oldObject: any, newProps: any) => ({
  ...oldObject,
  ...newProps
});
