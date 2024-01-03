import React from 'react'

const DiamondRub = ({ className, color }) => {
    return (
        <div className={`${className} absolute`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="41" viewBox="0 0 47 41" fill="none">
                <path opacity="0.4" d="M8.63383 17.4588L0.0898438 18.8376L1.33891 15.0901C4.84831 11.4023 11.9385 3.90168 12.224 3.40204C12.5095 2.9024 13.1757 2.36112 13.4731 2.15293H15.6144L17.4881 3.40204L15.6144 8.84463L22.7522 4.0266L24.9828 5.18648L31.5798 0.0718994V6.34638H37.3846L40.7751 7.5955V8.84463L42.1134 9.91532L43.1841 12.1459L46.3069 12.6812L24.9828 40.0786L10.3503 25.0831L6.51379 24.1016L8.63383 17.4588Z" fill={color} />
            </svg>
        </div>
    )
}

export default DiamondRub