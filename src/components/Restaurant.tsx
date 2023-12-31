import React, { useEffect, useState } from "react";
import axios from "axios";
// types
import { RestaurantList } from "./RestaurantList";
import { InitialDataProps } from "../shared/types/InitialDataProps";
import { RestaurantProps } from "../shared/types/RestaurantProps";

const InitialData = {
  loading: false,
  data: [],
  state: [],
  error: false,
};

export const Restaurant = () => {
  const [data, setData] = useState<InitialDataProps>(InitialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<RestaurantProps[]>("https://nextjs-orpin-omega-98.vercel.app/api/restaurants");
        setData((prev: InitialDataProps) => ({
          ...prev,
          loading: true,
          data: [...response.data],
          state: returnAllState(response.data)
        }));
      } catch {
        setData((prev: InitialDataProps) => ({ ...prev, error: true }));
      } finally {
        setData((prev: InitialDataProps) => ({ ...prev, loading: false }));
      }
    };
    fetchData();
  }, [data]);

  const returnAllState = (data: RestaurantProps[]) => {
    return Object.keys(data.reduce((acc: any, curr) => {
      const state = curr.state;
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {}));
  }

  const filterByState = (state: string) => {
    return data.data.filter((restaurant) => restaurant.state === state)
  }
  

  return (
    <>
      {data.state.map((value, i) => (
        <RestaurantList key={i} state={value} restaurants={filterByState(value)}/>
      ))}
    </>
  );
};
