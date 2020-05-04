/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import ProductReviews from './ProductReviews.jsx';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      storeId: '',
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const productId = window.location.pathname.split('/')[2];
    this.setState({ productId });
    this.setState({ storeId: '59' });
  }

  render() {
    const { productId, storeId } = this.state;
    return <div className="container"><ProductReviews productId={productId} storeId={storeId} /></div>;
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
