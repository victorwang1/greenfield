import React from 'react';
import SendRequest from './SendRequestView.jsx';
import SitterInfoViewReview from './SitterInfoViewReview.jsx'

class SittersInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeView();
  }

  render() {
    return (
      <div>
        <div className="sitter-info">
          <div className="container">
            <div className="row">
              <div onClick={this.handleClick} className="col-lg-12">
                <h3>Sitter Infomation</h3>
                <div className="row">
                  <div className="col-lg-9">
                    Name: {this.props.data.name}
                  </div>
                  <div className="col-lg-3">
                    Rate: $50/Day
                  </div>
                </div>
                <div className='row'>
                  <div className="col-lg-6">
                    ZIP Code: {this.props.data.zipcode}
                  </div>
                  <div className="col-lg-3">
                    V Boarding
                  </div>
                  <div className="col-lg-3">
                    V Coming in
                  </div>
                </div>
                <div>description: {this.props.data.description}</div>
                <div className="sitter-info-picture">
                  <div className='row'>
                    <div className="col-lg-4">
                      <img className="media-object" height="120" width="160" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
                    </div>
                    <div className="col-lg-4">
                      <img className="media-object" height="120" width="160" src="https://assets3.thrillist.com/v1/image/2642224/size/tmg-article_tall.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                      <img className="media-object" height="120" width="160" src="https://assets3.thrillist.com/v1/image/2642231/size/tmg-article_tall.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  Review:
                </div>
                <div className="sitter-info-reviewbox">
                  <div>
                    <SitterInfoViewReview />
                    <SitterInfoViewReview />
                    <SitterInfoViewReview />
                    <SitterInfoViewReview />
                    <SitterInfoViewReview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
          </div>
          <div className="col-lg-4">
            <SendRequest data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
};

export default SittersInfo;