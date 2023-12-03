export const Pagination = ({currentPage, totalPages, paginationRange, onChange}) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const visiblePages = pageNumbers.filter(
        (pageNumber) =>
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
    );

    return (
        <div>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button
                        disabled={currentPage <= 1 }
                        onClick={() => onChange(currentPage - 1)}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous
                    </button>
                </li>
                {visiblePages.map(e => {
                    if (e < 1 || e >= totalPages)
                        return
                    if (e == currentPage) {
                        return (
                            <li key={e}>
                                <button disabled
                                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{currentPage}</button>
                            </li>
                        )
                    }
                    return (
                        <li key={e}>
                            <button
                                onClick={() => onChange(e)}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{e}</button>
                        </li>
                    )
                })}
                <li>
                    <button disabled
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onChange(totalPages)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPages}</button>
                </li>
                <li>

                    <button
                        disabled={currentPage >= totalPages }
                        onClick={() => onChange(currentPage + 1)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next
                    </button>
                </li>
            </ul>
        </div>
    )
}