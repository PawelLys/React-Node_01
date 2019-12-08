import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import history from '../../../history';
import { setBurgerBtnActive, setWindowResize } from '../../actions';

import * as s from './styledHeaderLeft';

class HeaderLeft extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items')),
      idHoveredMenu: null,
      nameHoveredMenu: '',
      showBurgerNameHovered: false
    };

    this.nameArr = Object.keys(this.props.elements);
    this.iconsArr = Object.values(this.props.elements).map(el => el.icon);
    this.arrFromObj = Object.values(this.props.elements);
  }

  componentDidMount() {
    this.arrWithUrls = Object.values(this.props.elements).map(el => {
      return Object.values(el).map(el => {
        return Object.values(el);
      });
    });

    this.arrShouldLink = Object.values(this.props.elements).map(el => {
      if (el.hasOwnProperty('url')) return el.url;
    });

    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.updateSize);

  updateSize = () => this.props.setWindowResize(window.innerWidth < 684);

  onBurgerBtnClick = () => {
    this.props.setBurgerBtnActive(!this.props.burgerBtn);

    this.setState({
      navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items'))
    });
  };

  onNavArrowClick = id => {
    if (this.props.burgerBtn) {
      const navArrow = this.state.navArrow.map((el, index) => (id === index ? !el : el));

      this.setState({ navArrow });
    }
  };

  onIconContainerClick = event => {
    const id = event.currentTarget.id;

    this.onNavArrowClick(parseInt(id));

    if (this.arrShouldLink[id]) history.push(this.arrShouldLink[id]);
  };

  onIconContainerClickHover = event => {
    if (!this.props.burgerBtn) {
      const id = event === null ? null : parseInt(event.currentTarget.id);
      if (id !== null && this.arrFromObj[id].hasOwnProperty('items'))
        this.setState({ idHoveredMenu: id, nameHoveredMenu: '' });
      else if (id !== null && this.arrFromObj[id].hasOwnProperty('url'))
        this.setState({
          idHoveredMenu: null,
          nameHoveredMenu: this.nameArr[id]
        });
      else this.setState({ idHoveredMenu: null, nameHoveredMenu: '' });
    }
  };

  showDescription = () => this.setState({ showBurgerNameHovered: !this.state.showBurgerNameHovered });

  renderblueBar = (url, int = null) => {
    const { pathname } = this.props.location;
    let check = false;

    if (int !== null) {
      if (this.arrFromObj[int].hasOwnProperty('url')) {
        if (this.arrFromObj[int].url === pathname) check = true;
      } else if (this.arrFromObj[int].hasOwnProperty('items')) {
        if (!this.state.navArrow[int] && this.state.idHoveredMenu !== int)
          Object.values(this.arrFromObj[int].items).forEach(el =>
            el.url === pathname ? (check = true) : null
          );
      }
      return check;
    } else if (url) {
      if (url === pathname) return true;
    } else return false;
  };

  render() {
    const { burgerBtn, themeType, windowWidth } = this.props;

    return (
      <s.HeaderFixed openBurger={burgerBtn} displayFixed={windowWidth}>
        <s.NavBurger
          onClick={this.onBurgerBtnClick}
          openBurger={burgerBtn}
          onMouseEnter={this.showDescription}
          onMouseLeave={this.showDescription}
        >
          <s.Burger iconName="GlobalNavButton" />

          {!burgerBtn && this.state.showBurgerNameHovered && (
            <s.NestedNavTitle>Expand navigation menu</s.NestedNavTitle>
          )}

          {burgerBtn && this.state.showBurgerNameHovered && windowWidth && (
            <s.NestedNavTitleLong>Colapse navigation menu</s.NestedNavTitleLong>
          )}
        </s.NavBurger>

        <s.Nav show={burgerBtn} onMouseLeave={() => this.onIconContainerClickHover(null)}>
          {this.nameArr.map((title, index) => {
            return (
              <React.Fragment key={index}>
                <s.NavWrapper
                  id={index}
                  onClick={this.onIconContainerClick}
                  onMouseEnter={this.onIconContainerClickHover}
                  activeElement={this.renderblueBar(null, index)}
                  pseudoClassActive={this.state.idHoveredMenu === null}
                  themeType={themeType}
                  show={burgerBtn}
                >
                  <s.NavIcons iconName={this.iconsArr && this.iconsArr[index]} />

                  <s.NavTitle show={burgerBtn}>{title.replace('_', ' ')}</s.NavTitle>

                  {this.arrFromObj[index].items && (
                    <s.IconContainer show={burgerBtn}>
                      <s.ArrowIcon iconName="ChevronUpMed" rotate={this.state.navArrow[index]} />
                    </s.IconContainer>
                  )}

                  {!burgerBtn && this.state.idHoveredMenu === index && (
                    <s.NestedContainer
                      heightCalc={(Object.keys(this.arrFromObj[index].items).length + 1) * 42}
                    >
                      <s.NestedTitle>{title.replace('_', ' ')}</s.NestedTitle>

                      <s.NavUnderTitle>
                        {Object.keys(this.arrFromObj[index].items).map((item, num) => {
                          return (
                            <s.NestedUnderItems
                              key={num}
                              activeElement={this.renderblueBar(this.arrWithUrls[index][1][num].url)}
                              themeType={themeType}
                            >
                              <s.NestedItemsLink to={this.arrWithUrls[index][1][num].url}>
                                {item.replace('_', ' ')}
                              </s.NestedItemsLink>
                            </s.NestedUnderItems>
                          );
                        })}
                      </s.NavUnderTitle>
                    </s.NestedContainer>
                  )}

                  {!burgerBtn && this.state.nameHoveredMenu === this.nameArr[index] && (
                    <s.NestedNavTitle>{this.state.nameHoveredMenu.replace('_', ' ')}</s.NestedNavTitle>
                  )}
                </s.NavWrapper>

                {burgerBtn && this.state.navArrow[index] && this.arrFromObj[index].hasOwnProperty('items') && (
                  <s.NavUnderTitle show={this.props.burgerBtn.toString()}>
                    {Object.keys(this.arrFromObj[index].items).map((item, num) => {
                      return (
                        <s.UnderItems
                          key={num}
                          activeElement={this.renderblueBar(this.arrWithUrls[index][1][num].url)}
                          themeType={themeType}
                        >
                          <s.ItemsLink to={this.arrWithUrls[index][1][num].url}>
                            {item.replace('_', ' ')}
                          </s.ItemsLink>
                        </s.UnderItems>
                      );
                    })}
                  </s.NavUnderTitle>
                )}
              </React.Fragment>
            );
          })}
        </s.Nav>
      </s.HeaderFixed>
    );
  }
}

const mapStateToProps = ({ headerBtnActive, windowWidth, themeType }) => {
  return { burgerBtn: headerBtnActive.burgerBtn, windowWidth, themeType };
};

export default withRouter(connect(mapStateToProps, { setBurgerBtnActive, setWindowResize })(HeaderLeft));
