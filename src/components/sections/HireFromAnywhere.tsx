"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import LogoLoop from "@/components/ui/LogoLoop";

const platforms = [
  { 
    name: "LinkedIn", 
    logo: "in", 
    color: "#0A66C2",
    bgColor: "#E7F3FF",
    svgLogo: (
      <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 27 27" className="h-6 w-6">
        <g fill="#0A66C2">
          <path d="M1.91 0h22.363a1.91 1.91 0 011.909 1.91v22.363a1.91 1.91 0 01-1.91 1.909H1.91A1.91 1.91 0 010 24.272V1.91A1.91 1.91 0 011.91 0zm1.908 22.364h3.818V9.818H3.818zM8.182 5.727a2.455 2.455 0 10-4.91 0 2.455 2.455 0 004.91 0zm2.182 4.091v12.546h3.818v-6.077c0-2.037.75-3.332 2.553-3.332 1.3 0 1.81 1.201 1.81 3.332v6.077h3.819v-6.93c0-3.74-.895-5.78-4.667-5.78-1.967 0-3.277.921-3.788 1.946V9.818z" />
        </g>
      </svg>
    )
  },
  { 
    name: "Indeed", 
    logo: "Indeed", 
    color: "#2164F3",
    bgColor: "#EBF1FF",
    svgLogo: (
      <svg fill="none" viewBox="0 0 75 20" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M74.613 3.458c-.265-.297-.62-.448-1.1-.448-.48 0-.846.159-1.101.487-.255.317-.387.793-.387 1.417v4.524c-.59-.636-1.203-1.092-1.825-1.399a4.568 4.568 0 0 0-1.356-.397 6.917 6.917 0 0 0-.937-.06c-1.559 0-2.822.536-3.791 1.608-.958 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.367 2.52.246.772.59 1.448 1.06 2.022a4.975 4.975 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.345 0 .672-.029.977-.088.205-.03.397-.08.592-.14a5.086 5.086 0 0 0 1.335-.674 7.8 7.8 0 0 0 1.253-1.15v.297c0 .565.143.992.418 1.3.286.297.643.455 1.07.455.438 0 .794-.149 1.07-.435.273-.298.417-.734.417-1.318V4.758c.004-.567-.128-1.004-.383-1.3Zm-3.169 12.477c-.275.575-.643 1.002-1.09 1.28-.46.279-.96.416-1.51.416h-.01a2.79 2.79 0 0 1-1.509-.435c-.459-.298-.825-.734-1.089-1.309-.264-.585-.396-1.29-.396-2.123 0-.784.121-1.477.377-2.062.245-.596.601-1.052 1.05-1.368.46-.328.97-.477 1.548-.477h.03c.541 0 1.04.158 1.499.465.459.308.825.756 1.1 1.34.275.585.408 1.29.408 2.102 0 .872-.133 1.597-.408 2.171Zm-9.896.13c-.194-.168-.459-.258-.785-.258-.296 0-.52.07-.683.199-.398.356-.713.644-.96.852-.242.199-.52.397-.813.584a3.27 3.27 0 0 1-.896.399 3.798 3.798 0 0 1-1.03.128c-.081 0-.163 0-.235-.01a2.829 2.829 0 0 1-1.303-.397c-.47-.267-.836-.662-1.122-1.179-.275-.536-.418-1.15-.427-1.845h6.145c.825 0 1.466-.12 1.915-.337.46-.239.683-.735.683-1.498 0-.833-.224-1.646-.662-2.45-.438-.795-1.09-1.449-1.976-1.953-.878-.506-1.927-.754-3.16-.754h-.091c-.907.01-1.743.16-2.486.437a5.54 5.54 0 0 0-1.969 1.269 5.677 5.677 0 0 0-1.2 1.994 7.49 7.49 0 0 0-.42 2.518c0 1.925.562 3.432 1.682 4.552 1.06 1.062 2.527 1.618 4.391 1.677.103.01.213.01.327.01.876 0 1.66-.11 2.342-.337.683-.228 1.244-.507 1.694-.843.446-.347.783-.704 1.007-1.07.224-.367.337-.695.337-.963 0-.31-.1-.557-.305-.725Zm-7.336-5.605c.5-.526 1.141-.784 1.926-.784h.012c.814 0 1.477.258 1.976.773.5.517.795 1.3.867 2.35h-5.698c.101-1.03.408-1.814.917-2.339Zm-6.045 5.346c-.305 0-.529.07-.692.198-.387.357-.713.645-.958.853-.245.198-.51.397-.806.584-.294.179-.591.318-.906.398a3.742 3.742 0 0 1-1.03.128c-.08 0-.162 0-.234-.01a2.841 2.841 0 0 1-1.304-.396 2.932 2.932 0 0 1-1.11-1.18c-.286-.535-.429-1.15-.44-1.844h6.155c.815 0 1.456-.12 1.915-.338.448-.238.674-.734.674-1.497 0-.834-.215-1.647-.653-2.45-.438-.795-1.1-1.45-1.976-1.954-.878-.505-1.937-.753-3.158-.753h-.103c-.906.01-1.731.16-2.486.437a5.383 5.383 0 0 0-1.957 1.268 5.54 5.54 0 0 0-1.212 1.994 7.451 7.451 0 0 0-.42 2.518c0 1.925.572 3.432 1.692 4.552 1.06 1.063 2.517 1.618 4.382 1.677.112.01.212.01.326.01.886 0 1.661-.109 2.343-.336.682-.229 1.244-.507 1.691-.843.46-.348.785-.704 1.01-1.07.223-.367.337-.695.337-.964 0-.307-.103-.555-.296-.723-.202-.17-.469-.26-.784-.26Zm-6.562-5.346c.499-.526 1.142-.784 1.927-.784h.011c.814 0 1.477.258 1.976.773.509.517.795 1.3.877 2.35h-5.707c.112-1.03.419-1.814.916-2.339ZM6.547 17.969v-7.301c.212.02.417.029.631.029a5.514 5.514 0 0 0 2.792-.744v8.014c0 .685-.163 1.19-.48 1.528-.315.336-.733.504-1.242.504-.5 0-.897-.168-1.223-.515-.315-.336-.478-.842-.478-1.515Zm29.6-14.51c-.265-.298-.631-.449-1.09-.449-.48 0-.846.159-1.102.487-.264.317-.387.793-.387 1.417v4.524c-.59-.636-1.2-1.092-1.824-1.399a4.644 4.644 0 0 0-1.354-.397 6.901 6.901 0 0 0-.938-.06c-1.559 0-2.833.536-3.79 1.608-.959 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.356 2.52a6.03 6.03 0 0 0 1.072 2.022 4.96 4.96 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.336 0 .662-.029.977-.088.205-.03.398-.08.592-.14a5.086 5.086 0 0 0 1.335-.674c.417-.298.827-.685 1.252-1.15v.297c0 .565.144.992.419 1.3.275.297.643.455 1.07.455.417 0 .785-.149 1.06-.435.275-.298.406-.734.406-1.318V4.758c.001-.567-.12-1.004-.374-1.3Zm-3.16 12.476c-.274.575-.642 1.002-1.1 1.28-.448.279-.959.416-1.497.416h-.01c-.55 0-1.05-.149-1.508-.435-.468-.298-.825-.734-1.09-1.309-.264-.585-.397-1.29-.397-2.123 0-.784.123-1.477.366-2.062.254-.596.601-1.052 1.06-1.368.448-.328.968-.477 1.539-.477h.04c.54 0 1.039.158 1.488.465.469.308.835.756 1.11 1.34.264.585.408 1.29.408 2.102 0 .872-.144 1.597-.408 2.171ZM14.995 9.25v.378c.56-.715 1.161-1.23 1.814-1.568.662-.326 1.416-.496 2.272-.496.826 0 1.57.18 2.22.526a3.35 3.35 0 0 1 1.457 1.488c.215.376.348.784.408 1.221.061.426.091.981.091 1.656v5.685c0 .614-.153 1.08-.438 1.387-.284.317-.662.475-1.12.475-.47 0-.846-.158-1.142-.484-.296-.319-.439-.783-.439-1.378v-5.093c0-1.011-.143-1.784-.428-2.32-.285-.534-.867-.803-1.72-.803-.562 0-1.07.168-1.53.486a2.826 2.826 0 0 0-1.018 1.35c-.153.455-.224 1.298-.224 2.56v3.818c0 .624-.152 1.08-.447 1.399-.296.307-.672.465-1.142.465-.459 0-.827-.158-1.121-.484-.296-.319-.438-.783-.438-1.378V9.3c0-.584.133-1.02.398-1.3.254-.286.61-.436 1.07-.436.275 0 .52.06.743.189.224.128.406.317.54.574.132.258.194.567.194.923ZM6.566.473c2.12-.744 4.535-.704 6.348.822.337.307.723.695.876 1.15.184.577-.641-.06-.754-.139-.592-.377-1.182-.694-1.844-.912-3.566-1.07-6.94.864-9.038 3.87C1.278 6.59.707 7.99.24 9.526c-.052.168-.092.387-.184.535-.093.17-.04-.455-.04-.476.07-.635.203-1.25.368-1.864.967-3.273 3.106-6 6.183-7.25Zm4.106 5.881a2.517 2.517 0 1 1-5.032 0 2.517 2.517 0 1 1 5.032 0Z" fill="#003A9B" />
      </svg>
    )
  },
  { 
    name: "Glassdoor", 
    logo: "Glassdoor", 
    color: "#0CAA41",
    bgColor: "#E8F8ED",
    svgLogo: (
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 120 36" className="h-5 w-auto">
        <path fill="#00a264" clipRule="evenodd" d="M115.399 14.355h4.539c.034 0 .062-.03.062-.067V9.812c-.001-1.094-.363-1.984-1.096-2.606-.674-.572-1.686-.917-3.039-.985-.034-.002-.062.027-.062.063v1.688c0 .033.025.06.056.063 1.187.083 2.09.466 2.09 1.8l-2.55.001c-.034 0-.062.03-.062.067v4.386c0 .036.028.066.062.066m-98.18 3.623h-5.504c-.086 0-.141.077-.141.153v2.956c0 .093.07.153.141.153h1.955v2.38c0 1.77-.432 2.72-1.955 2.72-1.272 0-2.175-.771-2.175-3.169V16.26c0-2.296.684-3.372 2.199-3.372 1.366 0 1.923.839 1.923 2.406v.89c0 .093.071.152.142.152h3.384c.086 0 .141-.076.141-.152V15.14c.031-3.718-1.947-5.684-5.527-5.684s-5.912 2.127-5.912 6.6v7.395c0 4.405 2.716 6.32 5.731 6.32 3.376 0 5.731-1.33 5.731-6.252v-5.397a.147.147 0 0 0-.133-.152h-.008.008zm10.536 7.876h-5.292V9.979c0-.094-.07-.153-.141-.153h-3.33c-.086 0-.14.076-.14.153v19.289c0 .093.07.152.14.152h8.755c.086 0 .141-.076.141-.152v-3.253c0-.093-.07-.153-.141-.153h.008zm49.73-9.748c0-4.447 2.284-6.616 5.778-6.616 3.447 0 5.763 2.177 5.747 6.616v7.048c0 4.507-2.143 6.582-5.747 6.582s-5.778-2.033-5.778-6.582zm5.778 10.25c1.46 0 2.065-1.067 2.065-3.337v-6.752c0-2.27-.589-3.371-2.065-3.371s-2.065 1.143-2.065 3.371v6.752c0 2.279.605 3.337 2.065 3.337M96.195 9.49c-3.494 0-5.779 2.169-5.779 6.616v7.048c0 4.55 2.175 6.582 5.779 6.582s5.747-2.075 5.747-6.582v-7.048c.016-4.439-2.3-6.616-5.747-6.616m2.065 13.53c0 2.27-.605 3.337-2.065 3.337s-2.065-1.059-2.065-3.337v-6.752c0-2.228.589-3.371 2.065-3.371s2.065 1.1 2.065 3.371zM65.285 9.82h4.993v.017c3.376 0 5.92 1.855 5.92 6.43v6.718c0 4.532-2.481 6.43-5.96 6.43h-4.953a.147.147 0 0 1-.142-.153V9.99c0-.085.055-.17.142-.17m4.797 16.028c1.507 0 2.45-1.034 2.45-3.448l.007.008v-5.887c0-2.44-.989-3.423-2.489-3.423h-1.374v12.75zM47.078 9.456h-.055c-3.439 0-5.252 2.118-5.252 5.295 0 3.307 2.136 4.846 3.898 6.115l.341.247.409.297.001.001.001.001c1.244.9 2.204 1.594 2.204 3.123 0 1.28-.785 1.788-1.696 1.813-1.005.025-1.735-.805-1.735-1.847v-1.686a.19.19 0 0 0-.189-.194h-3.219c-.11 0-.188.084-.188.195v1.71c0 3.38 1.9 5.253 5.245 5.253 3.344 0 5.37-1.915 5.37-5.278 0-3.502-2.074-5.015-3.881-6.335l-.06-.044a43 43 0 0 0-.596-.428c-1.238-.88-2.388-1.697-2.388-2.969 0-1.262.8-1.855 1.727-1.855.998 0 1.704.771 1.704 1.788v1.49c0 .11.087.195.189.195h3.219c.11 0 .188-.084.188-.194V14.7c.008-3.32-1.994-5.227-5.237-5.244m11.563 0h.055c3.243.017 5.237 1.923 5.237 5.244v1.449c0 .11-.078.194-.188.194h-3.22a.19.19 0 0 1-.188-.194v-1.491c0-1.017-.706-1.788-1.704-1.788-.926 0-1.727.593-1.727 1.855 0 1.271 1.15 2.089 2.388 2.969q.298.21.596.428l.06.044c1.808 1.32 3.881 2.833 3.881 6.335 0 3.363-2.026 5.278-5.37 5.278s-5.245-1.872-5.245-5.252v-1.712c0-.11.079-.194.188-.194h3.22a.19.19 0 0 1 .188.195V24.5c0 1.042.73 1.872 1.735 1.847.91-.025 1.696-.534 1.696-1.813 0-1.53-.96-2.223-2.203-3.123q-.202-.145-.411-.3l-.338-.244-.003-.002c-1.763-1.269-3.9-2.808-3.9-6.115 0-3.177 1.815-5.295 5.253-5.295m55.47 6.398v-1.618c0-2.465-1.9-4.405-4.083-4.405h-6.485c-.078 0-.141.068-.141.152v19.273c0 .084.063.152.141.152h3.172c.086 0 .141-.076.141-.152v-8.023h1.555c1.445 0 1.9.576 1.9 2.042v5.964c0 .093.071.152.141.152h3.274a.153.153 0 0 0 .149-.152v-5.854c0-2-.51-3.279-1.813-3.804 1.311-.576 2.049-1.728 2.049-3.727m-3.549.678c0 .804-.597 1.448-1.335 1.448h-2.41v-4.896h2.41c.738 0 1.335.644 1.335 1.44zm-77.1-6.701h3.377c.063 0 .125.05.141.127l4.381 19.247c.04.11-.04.212-.141.212h-3.235c-.055 0-.126-.051-.141-.128l-.691-3.447h-4.036l-.69 3.447a.15.15 0 0 1-.142.127H29.05c-.094 0-.165-.101-.141-.211L33.32 9.958a.14.14 0 0 1 .142-.127m1.642 6.116-1.335 6.659h2.7l-1.334-6.659-.016.093zM4.6 9.827H.062c-.034 0-.062.03-.062.066v4.385c0 .037.028.067.062.067h2.55c0 1.335-.903 1.718-2.09 1.801a.06.06 0 0 0-.056.063v1.689c0 .035.029.064.062.062 1.353-.068 2.365-.413 3.039-.985.733-.622 1.095-1.512 1.096-2.606V9.893c0-.037-.028-.067-.062-.067" />
      </svg>
    )
  },
  { 
    name: "Monster", 
    logo: "Monster", 
    color: "#6E46AE",
    bgColor: "#F3EFFC",
    svgLogo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24" fill="none" viewBox="0 0 146 24" className="h-6 w-auto">
        <path fill="#6E46AE" d="M52.506 23.715h4.703v-9.518l11.823 9.788V4.501h-4.703v9.524L52.506 4.23v19.484ZM90.914 4.501v4.472h4.423v14.742h4.855V8.973h4.422V4.501h-13.7ZM109.646 4.501v19.214h12.167v-4.472h-7.39v-3.002h5.808v-4.364h-5.808V8.973h7.267V4.501h-12.044ZM135.509 10.413h-2.934V5.666h2.934c1.552 0 2.57 1.042 2.57 2.373 0 1.165-.86 2.374-2.57 2.374Zm2.761 3.911c1.032-.378 4.541-1.94 4.541-6.388 0-3.214-2.541-6.82-8.025-6.82h-7.1v22.599h4.889v-8.924h.251l7.012 8.924h5.843l-7.411-9.39ZM10.993 11.027 0 0v23.715h4.894V11.779l6.099 6.123 6.103-6.123v11.936h4.894V0L10.993 11.027ZM80.668 24c-4.393 0-6.678-2.462-7.056-2.835l2.467-3.5c.383.34 2.132 1.888 4.442 1.888 1.567 0 2.02-.752 2.02-1.352 0-.599-.467-1.179-2.123-1.793l-1.455-.546c-2.683-1.002-4.388-2.87-4.388-5.65 0-3.411 2.732-6 6.61-6 3.493 0 5.454 1.68 5.67 1.867l-2.31 3.602c-.471-.325-1.778-1.037-3.223-1.037-1.352 0-1.97.575-1.97 1.268 0 .904.8 1.282 2.225 1.818l1.317.491c2.762 1.027 4.497 3.145 4.497 5.676 0 3.474-2.747 6.098-6.723 6.098" />
        <path fill="#00B6B4" d="M37.248 19.371c-2.943 0-5.209-2.354-5.209-5.263s2.266-5.263 5.21-5.263c2.943 0 5.208 2.354 5.208 5.263 0 2.91-2.265 5.263-5.209 5.263Zm0-15.15c-5.582 0-9.99 4.428-9.99 9.892 0 5.464 4.408 9.892 9.99 9.892 5.583 0 9.99-4.428 9.99-9.892 0-5.464-4.407-9.892-9.99-9.892Z" />
      </svg>
    )
  },
  { 
    name: "AngelList", 
    logo: "AngelList", 
    color: "#000000",
    bgColor: "#F3F4F6"
  },
  { 
    name: "Wellfound", 
    logo: "Wellfound", 
    color: "#1DB954",
    bgColor: "#E9F9EF"
  },
  { 
    name: "Naukri", 
    logo: "Naukri", 
    color: "#1B4D89",
    bgColor: "#E8EFF7",
    imageLogo: "https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
  },
  { 
    name: "Instahyre", 
    logo: "Instahyre", 
    color: "#FF6B6B",
    bgColor: "#FFEFEF"
  },
];

export default function HireFromAnywhere() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Dark mode color equivalents
  const getDarkColor = (lightColor: string) => {
    if (!isDark) return lightColor;
    
    const colorMap: Record<string, string> = {
      "#A5D8FF": "#5B9BD5",
      "#D0BCFF": "#9B7EDE",
      "#B197FC": "#8B6FD9",
    };
    
    return colorMap[lightColor] || lightColor;
  };
  
  const stats = [
    { value: "10+", label: "Job Boards", color: "#3B82F6" },
    { value: "1M+", label: "Candidates", color: "#A5D8FF" },
    { value: "50%", label: "More Apps", color: "#D0BCFF" },
    { value: "1-Click", label: "Sync", color: "#B197FC" },
  ];

  // Transform platforms data for LogoLoop component
  const logoItems = platforms.map((platform) => ({
    node: (
      <div 
        className="group relative w-40 h-24 bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center border border-gray-100 dark:border-gray-800 hover:border-transparent overflow-hidden"
      >
        {/* Gradient background on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${platform.bgColor} 0%, ${platform.color}10 100%)`
          }}
        />
        
        {/* Logo text, SVG, or Image */}
        {platform.svgLogo ? (
          <div className="relative z-10 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
            {platform.svgLogo}
          </div>
        ) : platform.imageLogo ? (
          <img 
            src={platform.imageLogo}
            alt={platform.name}
            className="relative z-10 h-8 w-auto object-contain transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <span 
            className="relative z-10 font-bold text-xl tracking-tight transition-all duration-500 group-hover:scale-110"
            style={{
              color: platform.color,
            }}
          >
            {platform.logo}
          </span>
        )}

        {/* Subtle corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ backgroundColor: platform.color }}
        />
      </div>
    ),
    title: platform.name,
  }));

  return (
    <section
      id="integrations"
      className="relative w-full max-w-full overflow-x-hidden py-20 md:py-32 bg-gradient-to-b from-white via-[#FAFBFC] to-white dark:from-[#000000] dark:via-[#0A0A0A] dark:to-[#000000] transition-colors"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#A5D8FF] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 rounded-full px-5 py-2.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-sm font-semibold text-[#3B82F6] tracking-tight">
              Integrations
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-6 leading-tight tracking-tight">
            Post Once,{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#A5D8FF')}, ${getDarkColor('#D0BCFF')})`
              }}
            >
              Reach Everywhere
            </span>
          </h2>

          <p className="text-lg text-[#737373] max-w-2xl mx-auto font-light">
            Automatically sync your job postings across all major platforms
          </p>
        </motion.div>

        {/* Logo Slider with enhanced styling */}
        <div className="relative py-8">
          <LogoLoop
            logos={logoItems}
            speed={50}
            direction="left"
            logoHeight={96}
            gap={32}
            hoverSpeed={20}
            fadeOut
            fadeOutColor="#ffffff"
            scaleOnHover={false}
            ariaLabel="Integrated job platforms"
          />
        </div>

        {/* Stats with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => {
            const displayColor = getDarkColor(stat.color);
            
            return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="text-center group relative"
            >
              {/* Background glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: isDark ? 'transparent' : displayColor }}
              />
              
              <div
                className="relative text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                style={{ color: displayColor }}
              >
                {stat.value}
              </div>
              <div className="text-[#737373] text-sm font-medium tracking-tight">
                {stat.label}
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[#737373] dark:text-gray-400 text-sm font-medium">
              Real-time sync with your existing ATS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}