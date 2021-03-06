import { FC } from "react";
import { connect } from "react-redux";
import { AppSlice } from "../slices/appSlice";
import { RootState } from "../store";
import labels from "../utils/labels";

type StateProps = {
  app: AppSlice;
};

type LabelProps = {
  labelKey?: string;
  className?: string;
};

type Props = StateProps & LabelProps;

const Label: FC<Props> = ({ app, labelKey, className }) => {
  return (
    <>
      <span className={`${className ?? ""}`}>
        {labels(labelKey, app.language)}
      </span>
    </>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps)(Label);
