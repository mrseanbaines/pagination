import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { range, limit } from './utils';
import { Wrapper, PageButton, DirectionArrow } from './styles';
import arrowLeft from './icons/chevron-left.svg';
import arrowRight from './icons/chevron-right.svg';

class Pagination extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.totalPages = this.setTotalPages();
  }

  componentDidUpdate = (prevProps) => {
    const { totalItems, itemsPerPage } = this.props;

    if (prevProps.totalItems !== totalItems || prevProps.itemsPerPage !== itemsPerPage) {
      this.totalPages = this.setTotalPages();
    }
  };

  setTotalPages = () => {
    const { totalItems, itemsPerPage } = this.props;

    return Math.ceil(totalItems / itemsPerPage);
  };

  pages = () => {
    const { currentPage } = this.state;
    const { pageSiblings } = this.props;
    const { totalPages } = this;

    const totalBlocks = pageSiblings * 2 + 1;

    const lower = limit(1, totalPages - totalBlocks + 1);
    const upper = limit(totalBlocks, totalPages);

    const startPage = lower(currentPage - pageSiblings);
    const endPage = upper(currentPage + pageSiblings);

    return range(startPage, endPage);
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

          return (
            <PageButton key={page} disabled={active} onClick={() => this.goToPage(page)}>
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
  pageSiblings: 0,
  onPageChange: () => {},
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  pageSiblings: PropTypes.oneOf([0, 1, 2]),
  onPageChange: PropTypes.func,
};

export default Pagination;
