import React, { PropTypes } from 'react';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
}

const defaultProps = {
    initialPage: 1
}

class PaginationStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 9
        pageSize = pageSize || 9;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 4) {
            // less than 4 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 4 total pages so calculate start and end pages
            if (currentPage <= 4) {
                startPage = 1;
                endPage = 4;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (

            <ul className="pagination">
                <div className="pagination-align">
                    {/*<li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a onClick={() => this.setPage(1)}>First</a>
                    </li>*/}
                    <li onClick={() => this.setPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'disabled' : ''}>
                        &laquo;
                    </li>
                    {pager.pages.map((page, index) =>
                        <li onClick={() => this.setPage(page)} key={index} className={pager.currentPage === page ? 'active' : ''}>
                            {page}
                        </li>
                    )}
                    <li onClick={() => this.setPage(pager.currentPage + 1)}  className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        &raquo;
                    </li>
                    {/*<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                    </li>*/}
                </div>
            </ul>
        );
    }
}

PaginationStudent.propTypes = propTypes;
PaginationStudent.defaultProps
export default PaginationStudent;
