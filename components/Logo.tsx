import React from "react";
import style from "./Logo.module.css";

export const Logo = (): JSX.Element => (
  <svg
    viewBox="0 0 796 151"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full ${style.svg}`}
  >
    <path
      className={style.path}
      d="M95.3906 31.4062C93.2031 31.4062 89.0365 31.3802 82.8906 31.3281C76.7448 31.276 69.3229 31.25 60.625 31.25C60.5208 39.4271 60.4427 45.9896 60.3906 50.9375C60.3385 55.8854 60.3125 62.2917 60.3125 70.1562C60.3125 79.0625 60.3385 87.6823 60.3906 96.0156C60.4948 104.297 60.5729 110.469 60.625 114.531H34.7656C34.8177 110.625 34.8698 104.688 34.9219 96.7188C34.974 88.6979 35 79.8177 35 70.0781C35 62.8906 35 56.7708 35 51.7188C35 46.6667 34.9479 39.8438 34.8438 31.25C26.3021 31.25 18.6719 31.276 11.9531 31.3281C5.23438 31.3802 1.25 31.4062 0 31.4062V10.0781C4.0625 10.0781 10.7031 10.1042 19.9219 10.1562C29.1406 10.1562 38.3333 10.1562 47.5 10.1562C58.0729 10.1562 68.1771 10.1562 77.8125 10.1562C87.5 10.1042 93.3594 10.0781 95.3906 10.0781V31.4062ZM170.078 74.7656C170.078 80.8073 168.932 86.5885 166.641 92.1094C164.349 97.5781 160.938 102.37 156.406 106.484C152.604 109.922 148.281 112.5 143.438 114.219C138.594 115.885 133.307 116.719 127.578 116.719C122.005 116.719 116.745 115.885 111.797 114.219C106.849 112.5 102.474 109.948 98.6719 106.562C94.2969 102.656 90.9115 97.9167 88.5156 92.3438C86.1719 86.7708 85 80.8594 85 74.6094C85 68.4635 86.0156 62.8906 88.0469 57.8906C90.0781 52.8385 93.2292 48.2552 97.5 44.1406C101.354 40.3906 105.833 37.5521 110.938 35.625C116.094 33.6979 121.615 32.7344 127.5 32.7344C133.438 32.7344 138.88 33.6198 143.828 35.3906C148.776 37.1615 153.229 39.8958 157.188 43.5938C161.51 47.7083 164.74 52.3698 166.875 57.5781C169.01 62.7344 170.078 68.4635 170.078 74.7656ZM146.25 75.0781C146.25 71.3802 145.677 67.7083 144.531 64.0625C143.438 60.4167 141.641 57.3698 139.141 54.9219C137.682 53.4635 135.938 52.3698 133.906 51.6406C131.875 50.8594 129.766 50.4688 127.578 50.4688C124.974 50.4688 122.708 50.8854 120.781 51.7188C118.906 52.5 117.083 53.8281 115.312 55.7031C113.229 57.8385 111.615 60.651 110.469 64.1406C109.375 67.6302 108.828 71.1198 108.828 74.6094C108.828 78.6719 109.375 82.4219 110.469 85.8594C111.615 89.2448 113.516 92.1875 116.172 94.6875C117.63 96.1458 119.349 97.2396 121.328 97.9688C123.307 98.6458 125.391 98.9844 127.578 98.9844C129.87 98.9844 132.057 98.5677 134.141 97.7344C136.276 96.901 138.099 95.7031 139.609 94.1406C141.745 91.849 143.385 89.0104 144.531 85.625C145.677 82.2396 146.25 78.724 146.25 75.0781ZM263.906 39.375C253.75 62.3958 243.542 85.8073 233.281 109.609C223.073 133.359 217.266 146.901 215.859 150.234L193.594 144.609L207.891 112.812C207.161 110.99 203.672 102.708 197.422 87.9688C191.224 73.2292 184.271 57.1094 176.562 39.6094L200.625 33.0469C204.896 44.9219 209.115 56.0417 213.281 66.4062C217.5 76.7708 220 82.9688 220.781 85H221.25C222.188 82.4479 224.505 76.5365 228.203 67.2656C231.953 57.9427 236.328 46.6146 241.328 33.2812L263.906 39.375ZM342.188 73.0469C342.188 85.8073 342.161 95.651 342.109 102.578C342.109 109.505 342.109 113.516 342.109 114.609C341.276 114.714 337.891 114.948 331.953 115.312C326.016 115.677 319.714 115.859 313.047 115.859C308.672 115.859 303.672 115.495 298.047 114.766C292.474 114.036 287.812 112.865 284.062 111.25C279.271 109.167 275.521 106.432 272.812 103.047C270.104 99.6094 268.75 95.599 268.75 91.0156C268.75 86.0156 270.182 81.7448 273.047 78.2031C275.964 74.6615 280.495 71.7448 286.641 69.4531C290.755 67.8906 295.833 66.6667 301.875 65.7812C307.917 64.8958 313.385 64.2708 318.281 63.9062C318.125 61.0938 317.37 58.8021 316.016 57.0312C314.714 55.2083 312.474 53.8021 309.297 52.8125C307.214 52.1354 304.896 51.6667 302.344 51.4062C299.844 51.0938 296.849 50.9375 293.359 50.9375C290.182 50.9375 287.474 50.9896 285.234 51.0938C282.995 51.1979 280.573 51.3021 277.969 51.4062L280.078 33.9844C281.12 33.9323 282.786 33.8802 285.078 33.8281C287.37 33.724 290.599 33.6719 294.766 33.6719C303.568 33.6719 310.885 34.4271 316.719 35.9375C322.604 37.4479 327.552 39.9479 331.562 43.4375C335.26 46.6146 337.943 50.4948 339.609 55.0781C341.328 59.6094 342.188 65.599 342.188 73.0469ZM319.531 87.4219C319.531 85.7552 319.531 83.8281 319.531 81.6406C319.531 79.401 319.505 77.0573 319.453 74.6094C317.943 74.6615 315.26 74.974 311.406 75.5469C307.552 76.0677 304.115 76.9792 301.094 78.2812C299.01 79.1146 297.083 80.4167 295.312 82.1875C293.594 83.9583 292.734 86.1458 292.734 88.75C292.734 91.6667 293.49 93.9844 295 95.7031C296.562 97.4219 298.568 98.75 301.016 99.6875C302.786 100.312 304.792 100.781 307.031 101.094C309.271 101.406 311.693 101.562 314.297 101.562C314.974 101.562 315.755 101.562 316.641 101.562C317.526 101.51 318.464 101.484 319.453 101.484C319.453 100.807 319.453 99.2188 319.453 96.7188C319.505 94.2188 319.531 91.1198 319.531 87.4219ZM490.703 114.531H466.719C466.771 112.24 466.823 108.646 466.875 103.75C466.927 98.8021 466.953 93.3333 466.953 87.3438C466.953 85 466.927 81.4323 466.875 76.6406C466.875 71.849 466.849 68.151 466.797 65.5469C466.693 60.5469 465.807 57.0573 464.141 55.0781C462.474 53.0469 459.844 52.0312 456.25 52.0312C453.906 52.0312 451.25 52.526 448.281 53.5156C445.312 54.5052 442.188 55.9375 438.906 57.8125C438.906 57.9688 438.906 58.4115 438.906 59.1406C438.906 59.8177 438.906 60.6771 438.906 61.7188C438.906 65.7292 438.88 69.7656 438.828 73.8281C438.776 77.8906 438.75 81.5104 438.75 84.6875C438.75 91.4583 438.802 97.6823 438.906 103.359C439.01 109.036 439.062 112.76 439.062 114.531H415.156C415.156 113.177 415.182 110.104 415.234 105.312C415.339 100.469 415.391 94.5312 415.391 87.5C415.391 84.9479 415.365 81.3021 415.312 76.5625C415.312 71.7708 415.286 68.151 415.234 65.7031C415.182 63.9844 415.026 62.2917 414.766 60.625C414.557 58.9062 414.115 57.4479 413.438 56.25C412.656 54.8438 411.641 53.8021 410.391 53.125C409.193 52.3958 407.344 52.0312 404.844 52.0312C402.448 52.0312 399.74 52.6562 396.719 53.9062C393.698 55.1562 390.573 56.7188 387.344 58.5938C387.344 59.1146 387.318 62.3438 387.266 68.2812C387.214 74.1667 387.188 78.776 387.188 82.1094C387.188 87.6823 387.24 93.9844 387.344 101.016C387.448 108.047 387.5 112.552 387.5 114.531H363.594C363.594 111.979 363.62 107.682 363.672 101.641C363.776 95.5469 363.828 86.9792 363.828 75.9375C363.828 71.4583 363.802 65.6771 363.75 58.5938C363.75 51.5104 363.698 43.5677 363.594 34.7656H387.031L386.953 42.5L387.109 42.5781C390.182 40.599 394.479 38.4635 400 36.1719C405.573 33.8802 410.625 32.7344 415.156 32.7344C420 32.7344 424.141 33.6979 427.578 35.625C431.016 37.5 433.62 39.974 435.391 43.0469H435.547C440.182 40.2344 445.365 37.8125 451.094 35.7812C456.875 33.75 462.057 32.7344 466.641 32.7344C474.141 32.7344 480 34.974 484.219 39.4531C488.438 43.8802 490.547 49.7135 490.547 56.9531C490.547 62.9427 490.521 67.8906 490.469 71.7969C490.417 75.651 490.391 79.4271 490.391 83.125C490.391 90.2083 490.443 96.6406 490.547 102.422C490.651 108.151 490.703 112.188 490.703 114.531ZM579.375 73.0469C579.375 85.8073 579.349 95.651 579.297 102.578C579.297 109.505 579.297 113.516 579.297 114.609C578.464 114.714 575.078 114.948 569.141 115.312C563.203 115.677 556.901 115.859 550.234 115.859C545.859 115.859 540.859 115.495 535.234 114.766C529.661 114.036 525 112.865 521.25 111.25C516.458 109.167 512.708 106.432 510 103.047C507.292 99.6094 505.938 95.599 505.938 91.0156C505.938 86.0156 507.37 81.7448 510.234 78.2031C513.151 74.6615 517.682 71.7448 523.828 69.4531C527.943 67.8906 533.021 66.6667 539.062 65.7812C545.104 64.8958 550.573 64.2708 555.469 63.9062C555.312 61.0938 554.557 58.8021 553.203 57.0312C551.901 55.2083 549.661 53.8021 546.484 52.8125C544.401 52.1354 542.083 51.6667 539.531 51.4062C537.031 51.0938 534.036 50.9375 530.547 50.9375C527.37 50.9375 524.661 50.9896 522.422 51.0938C520.182 51.1979 517.76 51.3021 515.156 51.4062L517.266 33.9844C518.307 33.9323 519.974 33.8802 522.266 33.8281C524.557 33.724 527.786 33.6719 531.953 33.6719C540.755 33.6719 548.073 34.4271 553.906 35.9375C559.792 37.4479 564.74 39.9479 568.75 43.4375C572.448 46.6146 575.13 50.4948 576.797 55.0781C578.516 59.6094 579.375 65.599 579.375 73.0469ZM556.719 87.4219C556.719 85.7552 556.719 83.8281 556.719 81.6406C556.719 79.401 556.693 77.0573 556.641 74.6094C555.13 74.6615 552.448 74.974 548.594 75.5469C544.74 76.0677 541.302 76.9792 538.281 78.2812C536.198 79.1146 534.271 80.4167 532.5 82.1875C530.781 83.9583 529.922 86.1458 529.922 88.75C529.922 91.6667 530.677 93.9844 532.188 95.7031C533.75 97.4219 535.755 98.75 538.203 99.6875C539.974 100.312 541.979 100.781 544.219 101.094C546.458 101.406 548.88 101.562 551.484 101.562C552.161 101.562 552.943 101.562 553.828 101.562C554.714 101.51 555.651 101.484 556.641 101.484C556.641 100.807 556.641 99.2188 556.641 96.7188C556.693 94.2188 556.719 91.1198 556.719 87.4219ZM627.5 114.531H600V86.0938H627.5V114.531ZM708.203 52.5781C703.932 53.8802 699.141 55.5208 693.828 57.5C688.516 59.4792 681.615 62.3958 673.125 66.25C673.125 67.5521 673.099 69.9219 673.047 73.3594C673.047 76.7969 673.047 80.2865 673.047 83.8281C673.047 89.349 673.099 95.5208 673.203 102.344C673.307 109.167 673.359 113.229 673.359 114.531H649.375C649.375 112.969 649.401 109.062 649.453 102.812C649.557 96.5625 649.609 88.2031 649.609 77.7344C649.609 72.7344 649.583 66.4323 649.531 58.8281C649.479 51.224 649.427 43.2031 649.375 34.7656H672.812L672.734 46.25L672.891 46.3281C677.839 43.2552 683.151 40.3906 688.828 37.7344C694.505 35.026 698.932 33.2031 702.109 32.2656L708.203 52.5781ZM795.312 73.5156C795.312 81.7969 793.255 88.9583 789.141 95C785.026 101.042 779.297 105.703 771.953 108.984C766.745 111.276 760.729 112.917 753.906 113.906C747.135 114.896 738.854 115.391 729.062 115.391C726.302 115.391 724.036 115.365 722.266 115.312C720.547 115.312 718.854 115.312 717.188 115.312C717.188 111.667 717.214 104.87 717.266 94.9219C717.37 84.9219 717.422 71.6146 717.422 55C717.422 42.9167 717.396 32.474 717.344 23.6719C717.292 14.8177 717.24 6.92708 717.188 0H741.172L740.938 35.0781C749.167 35.2865 756.016 36.0938 761.484 37.5C767.005 38.8542 771.927 40.7552 776.25 43.2031C782.448 46.3802 787.161 50.599 790.391 55.8594C793.672 61.1198 795.312 67.0052 795.312 73.5156ZM771.25 73.2031C771.25 68.6719 770.026 64.7917 767.578 61.5625C765.182 58.2812 762.005 55.8333 758.047 54.2188C755.703 53.1771 753.203 52.4479 750.547 52.0312C747.943 51.6146 745.26 51.4062 742.5 51.4062C742.031 51.4062 741.562 51.4062 741.094 51.4062C740.677 51.4062 740.312 51.4062 740 51.4062C740 52.3438 739.974 55.4948 739.922 60.8594C739.922 66.1719 739.922 70.625 739.922 74.2188C739.922 80.1042 739.922 84.5833 739.922 87.6562C739.974 90.6771 740 93.9062 740 97.3438C743.958 97.3438 747.682 97.0312 751.172 96.4062C754.714 95.7292 757.682 94.7135 760.078 93.3594C763.828 91.276 766.615 88.6198 768.438 85.3906C770.312 82.1615 771.25 78.099 771.25 73.2031Z"
    />
  </svg>
);