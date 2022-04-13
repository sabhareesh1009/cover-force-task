import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text()) // this url returning the string formmat
      .then((y) => {
        // here hard coded the sample data for showing in the form
        const res = {
          name: "Awesome Person",
          email: "awesome@gmail.com",
          carrierId1: 123456,
          carrierId2: 123457,
        };
        setState({ data: res, loading: false });
      });
  }, [url]);
  return state;
};
