//import toast from "react-hot-toast";
import { fetchNui } from '../utils/fetchNui';
import { Slot } from '../typings';

export const onClothing = (type: string) => {
  fetchNui('useClothing', type);
  fetchNui('exit');
};
