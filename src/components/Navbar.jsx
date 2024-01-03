import React from 'react'
import Logo from './Logo'

const Navbar = () => {

    const navlink = "uppercase text-xs font-bold text-[#333]"
    return (
        <div className='bg-white flex md:flex-row py-5 pl-28 justify-around items-center transition-opacity duration-750'>
            <div>
                <Logo />
            </div>

            <div >
                <ul className='flex md:flex-row gap-5'>
                    <li className={navlink}>
                        Home
                    </li>
                    <li className={navlink}>
                        Courses
                    </li>
                    <li className={navlink}>
                        Shop
                    </li>
                    <li className={`${navlink}`}>
                        blogs
                    </li>
                </ul>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <button className='flex flex-row items-center gap-2 border-2 mx-2 text-xs text-purple-700 font-[600] uppercase border-purple-500 rounded-lg px-5 py-2'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M17.2583 16.4181L14.425 13.5931C15.3392 12.4285 15.8352 10.9904 15.8333 9.50981C15.8333 8.19127 15.4423 6.90234 14.7098 5.80601C13.9773 4.70968 12.9361 3.8552 11.7179 3.35061C10.4997 2.84603 9.15927 2.71401 7.86607 2.97124C6.57286 3.22848 5.38497 3.86341 4.45262 4.79576C3.52027 5.72811 2.88534 6.916 2.6281 8.20921C2.37087 9.50241 2.50289 10.8429 3.00747 12.061C3.51206 13.2792 4.36654 14.3204 5.46287 15.0529C6.5592 15.7855 7.84813 16.1765 9.16667 16.1765C10.6472 16.1783 12.0854 15.6823 13.25 14.7681L16.075 17.6015C16.1525 17.6796 16.2446 17.7416 16.3462 17.7839C16.4477 17.8262 16.5567 17.848 16.6667 17.848C16.7767 17.848 16.8856 17.8262 16.9872 17.7839C17.0887 17.7416 17.1809 17.6796 17.2583 17.6015C17.3364 17.524 17.3984 17.4318 17.4407 17.3303C17.4831 17.2287 17.5048 17.1198 17.5048 17.0098C17.5048 16.8998 17.4831 16.7909 17.4407 16.6893C17.3984 16.5878 17.3364 16.4956 17.2583 16.4181ZM4.16667 9.50981C4.16667 8.5209 4.45991 7.5542 5.00932 6.73196C5.55873 5.90971 6.33962 5.26885 7.25325 4.89041C8.16688 4.51197 9.17222 4.41296 10.1421 4.60588C11.112 4.79881 12.0029 5.27501 12.7022 5.97428C13.4015 6.67354 13.8777 7.56445 14.0706 8.53436C14.2635 9.50426 14.1645 10.5096 13.7861 11.4232C13.4076 12.3369 12.7668 13.1178 11.9445 13.6672C11.1223 14.2166 10.1556 14.5098 9.16667 14.5098C7.84059 14.5098 6.56882 13.983 5.63114 13.0453C4.69345 12.1077 4.16667 10.8359 4.16667 9.50981Z" fill="#8708C2" />
                </svg>Search for course</button>
                <button className='bg-[#F5E1FF] flex flex-row items-center font-[600] border-2 border-transparent gap-2 text-[#8708C2] text-xs rounded-lg px-5 py-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M15.8042 11.0024C17.1961 11.0067 18.3247 12.1552 18.3332 13.5762V16.0947C18.3247 17.517 17.1974 18.6678 15.8042 18.6765H13.337C11.9451 18.6678 10.82 17.5157 10.8158 16.0947V13.5762C10.8158 12.1547 11.9446 11.0024 13.337 11.0024H15.8042ZM5.20865 11.0024C5.4677 10.9741 5.71984 11.0992 5.85804 11.3247C5.99624 11.5501 5.99624 11.8363 5.85804 12.0618C5.71984 12.2872 5.4677 12.4123 5.20865 12.384H4.19551C3.54927 12.384 3.0242 12.9165 3.01995 13.5762V16.0632C3.03638 16.7176 3.55437 17.2429 4.19551 17.2553H6.6781C6.98917 17.2575 7.2882 17.1328 7.50889 16.909C7.72957 16.6852 7.85367 16.3807 7.85367 16.0632V12.3288L7.84311 12.2359C7.83144 11.9888 7.94995 11.7508 8.15849 11.6159C8.39311 11.464 8.69458 11.4729 8.92016 11.6385C9.14574 11.804 9.25013 12.0928 9.18391 12.3682V16.0869C9.18391 17.5127 8.05163 18.6686 6.6549 18.6686H4.19551C2.81085 18.6393 1.69523 17.5004 1.6665 16.0869V13.5762C1.6665 12.8922 1.93319 12.2364 2.4077 11.7534C2.8822 11.2705 3.52549 11.0003 4.19551 11.0024H5.20865ZM15.8042 12.384H13.337C12.6921 12.384 12.1692 12.9178 12.1692 13.5762V16.0947C12.1671 16.4116 12.2895 16.716 12.509 16.9401C12.7284 17.1641 13.0267 17.289 13.337 17.2869H15.8042C16.1145 17.289 16.4128 17.1641 16.6322 16.9401C16.8517 16.716 16.9741 16.4116 16.972 16.0947V13.5762C16.972 13.26 16.849 12.9568 16.6299 12.7332C16.4109 12.5096 16.1139 12.384 15.8042 12.384ZM15.8042 2.0098C17.1858 2.04329 18.2969 3.18098 18.3254 4.59151V7.10217C18.3337 7.7848 18.0759 8.44282 17.6089 8.93144C17.1419 9.42006 16.5038 9.69925 15.8351 9.70757H14.8142C14.4684 9.66977 14.2061 9.37183 14.2061 9.01674C14.2061 8.66166 14.4684 8.36372 14.8142 8.32592H15.8042C16.1173 8.32384 16.4167 8.19432 16.6359 7.96607C16.8552 7.73781 16.9761 7.4297 16.972 7.11006V4.59151C16.9637 3.93665 16.4457 3.40785 15.8042 3.39934H13.337C12.6921 3.39934 12.1692 3.93309 12.1692 4.59151V8.3575L12.1611 8.4441C12.1087 8.78397 11.8186 9.04064 11.4732 9.03648C11.2933 9.03237 11.1226 8.95491 10.999 8.8214C10.8755 8.68789 10.8095 8.50945 10.8158 8.32592V4.59151C10.8137 3.90752 11.0784 3.25083 11.5515 2.76644C12.0245 2.28205 12.667 2.0098 13.337 2.0098H15.8042ZM6.66264 2.0098C8.0576 2.01413 9.18739 3.16747 9.19164 4.59151V7.11006C9.19164 7.79405 8.92495 8.44991 8.45044 8.93283C7.97594 9.41574 7.33266 9.68598 6.66264 9.6839H4.19551C2.80354 9.67958 1.67499 8.53102 1.6665 7.11006V4.59151C1.67495 3.16926 2.80229 2.01842 4.19551 2.0098H6.66264ZM6.66264 3.39934H4.19551C3.88178 3.39298 3.57874 3.51577 3.35469 3.74004C3.13063 3.9643 3.00442 4.27118 3.00448 4.59151V7.11006C2.9981 7.43448 3.12153 7.74754 3.34629 7.97698C3.57105 8.20642 3.87771 8.33243 4.19551 8.32592H6.66264C6.97577 8.32384 7.27515 8.19432 7.49439 7.96607C7.71362 7.73781 7.83459 7.4297 7.83046 7.11006V4.59151C7.82625 3.93489 7.30585 3.40365 6.66264 3.39934Z" fill="#8708C2" />
                </svg>  Categories</button>
                <button className='bg-[#FAEFFF] rounded-lg p-2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clip-path="url(#clip0_241_257)">
                        <path d="M18.8919 16.6903H10.2862C9.50307 16.6848 8.74455 16.4165 8.13263 15.9288C7.52071 15.441 7.09097 14.762 6.91251 14.001L5.54108 8.43746C5.4149 7.92087 5.40844 7.38237 5.52217 6.86291C5.6359 6.34345 5.86683 5.85672 6.1974 5.43973C6.52798 5.02273 6.94949 4.68646 7.42987 4.45649C7.91025 4.22651 8.43686 4.10889 8.96965 4.11257H20.2839C20.8167 4.10889 21.3433 4.22651 21.8237 4.45649C22.3041 4.68646 22.7256 5.02273 23.0562 5.43973C23.3868 5.85672 23.6177 6.34345 23.7314 6.86291C23.8451 7.38237 23.8387 7.92087 23.7125 8.43746L22.3411 14.0146C22.1559 14.7851 21.7135 15.4698 21.0867 15.9561C20.4598 16.4424 19.6858 16.7013 18.8919 16.6903ZM8.92851 5.82336C8.65747 5.82419 8.39012 5.88621 8.14651 6.00477C7.90289 6.12333 7.68931 6.29537 7.52177 6.50799C7.35422 6.72061 7.23706 6.96831 7.17905 7.23253C7.12104 7.49676 7.12369 7.77065 7.18679 8.03371L8.55822 13.6109C8.6511 14.0017 8.87378 14.3497 9.19001 14.5982C9.50625 14.8467 9.89744 14.9811 10.2999 14.9795H18.8919C19.2944 14.9811 19.6856 14.8467 20.0019 14.5982C20.3181 14.3497 20.5408 14.0017 20.6337 13.6109L22.0051 8.03371C22.0696 7.77054 22.0732 7.49618 22.0158 7.2314C21.9583 6.96661 21.8412 6.71834 21.6734 6.50538C21.5056 6.29242 21.2915 6.12035 21.0472 6.00219C20.8029 5.88403 20.5348 5.82288 20.2634 5.82336H8.92851Z" fill="#333333" />
                        <path d="M6.54208 9.89504C6.34625 9.89273 6.15712 9.82357 6.00616 9.69907C5.8552 9.57456 5.75152 9.40222 5.71236 9.21072L4.48493 3.89358C4.37159 3.40921 4.09688 2.97757 3.70574 2.66927C3.31461 2.36098 2.8302 2.19429 2.33179 2.19647H1.21408C0.986748 2.19647 0.76873 2.10635 0.607985 1.94593C0.447239 1.78552 0.356934 1.56794 0.356934 1.34108C0.356934 1.11421 0.447239 0.896638 0.607985 0.73622C0.76873 0.575802 0.986748 0.485681 1.21408 0.485681H2.33179C3.2176 0.482592 4.07828 0.77935 4.77325 1.32748C5.46822 1.87562 5.95641 2.64273 6.15808 3.50352L7.37865 8.82066C7.40507 8.92988 7.40949 9.04325 7.39165 9.15419C7.37382 9.26512 7.33409 9.37142 7.27476 9.46691C7.21544 9.5624 7.1377 9.64519 7.04606 9.71046C6.95442 9.77573 6.85071 9.82219 6.74093 9.84714C6.6765 9.86998 6.60985 9.88604 6.54208 9.89504ZM10.4164 24.0946C9.87388 24.0946 9.34357 23.9341 8.89251 23.6333C8.44145 23.3325 8.08989 22.905 7.88229 22.4049C7.67469 21.9047 7.62038 21.3543 7.72621 20.8233C7.83204 20.2924 8.09327 19.8046 8.47687 19.4218C8.86047 19.039 9.3492 18.7783 9.88126 18.6727C10.4133 18.5671 10.9648 18.6213 11.466 18.8284C11.9672 19.0356 12.3956 19.3865 12.697 19.8366C12.9984 20.2868 13.1592 20.816 13.1592 21.3574C13.1592 22.0833 12.8702 22.7796 12.3559 23.2929C11.8415 23.8062 11.1438 24.0946 10.4164 24.0946ZM10.4164 20.3035C10.2102 20.3035 10.0087 20.3645 9.8373 20.4788C9.6659 20.5931 9.5323 20.7556 9.45342 20.9456C9.37453 21.1357 9.35389 21.3448 9.3941 21.5466C9.43432 21.7484 9.53359 21.9337 9.67935 22.0792C9.82512 22.2246 10.0108 22.3237 10.213 22.3638C10.4152 22.404 10.6248 22.3834 10.8152 22.3047C11.0057 22.2259 11.1685 22.0926 11.283 21.9216C11.3975 21.7505 11.4586 21.5494 11.4586 21.3437C11.4586 21.0678 11.3488 20.8032 11.1534 20.6082C10.9579 20.4131 10.6928 20.3035 10.4164 20.3035ZM19.8929 24.0946C19.3504 24.0946 18.8201 23.9341 18.3691 23.6333C17.918 23.3325 17.5665 22.905 17.3589 22.4049C17.1513 21.9047 17.0969 21.3543 17.2028 20.8233C17.3086 20.2924 17.5698 19.8046 17.9534 19.4218C18.337 19.039 18.8258 18.7783 19.3578 18.6727C19.8899 18.5671 20.4414 18.6213 20.9426 18.8284C21.4438 19.0356 21.8721 19.3865 22.1735 19.8366C22.4749 20.2868 22.6358 20.816 22.6358 21.3574C22.6358 22.0833 22.3468 22.7796 21.8324 23.2929C21.318 23.8062 20.6204 24.0946 19.8929 24.0946ZM19.8929 20.3035C19.6871 20.3049 19.4862 20.367 19.3158 20.4821C19.1453 20.5972 19.0127 20.7602 18.9349 20.9503C18.8571 21.1405 18.8374 21.3494 18.8784 21.5508C18.9194 21.7521 19.0192 21.9368 19.1652 22.0816C19.3112 22.2263 19.497 22.3247 19.699 22.3643C19.901 22.4039 20.1102 22.3829 20.3002 22.304C20.4903 22.2251 20.6527 22.0917 20.7669 21.9208C20.8811 21.7499 20.9421 21.5491 20.9421 21.3437C20.9421 21.2065 20.9149 21.0707 20.8621 20.944C20.8093 20.8174 20.7319 20.7024 20.6344 20.6057C20.5369 20.5091 20.4212 20.4326 20.2939 20.3807C20.1667 20.3288 20.0304 20.3026 19.8929 20.3035Z" fill="#333333" />
                        <path d="M19.8927 20.3035H8.4687C7.76125 20.3035 7.08278 20.0231 6.58254 19.5238C6.0823 19.0246 5.80127 18.3475 5.80127 17.6415C5.80127 16.9355 6.0823 16.2584 6.58254 15.7592C7.08278 15.26 7.76125 14.9795 8.4687 14.9795H10.2858C10.5132 14.9795 10.7312 15.0696 10.8919 15.2301C11.0527 15.3905 11.143 15.6081 11.143 15.8349C11.143 16.0618 11.0527 16.2794 10.8919 16.4398C10.7312 16.6002 10.5132 16.6903 10.2858 16.6903H8.4687C8.21591 16.6903 7.97347 16.7905 7.79472 16.9689C7.61598 17.1473 7.51556 17.3892 7.51556 17.6415C7.51556 17.8938 7.61598 18.1357 7.79472 18.3141C7.97347 18.4925 8.21591 18.5927 8.4687 18.5927H19.8927C20.12 18.5927 20.338 18.6828 20.4988 18.8433C20.6595 19.0037 20.7498 19.2212 20.7498 19.4481C20.7498 19.675 20.6595 19.8926 20.4988 20.053C20.338 20.2134 20.12 20.3035 19.8927 20.3035Z" fill="#333333" />
                    </g>
                    <defs>
                        <clipPath id="clip0_241_257">
                            <rect width="24" height="23.9511" fill="white" transform="translate(0.0551758 0.314606)" />
                        </clipPath>
                    </defs>
                </svg></button>
                <button className='bg-[#8708C2] text-sm uppercase text-white px-5 py-2 rounded-[11px]'>Login</button>
            </div>
        </div>
    )
}

export default Navbar