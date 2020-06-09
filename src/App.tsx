import React, { ChangeEvent, Component, Dispatch } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import * as actions from "./store/actions/experimentsActions";
import ExperimentDetails from "./pages/experimentDetails/ExperimentDetails";
import { Input } from "antd";
import { getSearchQuery } from "./store/selectors";
import Experiments from "./pages/experiments/Experiments";
import { Link, RouteComponentProps } from "react-router-dom";
import { ActionsType, SystemsPropsType, IActionWithoutPayload } from "./types";
import { StoreType } from "./index";

const { Search } = Input;

interface IAppProps {
  searchQuery: string;
}
interface IAppActionProps {
  fetchAllExperiments: () => IActionWithoutPayload | void;
  updateSearch: (query: string) => ActionsType | void;
  clearCurrentExperiment: () => IActionWithoutPayload | void;
}
type PropsType = IAppProps & IAppActionProps & RouteComponentProps;

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.fetchAllExperiments();
  }

  handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    this.props.updateSearch(value);
  };

  handleGoBackClick = () => {
    this.props.clearCurrentExperiment();
  };

  render() {
    return (
      <div className={style["App"]}>
        <header className="App-header">
          <div className="header-details">
            <div>Experiments</div>
            {this.props.location.pathname === "/" && (
              <div className="search-item-wrapper">
                <Search
                  placeholder="search by Id"
                  onChange={this.handleOnSearchChange}
                  value={this.props.searchQuery}
                />
              </div>
            )}
            {this.props.location.pathname !== "/" && (
              <Link
                to={"/"}
                className="details-btn"
                onClick={this.handleGoBackClick}
              >
                {`Go Back`}
              </Link>
            )}
          </div>
        </header>
        <PageLayout>
          <Switch>
            <Route
              path="/"
              exact
              component={(props: RouteComponentProps) => (
                <Experiments itemsPerPage={20} {...props} />
              )}
            />
            <Route
              path="/:experimentId"
              exact
              component={(props: SystemsPropsType) => (
                <ExperimentDetails {...props} />
              )}
            />
          </Switch>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreType) => {
  return {
    searchQuery: getSearchQuery(state),
  };
};

function mapDispatchToProps(
  dispatch: Dispatch<ActionsType | IActionWithoutPayload>
): IAppActionProps {
  return {
    fetchAllExperiments: () => dispatch(actions.fetchAllExperiments()),
    updateSearch: (query: string) => dispatch(actions.updateSearch(query)),
    clearCurrentExperiment: () => dispatch(actions.clearCurrentExperiment()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
