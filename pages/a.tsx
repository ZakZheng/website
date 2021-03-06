import { withRouter } from "next/router";
import styled from "styled-components";
import { connect } from "react-redux";
import { IStoreState, add } from "../store/store";

const Title = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const A = ({ router, name, time, count, addCount }) => {
  return (
    <Title>
      <span>{JSON.stringify(router.query) + name + time}</span>
      <style jsx>{`
        span {
          display: flex;
        }
      `}</style>
    </Title>
  );
};

A.getInitialProps = async e => {
  console.log({ e });

  const moment = (await import("moment")).default;
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'zkaa',
        time: moment(Date.now() - 60 * 1000).fromNow(),
      });
    }, 1000);
  });
  return await promise;
};

export default connect(
  (state: IStoreState) => ({
    count: state.count
  }),
  dispatch => ({
    addCount: (num: number) => dispatch(add(num))
  })
)(withRouter(A));
