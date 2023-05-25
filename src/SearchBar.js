import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchQuery = encodeURIComponent(searchTerm);
        const searchUrl = `https://www.google.com/search?q=${searchQuery}`;

        window.location.href = searchUrl;

        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">
                    <BiSearch />
                </button>
            </div>
            <div className="text-center">
                <a
                    href="https://www.google.com/search?q=No+Parking+Sign&oq=No+Parking+Sign&aqs=chrome..69i57j69i60l2.449j0j1&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-sign-no-parking-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.292 14A8 8 0 0 1 2 2.707l3.5 3.5V12h1.283V9.164h1.674L13.292 14Zm.708-.708-4.37-4.37C10.5 8.524 11 7.662 11 6.587c0-1.482-.955-2.584-2.538-2.584H5.5v.79L2.708 2.002A8 8 0 0 1 14 13.293Z" />
                        <path d="M6.777 7.485v.59h.59l-.59-.59Zm1.949.535L6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Z" />
                    </svg>
                </a>
                <a
                    href="https://www.google.com/search?q=EV+station+fill&oq=EV+station+fill&aqs=chrome..69i57j69i60.467j0j1&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ev-station-fill" viewBox="0 0 16 16">
                        <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V9c0-.258-.104-.377-.357-.635l-.007-.008C13.379 8.096 13 7.71 13 7V4a.5.5 0 0 1 .146-.354l.5-.5a.5.5 0 0 1 .708 0l.5.5A.5.5 0 0 1 15 4v8.5a1.5 1.5 0 1 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Zm2.631 9.96H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146v-.54Zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764L6.947 13Z" />
                    </svg>
                </a>
                <a
                    href="https://www.google.com/search?q=clima+de+hoy&oq=clima+de+hoy&aqs=chrome..69i57.5795j0j1&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16">
                        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                        <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
                    </svg>
                </a>
                <a
                    href="https://www.google.com/search?q=restaurantes+cerca+de+mi&sxsrf=APwXEdd22LaTfkQy9I4hvz-_mf_p4ZssLw%3A1685046324073&ei=NMRvZL2JBK_ykPIPy8iUsAk&oq=restaurantes+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgsIABCABBCxAxDJAzIICAAQigUQkgMyDggAEIAEELEDEIMBEJIDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMggIABCKBRCxAzIFCAAQgAQyCAgAEIoFELEDMggIABCKBRCxAzoHCCMQ6gIQJzoVCAAQAxCPARDqAhC0AhCMAxDlAhgBOhUILhADEI8BEOoCELQCEIwDEOUCGAE6BwgjEIoFECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToOCC4QgwEQ1AIQsQMQgAQ6DgguEIAEELEDEIMBENQCOgcILhCKBRBDOhAILhCKBRCxAxCDARDUAhBDOgoILhCKBRDUAhBDOgQIIxAnOgoIABCKBRDJAxBDOgcIABCKBRBDOhAIABCABBAUEIcCELEDEIMBOgoIABCKBRCxAxBDOggIABCABBDJAzoOCC4QgAQQsQMQxwEQrwE6EQguEIAEELEDEIMBEMcBEK8BSgQIQRgAUABYuxVgoSBoAXABeACAAY4BiAH3CZIBAzguNZgBAKABAbABFMABAdoBBggBEAEYCw&sclient=gws-wiz-serp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z" />
                        <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                    </svg>
                </a>
                <a
                    href="https://www.google.com/search?q=meatballs%2C+more%2C+ellipsis%2C+overflow%2C+menu&oq=meatballs%2C+more%2C+ellipsis%2C+overflow%2C+menu&aqs=chrome..69i57.519j0j1&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </a>




            </div>
        </form>
    );
};

export default SearchBar;
