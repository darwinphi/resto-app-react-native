import { useState } from "react";
import yelp from "../api/yelp";

export default function useRestaurant() {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const searchRestaurant = async (id) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`/${id}`, {
        params: {
          locale: "en_PH",
        },
      });
      setResult({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong.",
      });
    }
  };

  return [result, searchRestaurant];
}
