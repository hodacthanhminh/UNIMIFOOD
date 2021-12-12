import { notification } from 'antd';

export const openNoti = (notiType, notiTitle, notiDescription) => {
  notification[notiType]({
    message: notiTitle,
    description: notiDescription,
    placement: 'bottomRight',
  });
};
