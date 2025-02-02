import { Dayjs } from 'dayjs';

type Reminder = {
  id: number;
  title: string;
  description: string;
  date?: Dayjs;
  pet: {
    name: string;
  };
};
