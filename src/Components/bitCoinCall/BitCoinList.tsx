import { useReducer, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  useCallBitCoinInfo,
  ActionStateType,
  ActionType,
  INITIAL_OBJECT,
} from '../../Reducer/UpdateReducer/useCallBitCoinInfo';
import React from 'react';
import { useMainList } from '../../Hook/GetMainList/useMainList';
import DateRelate from '../../utils/DateRelate/DatesRelate';

/**
 * @component
 * @returns {JSX.Element}
 */
function BitCoinList(): JSX.Element {
  const APIKEYS = '';
  const todayString = DateRelate.getTodayString();

  const urls: string = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${todayString}?adjusted=true&sort=asc&apiKey=${APIKEYS}`;

  const { data, loading, error } = useMainList<any>(urls, {
    apiKey: null,
    authToken: null,
  });
  console.log(data);
  return <div></div>;
}

export default BitCoinList;
