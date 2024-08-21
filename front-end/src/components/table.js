import React from "react";


const Table = () => {
    return(
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 bg-gray-200">
    <table class="w-full text-sm text-left text-black dark:text-black">
        <thead class="text-xs text-white">
            <tr>
                <th scope="col" class="px-6 py-3 bg-orange-400">
                    Day
                </th>
                <th scope="col" className="px-6 text-white bg-black py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3 bg-orange-400">
                    Dance Category
                </th>
                <th scope="col" class="px-6 bg-black py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white bg-black">
                   Monday
                </th>
                <td class="px-6 py-4">
                    6:30PM - 8PM
                </td>
                <td class="px-6 py-4 text-white bg-black">
                    Beginner Level
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white dark:bg-black">
                    Tuesday
                </th>
                <td class="px-6 py-4">
                   6:30PM - 8PM
                </td>
                <td class="px-6 py-4 text-white bg-black">
                    Intermediate Level
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white bg-black">
                    Wednesday
                </th>
                <td class="px-6 py-4">
                    7:30PM - 8:30PM
                </td>
                <td class="px-6 py-4 text-white bg-black">
                    Salsa
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr class="border-b border-black border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-black">
                    Thursday
                </th>
                <td class="px-6 py-4">
                    6:30PM - 8PM
                </td>
                <td class="px-6 py-4 text-white bg-black">
                    Lundika Dance
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr className="border-b border-black border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white bg-black">
                    Friday
                </th>
                <td class="px-6 py-4">
                    6:30PM - 8PM
                </td>
                <td class="px-6 py-4 text-white bg-black">
                    Dance Party
                </td>
                <td class="px-6 py-4">
                    $15
                </td>
            </tr>
        </tbody>
    </table>
</div>

    );
}
export default Table;