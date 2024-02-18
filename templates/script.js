
document.getElementById("chatIcon").addEventListener("click", function() {
    var svg = document.getElementById("chatIcon");
    svg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="82" height="77" viewBox="0 0 82 77" fill="none">
    <g filter="url(#filter0_dd_3_53)">
      <path d="M78 34.5C78 53.5538 61.4345 69 41 69C20.5655 69 4 53.5538 4 34.5C4 15.4462 20.5655 0 41 0C61.4345 0 78 15.4462 78 34.5Z" fill="#1B2D8E"/>
      <path d="M76.5 34.5C76.5 52.6283 60.7067 67.5 41 67.5C21.2933 67.5 5.5 52.6283 5.5 34.5C5.5 16.3717 21.2933 1.5 41 1.5C60.7067 1.5 76.5 16.3717 76.5 34.5Z" stroke="#1B2D8E" stroke-width="3"/>
    </g>
    <rect x="41.3263" y="31.3896" width="4.02521" height="8.44475" rx="2.0126" fill="white" stroke="#1B2D8E"/>
    <rect x="0.493408" y="0.508252" width="29.3729" height="26.1519" rx="13.076" transform="matrix(0.999862 0.0165888 -0.0130455 0.999915 12.749 21.4367)" fill="white" stroke="white"/>
    <path d="M25.2507 36.5562C25.2507 38.4247 23.9199 39.8341 22.4006 39.8341C20.8813 39.8341 19.5504 38.4247 19.5504 36.5562C19.5504 34.6877 20.8813 33.2783 22.4006 33.2783C23.9199 33.2783 25.2507 34.6877 25.2507 36.5562Z" fill="#1B2D8E" stroke="#1B2D8E"/>
    <path d="M35.3011 36.5562C35.3011 38.4247 33.9703 39.8341 32.451 39.8341C30.9317 39.8341 29.6008 38.4247 29.6008 36.5562C29.6008 34.6877 30.9317 33.2783 32.451 33.2783C33.9703 33.2783 35.3011 34.6877 35.3011 36.5562Z" fill="#1B2D8E" stroke="#1B2D8E"/>
    <rect x="0.498799" y="0.501523" width="20.7759" height="17.8895" rx="2.5" transform="matrix(0.999995 0.0030497 -0.00239819 0.999997 49.2253 23.299)" fill="white" stroke="#1B2D8E"/>
    <path d="M53.3894 28.0562H57.5771H64.2774" stroke="#1B2D8E"/>
    <line x1="54.2269" y1="32.2783" x2="64.2773" y2="32.2783" stroke="#1B2D8E"/>
    <line x1="52.5518" y1="36.0564" x2="59.252" y2="36.0564" stroke="#1B2D8E"/>
    <path d="M51.0715 42.9258L46.923 43.4707L48.5788 39.1468L51.0715 42.9258Z" fill="white" stroke="#1B2D8E"/>
    <line x1="25.5" y1="22.7778" x2="25.5" y2="18.9999" stroke="white"/>
    <line x1="28.5" y1="21.7778" x2="28.5" y2="17.9999" stroke="white"/>
    <path d="M31.5 16.5C31.5 18.6609 29.5361 20.5 27 20.5C24.4639 20.5 22.5 18.6609 22.5 16.5C22.5 14.3391 24.4639 12.5 27 12.5C29.5361 12.5 31.5 14.3391 31.5 16.5Z" fill="white" stroke="#1B2D8E"/>
    <path d="M42.1638 33.4023C42.1638 32.2907 43.0649 31.3896 44.1764 31.3896C45.288 31.3896 46.189 32.2907 46.189 33.4023V37.8218C46.189 38.9333 45.288 39.8344 44.1764 39.8344C43.0649 39.8344 42.1638 38.9333 42.1638 37.8218V33.4023Z" fill="#FDFDFD" stroke="#1B2D8E"/>
    <rect x="9.5" y="31.5" width="4.02521" height="8.44475" rx="2.0126" fill="white" stroke="#1B2D8E"/>
    <defs>
      <filter id="filter0_dd_3_53" x="0" y="0" width="82" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_53"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_3_53" result="effect2_dropShadow_3_53"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_53" result="shape"/>
      </filter>
    </defs>
  </svg>
    `;
});

// Flag to track the current state of the SVG
var isSvgStateOne = true;

// Function to toggle between two SVG states
function toggleSvgState() {
    var svg = document.getElementById("chatIcon");
    var messageBox = document.getElementById("messageBox");
    
    if (isSvgStateOne) {
        // Replace SVG with the second state
        svg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="77" viewBox="0 0 82 77" fill="none">
        <g filter="url(#filter0_dd_3_53)">
          <path d="M78 34.5C78 53.5538 61.4345 69 41 69C20.5655 69 4 53.5538 4 34.5C4 15.4462 20.5655 0 41 0C61.4345 0 78 15.4462 78 34.5Z" fill="#1B2D8E"/>
          <path d="M76.5 34.5C76.5 52.6283 60.7067 67.5 41 67.5C21.2933 67.5 5.5 52.6283 5.5 34.5C5.5 16.3717 21.2933 1.5 41 1.5C60.7067 1.5 76.5 16.3717 76.5 34.5Z" stroke="#1B2D8E" stroke-width="3"/>
        </g>
        <rect x="41.3263" y="31.3896" width="4.02521" height="8.44475" rx="2.0126" fill="white" stroke="#1B2D8E"/>
        <rect x="0.493408" y="0.508252" width="29.3729" height="26.1519" rx="13.076" transform="matrix(0.999862 0.0165888 -0.0130455 0.999915 12.749 21.4367)" fill="white" stroke="white"/>
        <path d="M25.2507 36.5562C25.2507 38.4247 23.9199 39.8341 22.4006 39.8341C20.8813 39.8341 19.5504 38.4247 19.5504 36.5562C19.5504 34.6877 20.8813 33.2783 22.4006 33.2783C23.9199 33.2783 25.2507 34.6877 25.2507 36.5562Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <path d="M35.3011 36.5562C35.3011 38.4247 33.9703 39.8341 32.451 39.8341C30.9317 39.8341 29.6008 38.4247 29.6008 36.5562C29.6008 34.6877 30.9317 33.2783 32.451 33.2783C33.9703 33.2783 35.3011 34.6877 35.3011 36.5562Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <rect x="0.498799" y="0.501523" width="20.7759" height="17.8895" rx="2.5" transform="matrix(0.999995 0.0030497 -0.00239819 0.999997 49.2253 23.299)" fill="white" stroke="#1B2D8E"/>
        <path d="M53.3894 28.0562H57.5771H64.2774" stroke="#1B2D8E"/>
        <line x1="54.2269" y1="32.2783" x2="64.2773" y2="32.2783" stroke="#1B2D8E"/>
        <line x1="52.5518" y1="36.0564" x2="59.252" y2="36.0564" stroke="#1B2D8E"/>
        <path d="M51.0715 42.9258L46.923 43.4707L48.5788 39.1468L51.0715 42.9258Z" fill="white" stroke="#1B2D8E"/>
        <line x1="25.5" y1="22.7778" x2="25.5" y2="18.9999" stroke="white"/>
        <line x1="28.5" y1="21.7778" x2="28.5" y2="17.9999" stroke="white"/>
        <path d="M31.5 16.5C31.5 18.6609 29.5361 20.5 27 20.5C24.4639 20.5 22.5 18.6609 22.5 16.5C22.5 14.3391 24.4639 12.5 27 12.5C29.5361 12.5 31.5 14.3391 31.5 16.5Z" fill="white" stroke="#1B2D8E"/>
        <path d="M42.1638 33.4023C42.1638 32.2907 43.0649 31.3896 44.1764 31.3896C45.288 31.3896 46.189 32.2907 46.189 33.4023V37.8218C46.189 38.9333 45.288 39.8344 44.1764 39.8344C43.0649 39.8344 42.1638 38.9333 42.1638 37.8218V33.4023Z" fill="#FDFDFD" stroke="#1B2D8E"/>
        <rect x="9.5" y="31.5" width="4.02521" height="8.44475" rx="2.0126" fill="white" stroke="#1B2D8E"/>
        <defs>
          <filter id="filter0_dd_3_53" x="0" y="0" width="82" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_53"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3_53" result="effect2_dropShadow_3_53"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_53" result="shape"/>
          </filter>
        </defs>
      </svg>
        `;
        messageBox.style.bottom = "20px";
    } else {
        // Replace SVG with the first state
        svg.innerHTML = `
        <svg id="chatIcon" xmlns="http://www.w3.org/2000/svg" width="82" height="77" viewBox="0 0 82 77" fill="none">
        <g filter="url(#filter0_dd_3_47)">
        <path d="M78 34.5C78 53.5538 61.4345 69 41 69C20.5655 69 4 53.5538 4 34.5C4 15.4462 20.5655 0 41 0C61.4345 0 78 15.4462 78 34.5Z" fill="#F9F9F9"/>
        <path d="M76.5 34.5C76.5 52.6283 60.7067 67.5 41 67.5C21.2933 67.5 5.5 52.6283 5.5 34.5C5.5 16.3717 21.2933 1.5 41 1.5C60.7067 1.5 76.5 16.3717 76.5 34.5Z" stroke="#1B2D8E" stroke-width="3"/>
        </g>
        <rect x="41.3263" y="31.3895" width="4.02521" height="8.44475" rx="2.0126" fill="white" stroke="#1B2D8E"/>
        <rect x="0.493408" y="0.508252" width="29.3729" height="26.1519" rx="13.076" transform="matrix(0.999862 0.0165888 -0.0130455 0.999915 12.749 21.4366)" fill="white" stroke="#1B2D8E"/>
        <path d="M25.2507 36.5563C25.2507 38.4248 23.9199 39.8342 22.4006 39.8342C20.8813 39.8342 19.5504 38.4248 19.5504 36.5563C19.5504 34.6878 20.8813 33.2784 22.4006 33.2784C23.9199 33.2784 25.2507 34.6878 25.2507 36.5563Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <path d="M35.3011 36.5563C35.3011 38.4248 33.9703 39.8342 32.451 39.8342C30.9317 39.8342 29.6008 38.4248 29.6008 36.5563C29.6008 34.6878 30.9317 33.2784 32.451 33.2784C33.9703 33.2784 35.3011 34.6878 35.3011 36.5563Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <rect x="0.498799" y="0.501523" width="20.7759" height="17.8895" rx="2.5" transform="matrix(0.999995 0.0030497 -0.00239819 0.999997 49.2253 23.299)" fill="white" stroke="#1B2D8E"/>
        <path d="M53.3894 28.0561H57.5771H64.2774" stroke="#1B2D8E"/>
        <line x1="54.2269" y1="32.2784" x2="64.2773" y2="32.2784" stroke="#1B2D8E"/>
        <line x1="52.5518" y1="36.0563" x2="59.252" y2="36.0563" stroke="#1B2D8E"/>
        <path d="M51.0715 42.9258L46.923 43.4707L48.5788 39.1468L51.0715 42.9258Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <line x1="25.5" y1="22.7779" x2="25.5" y2="19" stroke="#1B2D8E"/>
        <line x1="28.5" y1="21.7779" x2="28.5" y2="18" stroke="#1B2D8E"/>
        <path d="M31.5 16.5C31.5 18.6609 29.5361 20.5 27 20.5C24.4639 20.5 22.5 18.6609 22.5 16.5C22.5 14.3391 24.4639 12.5 27 12.5C29.5361 12.5 31.5 14.3391 31.5 16.5Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <path d="M42.1638 33.4021C42.1638 32.2906 43.0649 31.3895 44.1764 31.3895C45.288 31.3895 46.189 32.2906 46.189 33.4021V37.8217C46.189 38.9332 45.288 39.8343 44.1764 39.8343C43.0649 39.8343 42.1638 38.9332 42.1638 37.8217V33.4021Z" fill="#1B2D8E" stroke="#1B2D8E"/>
        <rect x="9.5" y="31.5" width="4.02521" height="8.44475" rx="2.0126" fill="#1B2D8E" stroke="#1B2D8E"/>
        <defs>
        <filter id="filter0_dd_3_47" x="0" y="0" width="82" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_47"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_3_47" result="effect2_dropShadow_3_47"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_47" result="shape"/>
        </filter>
        </defs>
        </svg>
        `;
        messageBox.style.bottom = "-200px";
    }
    
    
    // Toggle the flag
    isSvgStateOne = !isSvgStateOne;
}

// Add click event listener to the SVG
document.getElementById("chatIcon").addEventListener("click", toggleSvgState);