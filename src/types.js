// @flow

export type UserType = {
  uid: number,
  name?: string,
  at?: number,
  mt?: number,
  level: string
};

export type MerchantType = {
  id: number,
  url: string,
  market: string,
  cashback: number,
  preTag: string,
  label: string,
  activated?: boolean
};

export type CacheActivationType = {
  id: number,
  date: number
};
