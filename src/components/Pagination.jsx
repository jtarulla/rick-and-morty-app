import React from 'react';

const Pagination = ({handlePage, info, loading}) => {
    const pageNumberIndex = info.next !== null ? info.next.search('page=') : 0;
    const justNumbers = /[^0-9+]/g;

    const getPageNumber = () => (
        info.next !== null
        ?   (
                info.next.slice(pageNumberIndex, pageNumberIndex+7)
                    .replace(justNumbers, '') - 1
            )
        : info.pages
    );

    return (
        <>
            {
                !loading &&
                    <div className="pagination">
                        <div className="pagination--counter">
                            Page {getPageNumber()} of {info.pages}<br />
                        </div> 
                        <div className="container">
                            <button
                                type="button"
                                onClick={() => handlePage(info.prev)}
                                disabled={!info.prev}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                id="next"
                                onClick={() => handlePage(info.next)}
                                disabled={!info.next}
                            >
                                Next
                            </button>
                        </div>
                    </div>
            }
        </>
    );
}

export default Pagination;

