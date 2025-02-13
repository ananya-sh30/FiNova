import { useEffect } from "react";

const FinlogixWidget = () => {
  useEffect(() => {
    // Check if script is already added
    if (!document.querySelector('script[src="https://widget.finlogix.com/Widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://widget.finlogix.com/Widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Widget) {
          window.Widget.init({
            widgetId: "86eeeaff-374a-4117-a983-8a5779b4222c",
            type: "StripBar",
            language: "en",
            showBrand: true,
            isShowTradeButton: true,
            isShowBeneathLink: true,
            isShowDataFromACYInfo: true,
            symbolPairs: [
              { symbolId: "19", symbolName: "EUR/USD" },
              { symbolId: "36", symbolName: "USD/JPY" },
              { symbolId: "20", symbolName: "GBP/AUD" },
              { symbolId: "44", symbolName: "XAU/USD" },
              { symbolId: "45", symbolName: "WTI" },
              { symbolId: "52", symbolName: "SP500" },
            ],
            isAdaptive: true,
          });
        }
      };
    }

    // No need to remove the script since it should persist
  }, []);

  return <div className="finlogix-container" style={{marginTop:"20px"}}></div>;
};

export default FinlogixWidget;
