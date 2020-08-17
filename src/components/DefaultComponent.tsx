import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../styles/DefaultComponent.css";
import { RootState } from "../redux/reducers";
import { bindActionCreators } from "redux";
import { setContentAsync } from "../redux/actions/default";
import { AppDispatch } from "../redux";

type DefaultComponentOwnProps = {};

const mapStateToProps = (
  state: RootState,
  ownProps: DefaultComponentOwnProps
) => {
  const defaultReducerContent = state.DefaultReducer.content;

  return {
    defaultReducerContent,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      setContent: setContentAsync,
    },
    dispatch
  );

type DefaultComponentProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  DefaultComponentOwnProps;

const DefaultComponent: React.FC<DefaultComponentProps> = (props) => {
  useEffect(() => {
    props.setContent("a non-initial value");
  }, []);
  return (
    <div className="DefaultComponent">
      <header className="DefaultComponent-header">
        <p>A template React app!</p>
        <p>{props.defaultReducerContent}</p>
      </header>
    </div>
  );
};

// const dispatchProps = {
//     setContent: setContentAsync,
//   };

export default connect(mapStateToProps, mapDispatchToProps)(DefaultComponent);
