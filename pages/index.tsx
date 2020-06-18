import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../redux";
import { loadData, startClock, tickClock } from "../redux/actions";
import Page from "../components/Page";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }: { store: any }) => {
    store.dispatch(tickClock(false));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
      store.dispatch(END);
    }

    await store.sagaTask.toPromise();
  }
);

export default Index;
