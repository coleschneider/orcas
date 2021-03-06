import * as React from 'react'; // modules
import { Route, RouteComponentProps, Switch } from 'react-router';
import ReactGA from 'react-ga';
import ErrorBoundary from 'Components/ErrorBoundary/ErrorBoundary';
import Footer from 'Components/Footer/Footer'; // relative imports
import Header from 'Components/Header/Header';
const MediaModal = React.lazy(() => import('./Components/MediaModal/MediaModal'));
import Notifications from 'Common/Notifications/Notifications';
import { Routes, ModalRoutes } from './Routes';
import 'stylesheets/main.scss'; // stylesheets
import NotFound from 'Components/NotFound/NotFound';
import Construction from 'Components/Construction/Construction';
ReactGA.initialize(process.env.GA_ID, {
  testMode: process.env.NODE_ENV !== 'production',
});
class App extends React.Component<RouteComponentProps> {
  previousLocation = this.props.location;
  state = {
    showScroller: false,
  };
  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location } = this.props;
    const { showScroller } = this.state;
    const isModal = !!(location.state && location.state.modal);
    return (
      <ErrorBoundary>
        <Header {...this.props} setHeaderScroll={(isGreater: boolean) => this.setState({ showScroller: isGreater })} />
        <Notifications />
        <Construction />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact={true} path="/" component={Routes} />
          <Route component={NotFound} />
        </Switch>
        {ModalRoutes}
        <Footer showScroller={showScroller} />
      </ErrorBoundary>
    );
  }
}

export default App;
