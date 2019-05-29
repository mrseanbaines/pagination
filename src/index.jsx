import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { range } from './utils';
import { Wrapper, PageButton, DirectionArrow } from './styles';
import arrowLeft from './icons/chevron-left.svg';
import arrowRight from './icons/chevron-right.svg';

const ELLIPSIS = '\u2026';

class Pagination extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  }

  pages = () => {
    const { currentPage } = this.state;
    const { siblings, showEllipsis } = this.props;
    const { totalPages } = this;

    const minPages = siblings * 2 + (showEllipsis ? 2 : 1);
    const from = Math.max(1, Math.min(totalPages - minPages + 1, currentPage - siblings));
    const to = Math.min(totalPages, Math.max(minPages, currentPage + siblings));

    const result = range(from, to);

    if (showEllipsis && currentPage - siblings > 1) {
      result.unshift(ELLIPSIS);
    }

    if (showEllipsis && currentPage + siblings < totalPages) {
      result.push(ELLIPSIS);
    }

    return result;
  };

  goToPage = (pageNumber) => {
    const { onPageChange, itemsPerPage, totalItems } = this.props;
    const { totalPages } = this;

    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.setState({
        currentPage: pageNumber,
      });

      onPageChange({
        currentPage: pageNumber,
        totalPages,
        itemsPerPage,
        totalItems,
      });
    }
  };

  render = () => {
    const { currentPage } = this.state;
    const { totalPages } = this;

    return (
      <Wrapper>
        <PageButton disabled={currentPage === 1} onClick={() => this.goToPage(currentPage - 1)}>
          <DirectionArrow src={arrowLeft} alt="" />
        </PageButton>
        {this.pages().map((page) => {
          const active = currentPage === page;

          if (page === ELLIPSIS) {
            return <PageButton disabled>{page}</PageButton>;
          }

          return (
            <PageButton disabled={active} onClick={() => this.goToPage(page)}>
              {page}
            </PageButton>
          );
        })}
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => this.goToPage(currentPage + 1)}
        >
          <DirectionArrow src={arrowRight} alt="" />
        </PageButton>
      </Wrapper>
    );
  };
}

Pagination.defaultProps = {
  itemsPerPage: 25,
  siblings: 1,
  onPageChange: () => {},
  showEllipsis: false,
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  siblings: PropTypes.number,
  onPageChange: PropTypes.func,
  showEllipsis: PropTypes.bool,
};

export default Pagination;
