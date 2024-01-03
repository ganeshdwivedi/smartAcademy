import React from 'react'

const RobotSvg = ({ className }) => {
    return (
        <div className={`absolute ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="146" viewBox="0 0 133 146" fill="none">
                <path d="M17.261 57.2576L10.9615 59.7061C10.2613 59.9783 9.52218 59.4099 9.60541 58.6633L9.90533 55.9729C9.9216 55.8269 9.96772 55.6898 10.0445 55.5645C13.1666 50.469 19.2398 40.4829 19.44 39.8548C19.5721 39.4399 20.4857 37.2854 21.1846 35.7519C21.5058 35.0472 22.2458 35.1249 22.4653 35.8676L22.6303 36.4253C22.8112 37.0372 23.511 37.3254 24.0703 37.0184L24.3513 36.8642C25.0831 36.4626 25.9558 37.0814 25.8189 37.9048L25.134 42.0251C24.973 42.9942 26.1597 43.5903 26.841 42.8826L31.1194 38.4377C31.3736 38.1736 31.752 38.0698 32.1054 38.1671L33.7258 38.6135C34.102 38.7172 34.5042 38.5924 34.7558 38.2941L39.2688 32.9426C39.8048 32.307 40.8372 32.565 41.0111 33.3781L41.8972 37.5209C42.0127 38.0609 42.5442 38.4051 43.0842 38.2896L48.5155 37.1279C48.6309 37.1032 48.7497 37.0992 48.8665 37.1159L52.1479 37.5859C52.5626 37.6453 52.8964 37.957 52.984 38.3667L53.0406 38.6315C53.1042 38.9286 53.2993 39.1807 53.571 39.3166L54.7148 39.8891C54.849 39.9563 54.9664 40.0528 55.0583 40.1716L56.3582 41.8526C56.5564 42.1089 56.8665 42.2533 57.1902 42.2401L58.6773 42.1792C59.4323 42.1482 59.9475 42.9337 59.6184 43.6139L43.3066 77.3241C43.0425 77.8699 42.3574 78.057 41.8526 77.7212L22.808 65.0541C22.6552 64.9524 22.4773 64.8948 22.2939 64.8875L19.0445 64.7583C18.4697 64.7355 18.0327 64.2335 18.0891 63.6611L18.6185 58.2878C18.6916 57.5457 17.9561 56.9875 17.261 57.2576Z" fill="#EDD4F9" fill-opacity="0.5" />
                <g opacity="0.4">
                    <path d="M95.4008 88.9725C95.9981 89.2058 95.8302 89.5065 95.457 89.8384L90.3363 94.376C89.8482 94.7298 89.3986 95.134 88.9951 95.5818C88.8319 95.8086 89.0357 96.301 89.1167 97.0386C91.5024 94.7503 94.2334 92.8513 97.2085 91.4119C98.9026 93.0889 100.548 94.7219 102.326 96.4786C102.866 96.1079 103.453 95.6996 104.046 95.3061C104.713 94.8417 105.515 94.6117 106.325 94.6524C107.135 94.693 107.908 95.002 108.521 95.5306C109.865 96.7245 110.207 98.265 109.089 99.8519C108.011 101.29 106.793 102.617 105.452 103.815C104.003 105.19 102.477 106.481 100.881 107.682C99.9402 108.428 98.8807 109.011 97.7471 109.405C95.5644 110.089 93.6713 108.515 93.9112 106.226C94.0346 105.082 94.6028 103.981 94.9992 102.803L93.6423 103.256C93.9795 101.749 95.2026 101.416 95.9677 100.679C96.7327 99.9433 97.6215 99.3052 98.4573 98.6332L101.26 96.3795C99.6246 94.9741 98.083 93.6459 96.4318 92.2211C94.695 94.4713 91.7619 95.2176 90.3129 97.5869C90.8747 99.4479 92.906 100.319 92.9842 102.326C89.9983 99.7512 88.0528 96.3203 85.486 93.4145C82.9192 90.5086 80.6199 87.4259 78.1339 84.334C75.1708 86.5317 72.1345 88.8136 69.0446 91.0686C65.9547 93.3236 63.3323 96.152 59.8294 97.9171C55.9895 94.3593 53.2622 90.0278 49.7364 86.1601L43.3965 90.837C42.7781 90.1873 42.159 89.6084 41.6293 88.9575C38.9473 85.6218 36.2622 82.2823 33.5803 78.9466C33.0451 78.281 32.4392 77.6786 31.6979 76.8602C33.119 74.6472 35.4719 73.4181 37.7128 72.1451C38.269 72.9722 38.7272 73.7571 39.2802 74.4529C41.6822 77.504 44.1192 80.5269 46.5219 83.5711C47.1442 84.345 47.6887 85.1815 48.2682 85.9898C48.8226 85.9709 49.2215 85.7903 48.971 85.1444C48.8221 84.8458 48.6309 84.5704 48.4032 84.3267C45.2918 80.457 42.2054 76.6182 38.9789 72.6053C39.2777 72.2495 39.6022 71.9161 39.95 71.6079C44.6905 67.8474 49.4871 64.1566 54.184 60.3419C58.161 57.1443 61.9918 53.7649 65.9011 50.4751C67.5805 49.0611 69.0219 47.2715 71.3711 46.8736C71.5151 46.8603 71.6598 46.8568 71.8042 46.863L92.7061 72.8598L86.8748 77.5483C87.1031 77.9673 87.3561 78.3724 87.6325 78.7613C89.9372 81.5402 92.2877 84.2886 94.5574 87.0957C94.9775 87.6181 95.1091 88.3787 95.3736 89.0262C92.3396 85.7144 89.3114 82.415 86.2888 79.1281L79.7071 84.4199C80.9712 86.621 86.9488 93.8885 88.2002 94.7364L95.4008 88.9725ZM59.8969 96.9263L75.5748 84.8689L91.4083 72.7183L89.4076 70.23C83.7886 63.2413 78.1716 56.2552 72.5567 49.2716C72.0371 48.6254 71.4328 48.0409 70.9085 47.4685C69.4709 48.7454 68.2432 49.8854 66.972 50.9712C63.0852 54.281 59.242 57.645 55.2744 60.8542C50.7881 64.4931 46.1813 67.974 41.639 71.5433C41.2273 71.9323 40.8458 72.352 40.4977 72.7986L59.8969 96.9263ZM101.356 98.7361L101.282 98.6433C100.547 99.234 99.7811 99.786 99.0852 100.409C97.6142 101.764 96.0778 103.101 95.2111 104.977C94.9402 105.445 94.8285 105.987 94.893 106.523C94.9575 107.058 95.1946 107.557 95.5686 107.945C96.2531 108.669 97.1155 108.715 98.3371 108.108C98.6462 107.973 98.9394 107.804 99.211 107.603C101.924 105.333 104.646 103.074 107.314 100.757C107.784 100.276 108.16 99.7125 108.423 99.0945C108.585 98.8186 108.685 98.511 108.716 98.1932C108.747 97.8754 108.708 97.555 108.603 97.2542C108.498 96.9534 108.328 96.6794 108.105 96.4513C107.883 96.2232 107.613 96.0463 107.315 95.9332C106.903 95.7036 106.433 95.5964 105.961 95.6239C105.489 95.6515 105.034 95.8126 104.649 96.0886C103.524 96.9422 102.453 97.8547 101.372 98.7236L101.356 98.7361ZM47.4635 86.6368L37.0467 73.681L33.1863 76.7848L43.4351 89.5317L47.4635 86.6368Z" fill="black" />
                    <path d="M90.2077 105.935L89.2467 107.032C90.8276 106.698 92.117 106.821 93.2634 107.689C95.0203 109.023 95.3963 110.772 94.1462 112.593C93.6009 113.356 92.9591 114.045 92.2367 114.644C90.9709 115.745 89.6165 116.751 88.3103 117.801C87.1984 118.759 86.1146 119.751 85.1016 120.808C82.7474 123.261 79.9236 122.798 78.5342 119.717C78.2725 119.171 78.1678 118.562 78.2317 117.958C78.2955 117.355 78.5254 116.78 78.8959 116.298C79.6632 115.222 80.614 114.279 81.6364 113.107C80.9021 112.193 80.115 111.214 79.3309 110.239C78.7086 109.465 78.0436 108.694 77.4688 107.875C76.6543 106.727 76.6737 106.393 77.7428 105.533C79.4689 104.146 81.2634 102.843 83.0175 101.49C83.5423 101.068 84.3798 100.86 84.2054 99.592L76.1075 106.103L66.674 94.3698C69.6628 92.1006 72.139 89.4088 75.5378 87.8803C75.8189 88.0915 76.0831 88.3243 76.328 88.5765C78.5059 91.1898 80.6916 93.7968 82.812 96.4499C83.4314 97.3085 83.9977 98.2043 84.5078 99.1322C84.6191 99.3712 84.75 99.6005 84.8991 99.8179C86.6445 101.83 88.3938 103.838 90.2077 105.935ZM68.1445 94.5509L76.2589 104.643L83.552 98.7793C80.6624 95.4322 77.8607 92.1864 75.0839 88.9716L68.1445 94.5509ZM89.3962 115.514L89.5175 115.664C90.6947 114.565 91.92 113.51 93.0295 112.35C93.723 111.621 94.1909 110.69 93.6098 109.609C92.7409 107.995 91.1567 107.497 89.5347 108.394C88.8789 108.734 88.2577 109.137 87.6803 109.598C85.3237 111.595 82.9881 113.626 80.6688 115.669C80.3337 115.996 80.0517 116.373 79.833 116.787C78.9165 118.345 79.1189 119.489 80.5026 120.708C81.6381 121.707 82.5433 121.654 84.0205 120.371C85.8477 118.774 87.6095 117.128 89.3962 115.514ZM84.9654 101.166L77.9678 106.792C79.1906 108.473 80.3496 110.057 81.6408 111.823L88.8562 106.021L84.9654 101.166Z" fill="black" />
                    <path d="M63.9901 112.876C64.5074 113.671 65.0106 114.432 65.4735 115.143C63.7118 117.426 59.2264 117.42 57.1028 114.476C55.2702 111.942 54.1631 109.061 55.3499 105.927L43.9655 91.768C45.4985 90.3263 47.1574 89.0245 48.9222 87.8783C52.601 91.5823 55.8332 95.7038 58.5534 100.16C54.7423 96.9481 52.1978 92.5972 48.7366 89.0088L45.2377 91.8219C48.2045 96.1328 51.805 99.8068 54.7694 104.202C55.358 103.812 55.8518 103.51 56.3144 103.17C57.1813 102.537 57.9938 101.82 58.9066 101.252C59.3265 100.978 59.8606 100.408 60.3764 101.344C60.4876 101.554 61.3454 101.355 61.857 101.339C65.0018 101.27 67.4835 102.549 69.1046 105.202C70.5749 107.62 70.2013 110.157 69.1054 112.917L66.1033 110.935C66.5291 109.076 66.713 107.259 65.3324 105.821C64.9863 105.409 64.5562 105.075 64.0707 104.841C63.5851 104.608 63.0551 104.48 62.5156 104.467C60.3141 104.491 57.9272 107.111 58.0902 109.375C58.2408 111.879 60.7008 113.418 63.9901 112.876ZM64.157 115.329C63.5836 114.242 63.5836 114.242 62.3954 114.197C58.1938 114.026 55.6843 109.965 57.8198 106.611C58.5348 105.569 59.4706 104.697 60.5605 104.057C62.3504 102.956 64.3964 103.407 65.8331 104.915C66.4416 105.494 66.8964 106.215 67.1568 107.014C67.4172 107.813 67.4752 108.665 67.3255 109.494C67.16 110.442 67.3826 111.085 68.5171 110.976C69.6728 107.326 68.2887 104.323 64.7719 102.831C63.3041 102.225 61.6619 102.182 60.1588 102.708C58.6557 103.235 57.397 104.296 56.6228 105.688C55.0899 108.557 56.1107 111.196 57.7426 113.592C59.2276 115.782 61.4766 116.222 64.157 115.329Z" fill="black" />
                    <path d="M108.622 80.8016C105.99 79.9167 105.387 78.943 105.895 76.5657C106.043 76.0834 106.034 75.567 105.868 75.0918C105.702 74.6165 105.389 74.2072 104.973 73.9233C103.637 72.946 102.214 72.5612 100.664 73.3873C97.9499 74.8364 98.0487 79.0512 99.8384 80.7278C100.717 81.5503 101.562 81.5658 103.535 80.8519L105.402 83.1737C103.916 84.7958 101.549 84.9017 98.9346 83.5443C95.1315 81.5687 93.9349 78.6953 94.9651 73.783L83.6865 59.7553C85.6459 58.2118 87.2381 56.4983 89.3819 55.5583C92.6021 59.5635 95.6917 63.4061 98.7844 67.2526C98.9389 67.5702 99.0539 67.9057 99.1267 68.2516C97.2968 67.321 96.5522 65.798 95.5037 64.5894C94.4552 63.3809 93.4098 61.9851 92.3644 60.6849L89.1877 56.7339L85.1291 59.9971L95.2969 72.6433C96.0651 72.0954 96.801 71.5037 97.5012 70.8711C98.9916 69.3733 100.639 68.9857 102.716 69.4755C106.056 70.2304 108.452 71.9609 109.467 75.2928C109.75 76.2135 109.821 77.187 109.674 78.1409C109.528 79.0947 109.168 80.0042 108.622 80.8016ZM108.143 79.3705C108.703 77.9807 108.75 76.4394 108.276 75.0228C107.802 73.6062 106.838 72.4066 105.556 71.6389C102.829 69.8874 99.8013 70.1495 97.4548 72.3419C95.452 74.2134 94.9363 77.4569 96.2798 79.709C97.6232 81.961 100.667 84.2028 104.17 83.2339C103.87 82.4623 103.447 82.0316 102.501 82.2885C101.957 82.4727 101.373 82.5066 100.813 82.3866C100.252 82.2665 99.7347 81.997 99.316 81.6066C96.8582 79.3458 96.7609 74.6074 100.124 72.5725C101.847 71.5312 103.475 71.7893 105.055 72.7428C106.728 73.7418 107.268 75.0413 106.792 76.9973C106.492 78.2324 106.85 78.9322 108.143 79.3705Z" fill="black" />
                    <path d="M52.1784 29.4034C43.6532 36.139 35.1225 42.8704 26.5864 49.5977C26.5281 49.6446 26.3422 49.5328 26.0988 49.4609C26.3373 48.1096 27.6553 47.7825 28.4522 47.0144C29.2492 46.2462 30.2094 45.5697 31.2824 44.707L28.5537 41.3133L30.5309 39.2585L33.4306 42.8651C36.8184 40.5746 39.7441 37.9801 42.9008 35.4739C41.7652 34.2525 40.7837 33.2068 39.8153 32.1696C40.1953 30.851 41.2077 30.4703 42.4051 29.8898C43.4474 30.9632 44.5487 32.1101 45.8166 33.4163C47.2278 32.2816 48.6273 31.1564 50.0268 30.0312C50.6255 29.5498 51.2482 28.8834 52.1512 29.489L52.1784 29.4034ZM45.2077 33.7337C44.6291 33.2369 44.1531 32.8041 43.6569 32.3939C43.1606 31.9837 42.6403 31.5993 42.1675 31.2341C41.2662 31.6019 41.0595 32.1249 41.6973 32.759C42.409 33.461 43.2163 34.1307 44.0213 34.8533L45.2077 33.7337ZM30.1789 40.8349C30.2056 42.1896 31.1249 42.8076 31.8428 43.5174C31.9735 43.6799 32.3849 43.5785 32.9012 43.6157C32.2625 42.2242 31.5127 41.3553 30.1696 40.8233L30.1789 40.8349Z" fill="black" />
                    <path d="M52.1645 29.4974C52.5672 28.9633 53.0081 28.8191 53.4476 29.4214C53.9975 30.177 54.4542 31.0077 55.0438 31.7251C58.5746 36.0051 62.1186 40.2723 65.6759 44.5269C65.8997 44.7543 66.1433 44.9614 66.4039 45.1457C64.5384 49.1942 44.3217 66.8951 40.3497 68.0052C40.0533 67.1987 40.7461 66.9856 41.1768 66.6457C44.5645 64.0048 47.9957 61.418 51.3429 58.7268C56.3416 54.6376 61.046 50.2015 65.421 45.4518C60.7316 40.2641 55.9317 35.2417 52.1847 29.411L52.1645 29.4974Z" fill="black" />
                    <path d="M83.2726 58.2212L88.7425 54.2374C88.0235 55.8349 86.3223 57.3492 83.5216 59.1041C83.0749 58.761 82.6526 58.3874 82.2577 57.9859C78.9535 54.1311 75.6608 50.2692 72.3794 46.4003C72.2518 46.2416 72.1274 46.0868 71.9998 45.9282C71.0975 44.7104 71.0648 44.3353 72.2069 43.4234C73.7114 42.2137 75.3279 41.1434 76.8246 40.0674C78.4991 41.155 87.1525 51.9733 87.7812 53.6469C87.7492 53.7053 87.7049 53.7562 87.6514 53.7959C87.5938 53.8059 87.5346 53.7946 87.485 53.764C87.3691 53.6971 87.2615 53.6168 87.1645 53.5247C87.04 53.3699 86.9156 53.2151 86.788 53.0565C83.5823 49.1224 80.372 45.1879 77.1569 41.2529C77.1227 41.2104 77.0372 41.2154 76.8241 41.1574L72.4622 44.6644C75.6702 49.4504 79.9985 53.2973 83.2726 58.2212Z" fill="black" />
                    <path d="M26.6527 50.4682C30.6679 55.8283 34.6855 61.1887 38.7054 66.5494C38.2156 67.198 37.861 66.8843 37.56 66.5019C35.1603 63.4617 32.7366 60.4472 30.41 57.3545C29.0931 55.5972 27.9388 53.7156 26.7486 51.8692C26.5531 51.486 26.402 51.0817 26.2981 50.664L26.6527 50.4682Z" fill="black" />
                    <path d="M49.3321 36.3238C48.6666 36.9927 48.1442 37.4573 47.6894 37.9823C46.4159 39.4713 46.5601 41.203 48.0207 42.1758C49.0076 42.8222 49.9835 42.7384 50.9663 41.9227C52.1015 41.01 52.7761 39.3972 52.129 38.5923C51.6094 37.9461 50.6949 37.6046 49.9887 37.1721C51.0943 36.3341 52.7453 36.9627 53.2426 38.5762C53.6986 40.0509 52.4999 42.429 50.8888 43.2911C49.4923 44.038 47.4532 43.4603 46.4444 42.0224C46.0683 41.5045 45.85 40.8888 45.8155 40.2488C45.7811 39.6087 45.9319 38.9715 46.25 38.4132C46.9372 36.9751 47.682 36.4209 49.3321 36.3238Z" fill="black" />
                    <path d="M36.2908 47.0831C35.731 47.5332 35.3251 47.8086 34.9729 48.1427C34.4322 48.6541 34.1103 49.3542 34.0749 50.0957C34.0395 50.8372 34.2934 51.5622 34.7832 52.118C35.2017 52.6024 35.7903 52.9081 36.4286 52.9726C37.067 53.0372 37.707 52.8558 38.2181 52.4655C39.3308 51.6283 39.9081 49.6158 39.1194 48.7145C38.6325 48.1566 37.7957 47.912 37.1362 47.5375C37.4062 47.3791 37.7072 47.281 38.0183 47.2501C38.3295 47.2192 38.6433 47.2562 38.9381 47.3586C39.2329 47.4609 39.5016 47.6262 39.7256 47.8429C39.9496 48.0596 40.1235 48.3226 40.2353 48.6137C40.9223 50.2085 40.0892 52.6113 38.5286 53.5283C37.7528 53.9359 36.8602 54.0614 36.0044 53.8833C35.1486 53.7051 34.383 53.2344 33.8392 52.5521C33.2979 51.7816 33.0415 50.8463 33.1137 49.9054C33.1858 48.9646 33.582 48.0763 34.2348 47.3918C34.4905 47.1118 34.8348 46.9281 35.2094 46.8719C35.584 46.8156 35.966 46.8902 36.2908 47.0831Z" fill="black" />
                    <path d="M79.8553 69.9968L72.5661 75.8574C71.9033 74.3962 72.6052 72.9207 72.643 71.4631C72.6808 70.0056 72.8415 68.5257 72.2168 67.2312C71.1366 66.7873 70.625 67.377 70.4627 68.1383C69.9885 70.0103 69.6772 71.9191 69.5322 73.8433C69.363 79.3567 69.198 78.9286 65.5646 81.6461C63.9039 82.8922 62.2306 84.1228 60.5084 85.2845C59.3296 86.0794 58.9991 86.0265 58.135 84.9756C56.0535 82.4505 53.9844 79.909 51.9807 77.3213C50.7673 75.7484 50.9903 74.8555 52.3758 73.3147C54.286 71.1927 56.6388 69.6769 58.9186 68.0223C61.8498 65.8885 64.617 63.5426 67.4619 61.2934C68.2395 60.6683 69.017 60.0431 69.8443 59.4799C70.9826 58.6666 71.341 58.5951 72.2308 59.6381C73.9607 61.6623 75.5919 63.7785 77.1818 65.9152C78.1316 67.184 78.9273 68.5639 79.8553 69.9968ZM78.3342 69.697C75.8676 66.3028 74.3855 62.3975 70.723 59.8246C70.1477 60.2872 69.584 60.7405 69.0203 61.1937C65.5393 63.9415 62.0459 66.6738 58.5736 69.4402C56.8047 70.8624 55.0133 72.2644 53.3261 73.7803C51.8364 75.1118 51.8319 75.6952 53.085 77.3254C54.5442 79.2359 56.0299 81.1315 57.5544 82.9958C58.1767 83.7697 58.9001 84.3987 59.653 85.1759L67.3543 78.9839C68.1668 78.3306 68.3493 77.4511 68.3857 76.4853C68.4437 74.8777 68.4395 73.2565 68.6437 71.6715C68.8193 70.2825 69.1372 68.9146 69.5923 67.5893C70.0074 66.4018 70.9606 65.852 71.8659 66.0225C72.7711 66.1931 73.5193 67.1078 73.602 68.2455C73.6847 69.3832 73.5691 70.6485 73.56 71.8472C73.5562 72.3281 73.606 72.8041 73.6419 73.4697L78.3342 69.697Z" fill="black" />
                </g>
                <path d="M42.171 56.9235C50.3275 54.743 56.031 47.9135 56.0405 45.2065" stroke="#948C97" />
            </svg></div>
    )
}

export default RobotSvg