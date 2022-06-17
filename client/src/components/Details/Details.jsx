import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IconDiv, Main } from "./styled";
import { Carousel } from "react-responsive-carousel";

const carouselSettings = {
    autoPlay: true,
    dynamicHeight: false,
    emulateTouch: true,
    showStatus: false,
    infiniteLoop: true,
    stopOnHover: false,
    showThumbs: false,
    interval: 2000,
    showIndicators: false,
    showArrows: false,
};

function details() {
    return (
        <Main>
            <div>
                <h1 className="heading">22043 Columbus Avenue</h1>
                <p className="rent">RENT</p>
                <p className="price">$1,200</p>

                <Carousel {...carouselSettings} style={{ userSelect: "none" }}>
                    <div>
                        <img
                            src="https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_938,h_733,q_90/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.webp"
                            alt="house1"
                        />
                    </div>
                    <div>
                        <img
                            src="https://static.wixstatic.com/media/84770f_ca6a1aafafa04284a052e09b53a0fce9~mv2_d_3456_2304_s_2.jpeg/v1/fill/w_938,h_733,q_90/84770f_ca6a1aafafa04284a052e09b53a0fce9~mv2_d_3456_2304_s_2.jpeg"
                            alt="house2"
                        />
                    </div>
                    <div>
                        <img
                            src="https://static.wixstatic.com/media/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg/v1/fill/w_938,h_733,q_90/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg"
                            alt="house3"
                        />
                    </div>
                </Carousel>
            </div>
            <div className="desc">
                <h2 className="sub-title">Property Description</h2>
                <p className="para">
                    This item is connected to a text field in your database.
                    Double click the dataset icon to add your own content. Want
                    to view and manage all your collections? Click the Data icon
                    on the add panel to your left. In the Data Manager you can
                    update your items, add new fields, create dynamic pages and
                    more.
                </p>
            </div>
            <div className="icons-wrapper">
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="28.153 28.153 143.693 143.693"
                        viewBox="28.153 28.153 143.693 143.693"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M28.153 28.153v143.693h143.693V28.153H28.153zm135.694 8v44.339H36.153V36.153h127.694zM36.153 163.847V88.492h127.693v75.354H36.153z"
                                fill={"#B2BECF"}
                                data-color="1"
                            ></path>
                            <path
                                d="M96.246 41.723H43.661v31.262h52.585V41.723zm-8 23.261H51.661V49.723h36.585v15.261z"
                                fill={"#B2BECF"}
                                data-color="1"
                            ></path>
                            <path
                                d="M156.339 41.723h-52.585v31.262h52.585V41.723zm-8 23.261h-36.585V49.723h36.585v15.261z"
                                fill={"#B2BECF"}
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Bedrooms</p>
                    <strong>4</strong>
                </IconDiv>
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="28.932 28.931 143.122 142.137"
                        viewBox="28.932 28.931 143.122 142.137"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M47.107 111.33l11.498 51.738H36.932V36.932h18.14l4.775 12.734 7.49-2.809-6.723-17.926H28.932v142.137H158.78l13.274-59.738H47.107zm105.255 51.738H66.801L57.08 119.33h105.002l-9.72 43.738z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Bathrooms</p>
                    <strong>2</strong>
                </IconDiv>
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="30.57 30.57 138.86 138.86"
                        viewBox="30.57 30.57 138.86 138.86"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M30.57 30.57v138.86h138.86V30.57H30.57zm130.86 130.86H38.57V38.57h122.86v122.86z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                            <path
                                d="M87.175 112.825h-41.65v41.649h41.649v-41.649zm-8 33.65h-25.65v-25.649h25.649v25.649z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Sqft</p>
                    <strong>1234</strong>
                </IconDiv>
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="34.57 31.149 130.859 137.702"
                        viewBox="34.57 31.149 130.859 137.702"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                fill="#B2BECF"
                                d="M165.429 160.851v8H34.57v-8h130.859z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M165.429 96v8H34.57v-8h130.859z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M165.429 31.149v8H34.57v-8h130.859z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M99.663 52.766v8H46.557v-8h53.106z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M119.685 74.383v8H66.579v-8h53.106z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M157.872 117.617v8h-53.106v-8h53.106z"
                                data-color="1"
                            ></path>
                            <path
                                fill="#B2BECF"
                                d="M133.106 139.234v8H80v-8h53.106z"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Levels</p>
                    <strong>3</strong>
                </IconDiv>
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="30.439 30.57 138.859 138.86"
                        viewBox="30.439 30.57 138.859 138.86"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M30.439 30.57v138.86h138.859V30.57H30.439zm130.859 8v37.907h-18.755V53.198h-28.811v23.279H86.246V53.198H57.435v23.279H38.439V38.57h122.859zm-26.755 84.508h-12.811v-15.386h12.811v15.386zm-20.81-23.386v23.386H86.246V99.692H57.435v23.386H38.439v-38.6h122.859v38.601h-18.755V99.692h-28.81zm-35.487 23.386H65.435v-15.386h12.811v15.386zm0-46.6H65.435v-15.28h12.811v15.28zm56.297 0h-12.811v-15.28h12.811v15.28zM38.439 161.43v-30.352h122.859v30.352H38.439z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Built Year</p>
                    <strong>2023</strong>
                </IconDiv>
                <IconDiv>
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="50.836 31.854 98.328 126.783"
                        viewBox="50.836 31.854 98.328 126.783"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M100 31.854c-27.109 0-49.164 22.055-49.164 49.164 0 26.254 44.393 72.663 46.282 74.626l2.882 2.993 2.882-2.993c1.89-1.963 46.282-48.372 46.282-74.626 0-27.109-22.055-49.164-49.164-49.164zm0 115.181c-13.717-14.854-41.164-48.246-41.164-66.017 0-22.698 18.466-41.164 41.164-41.164s41.164 18.466 41.164 41.164c0 17.771-27.447 51.164-41.164 66.017z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                            <path
                                d="M100 62.648c-10.129 0-18.37 8.241-18.37 18.37s8.241 18.37 18.37 18.37 18.37-8.241 18.37-18.37-8.241-18.37-18.37-18.37zm0 28.741c-5.718 0-10.37-4.652-10.37-10.37s4.652-10.37 10.37-10.37 10.37 4.652 10.37 10.37-4.652 10.37-10.37 10.37z"
                                fill="#B2BECF"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                    <p>Main Location</p>
                    <strong>San Francisco, CA, USA</strong>
                </IconDiv>
            </div>
            <div>
                <h2 className="sub-title">Contact Agent</h2>
                <p className="contact-details">Email: info@mysite.com</p>
                <p className="contact-details">Phone: 123-456-7890</p>
            </div>
        </Main>
    );
}

export default details;
