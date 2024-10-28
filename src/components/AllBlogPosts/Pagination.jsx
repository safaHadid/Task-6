const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-between mt-5 px-5">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-7 mr-2"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8334 10.4998H4.16669M4.16669 10.4998L10 16.3332M4.16669 10.4998L10 4.6665"
            className="stroke-[#1A1A1A] dark:stroke-white"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div className="">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          if (pageNumber > currentPage - 2 && pageNumber < currentPage + 2) {
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="px-5 mr-2"
              >
                {pageNumber}
              </button>
            );
          }
          if (pageNumber === 1 || pageNumber === totalPages) {
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="px-5 text mr-2"
              >
                {pageNumber}
              </button>
            );
          }
          if (
            pageNumber === currentPage - 3 ||
            pageNumber === currentPage + 3
          ) {
            return (
              <div
                key={pageNumber}
                className="mx-2 flex items-center justify-center"
              >
                ...
              </div>
            );
          }
          return null;
        })}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-7 mr-2"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16666 10.4998H15.8333M15.8333 10.4998L9.99999 4.6665M15.8333 10.4998L9.99999 16.3332"
            className="stroke-[#1A1A1A] dark:stroke-white"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        
      </button>
    </div>
  );
};

export default Pagination;
