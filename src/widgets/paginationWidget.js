import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaginationWidget = () => {
    return (
        <nav
            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
        >
            <span class="text-sm font-normal">
                Showing <span class="font-semibold text-primary">1-10 </span>
                of <span class="font-semibold text-primary">1000</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <IoIosArrowBack className="text-lg text-sixth mr-2" />
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        1
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        aria-current="page"
                        class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        ...
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        100
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <IoIosArrowForward className="text-lg text-sixth mr-2" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationWidget;
