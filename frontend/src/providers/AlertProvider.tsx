import { Stack } from '@mui/material';
import { createContext, FC, useContext, useState } from 'react';
import { Toast } from '../components';
import { v4 } from 'uuid';

interface IAlertContext {
  error: (message: string) => void;
  warning: (message: string) => void;
  success: (message: string) => void;
}

interface IAlert {
  id: string;
  status: 'error' | 'warning' | 'success';
  message: string;
  handleClose: () => void;
}

const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const AlertProvider: FC = (props) => {
  const { children } = props;
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const error = (message: string): void => {
    const id = v4();
    setAlerts((previous) => [
      ...previous,
      {
        id,
        message,
        status: 'error',
        handleClose: () => {
          setAlerts((previous) => previous.filter((alert) => alert.id !== id));
        },
      },
    ]);
  };
  const warning = (message: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const id: string = v4();
    setAlerts((previous) => [
      ...previous,
      {
        id,
        message,
        status: 'warning',
        handleClose: () => {
          setAlerts((previous) => previous.filter((alert) => alert.id !== id));
        },
      },
    ]);
  };
  const success = (message: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const id: string = v4();
    setAlerts((previous) => [
      ...previous,
      {
        id,
        message,
        status: 'success',
        handleClose: () => {
          setAlerts((previous) => previous.filter((alert) => alert.id !== id));
        },
      },
    ]);
  };

  return (
    <AlertContext.Provider value={{ error, warning, success }}>
      {children}
      <Stack sx={{ position: 'fixed', left: 16, bottom: 16, gap: 2, zIndex: 1301 }}>
        {alerts.map((alert) => (
          <Toast key={alert.id} status={alert.status} message={alert.message} handleClose={alert.handleClose} />
        ))}
      </Stack>
    </AlertContext.Provider>
  );
};

export const useAlert = (): IAlertContext => useContext(AlertContext);
