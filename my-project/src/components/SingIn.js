import React from 'react';
import './SingIn.scss';

class SingIn extends React.Component {
    render() {
        return (<>
            <div className="image">
                <svg width="165" height="212" viewBox="0 0 165 212" fill="none" xmlns="http://www.w3.org/2000/svg" className="topImage">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M164.269 153.093C164.269 100.733 127.705 37.1904 82.5081 11.2649C37.3108 -14.6607 0.238892 5.67311 0.238892 58.0325C0.238892 110.392 36.803 173.427 82.0003 199.861C127.198 226.294 164.269 205.452 164.269 153.093ZM136.846 106.326C138.369 108.359 137.862 110.901 136.846 111.409L86.5702 139.876L77.937 144.96C77.1685 145.474 76.1664 145.474 75.3979 144.96C74.3175 144.385 73.4334 143.499 72.8587 142.418L37.8181 81.4168C36.2946 79.3834 36.8024 76.8417 37.8181 76.3333L43.9121 72.7749C44.6806 72.2609 45.6828 72.2609 46.4513 72.7749C47.5316 73.3502 48.4158 74.2352 48.9905 75.3166L73.3665 117.509C73.7263 117.869 74.0224 118.293 74.2999 118.691C74.8057 119.415 75.2498 120.051 75.9057 120.051C76.2655 120.051 76.6253 120.115 76.9625 120.174C77.5772 120.283 78.1169 120.379 78.4449 120.051L125.674 93.1087C126.442 92.5947 127.444 92.5947 128.213 93.1087C129.293 93.6839 130.177 94.569 130.752 95.6504L136.846 106.326Z" fill="#109CF1" />
                </svg>
                <svg width="239" height="261" viewBox="0 0 239 261" fill="none" xmlns="http://www.w3.org/2000/svg" className="middleImage">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M238.859 0.0446777H0.511841L43.9177 217.93C43.9619 219.401 44.1338 220.866 44.4314 222.308C46.4861 231.58 53.6776 240.594 66.006 247.805C95.7993 265.061 143.572 265.061 173.108 247.805C185.18 240.851 192.371 231.837 194.426 222.565C194.724 221.037 194.896 219.486 194.939 217.93L238.859 0.0446777Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="-10.6785" y1="5.50468" x2="-10.6785" y2="290.687" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#109CF1" stop-opacity="0.01" />
                            <stop offset="0.55" stop-color="#109CF1" stop-opacity="0.5" />
                            <stop offset="0.99" stop-color="#109CF1" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="308" height="179" viewBox="0 0 308 179" fill="none" xmlns="http://www.w3.org/2000/svg" className="bottomImage">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M294.718 72.1125C311.669 81.8993 311.926 97.8673 294.975 107.654L185.304 171.526C168.353 181.313 140.871 181.313 123.919 171.526L13.4783 107.654C-3.47308 97.8673 -3.72992 81.8993 13.2215 72.1125L122.892 8.24085C139.843 -1.54594 167.325 -1.54594 184.277 8.24085L294.718 72.1125Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="473.104" y1="236.119" x2="473.104" y2="-133.822" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4ABBFF" />
                            <stop offset="0.19" stop-color="#70C9FF" />
                            <stop offset="0.41" stop-color="#94D6FE" />
                            <stop offset="0.65" stop-color="#B6E3FF" />
                            <stop offset="1" stop-color="white" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="sectionLogin">
                <p className="title">Sing in</p>
                <div><input type="text" placeholder="Email" className="loginEmail textLogin"></input></div>
                <div><input type="text" placeholder="Password" className="loginPassword textLogin"></input></div>
                <button className="buttonLogin">Sing in</button>
                <p className="fogetInput">I don’t have account. Sign Up </p>
            </div>
        </>)
    }
}

export default SingIn;